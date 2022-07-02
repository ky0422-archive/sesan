import {
    BooleanObject,
    BuiltinFunction,
    Enviroment,
    HashObject,
    LangObject,
    NumberObject,
    ObjectKind,
    StringObject,
    newEnclosedEnvironment,
} from '../object';
import {
    ArrayExpression,
    BlockStatement,
    CallExpression,
    Expression,
    ExpressionKind,
    ExpressionStatement,
    FunctionExpression,
    HashExpression,
    HashPair,
    IfExpression,
    IndexExpression,
    InfixExpression,
    LiteralExpression,
    LiteralKind,
    modify_expression,
    NodeKind,
    PrefixExpression,
    Program,
    Statement,
    StringLiteral,
} from '../parser';
import { TokenType } from '../tokenizer';

const NULL: LangObject = {
    kind: ObjectKind.NULL,
};

export default (program: Program, env: Enviroment): LangObject =>
    evalStatements(program.statements, env);

const getFinalVal = (objects: Array<LangObject>): LangObject => {
    if (objects.length === 0) return NULL;
    return objects[objects.length - 1];
};

const evalStatements = (
    statements: Array<Statement>,
    env: Enviroment
): LangObject => {
    let results: Array<LangObject> = [];

    statements.forEach((statement) => {
        const result = evalStatement(statement, env);

        results.push(result);

        if (result) {
            if (result.kind === ObjectKind.RETURN_VALUE) return result;
            if (result.kind === ObjectKind.ERROR) return result;
        }
    });

    return getFinalVal(results);
};

const evalBlockStatements = (
    statements: Array<Statement>,
    env: Enviroment
): LangObject => {
    let results: Array<LangObject> = [];

    statements.forEach((statement) => {
        const result = evalStatement(statement, env);

        results.push(result);

        if (result) {
            if (result.kind === ObjectKind.RETURN_VALUE) return result;
            if (result.kind === ObjectKind.ERROR) return result;
        }
    });

    return getFinalVal(results);
};

const evalStatement = (statement: Statement, env: Enviroment): LangObject => {
    switch (statement.kind) {
        case NodeKind.ExpressionStatement:
            return evalExpression(statement.expression, env);

        case NodeKind.LetStatement:
            const value = evalExpression(statement.value, env);
            if (value?.kind === ObjectKind.ERROR) return value;
            if (statement.ident)
                env.set(
                    (statement.ident as unknown as StringLiteral).value,
                    value
                );
            return null;

        case NodeKind.ReturnStatement:
            const expression = evalExpression(
                (statement as unknown as ExpressionStatement).expression,
                env
            );
            if (expression)
                return {
                    value: expression,
                    kind: ObjectKind.RETURN_VALUE,
                };
            return NULL;

        default:
            return NULL;
    }
};

const evalExpression = (
    expression: Expression,
    env: Enviroment
): LangObject => {
    if (!expression) return null;
    switch (expression.kind) {
        case ExpressionKind.Literal:
            return evalLiteral(expression as LiteralExpression, env);

        case ExpressionKind.Prefix: {
            const expr = expression as unknown as PrefixExpression;
            return evalPrefix(expr.operator, expr.right, env);
        }
        case ExpressionKind.Infix:
            const infix = expression as unknown as InfixExpression;
            return evalInfix(infix.operator, infix.left, infix.right, env);

        case ExpressionKind.Block:
            return evalBlockStatements(
                (expression as unknown as BlockStatement).statements,
                env
            );

        case ExpressionKind.If: {
            const expr = expression as unknown as IfExpression;
            return evalIfExpression(
                expr.condition,
                expr.consequence,
                expr.alternative,
                env
            );
        }

        case ExpressionKind.Ident:
            return evalIdent(
                (expression as unknown as StringLiteral).value,
                env
            );

        case ExpressionKind.Function: {
            const expr = expression as unknown as FunctionExpression;
            return {
                parameters: expr.arguments,
                body: expr.body,
                env,
                kind: ObjectKind.FUNCTION,
            };
        }

        case ExpressionKind.Call: {
            const expr = expression as unknown as CallExpression;

            const name = (expr.function as unknown as StringLiteral).value;

            if (name === 'quote') return evalQuote(expr.arguments[0], env);

            const functionObject = evalExpression(expr.function, env);

            const args = evalExpressions(expr.arguments, env);

            if (args.length == 1 && args[0]?.kind === ObjectKind.ERROR)
                return args[0];

            return applyFunction(functionObject, args, env);
        }

        case ExpressionKind.Array: {
            const expr = expression as unknown as ArrayExpression;
            const args = evalExpressions(expr.elements, env);
            if (args.length == 1 && args[0]?.kind === ObjectKind.ERROR)
                return args[0];
            const _args: Array<LangObject> = [];
            args.forEach((arg: LangObject) => {
                _args.push(arg);
            });
            return {
                value: _args,
                kind: ObjectKind.ARRAY,
            };
        }

        case ExpressionKind.Index: {
            const expr = expression as unknown as IndexExpression;
            const _expr = evalExpression(expr.left, env);
            if (!_expr) return null;
            if (_expr.kind === ObjectKind.ERROR) return NULL;
            const index = evalExpression(expr.index, env);
            if (!index) return null;
            if (index.kind === ObjectKind.ERROR) return NULL;
            return evalIndex(_expr, index);
        }
        case ExpressionKind.Hash:
            return evalHashArguments(
                (expression as unknown as HashExpression).pairs,
                env
            );

        default:
            return null;
    }
};

const evalQuote = (expression: Expression, env: Enviroment): LangObject => ({
    value: evalUnquoteCalls(expression, env),
    kind: ObjectKind.QUOTE,
});

const convertObjectToAst = (object: LangObject): Expression => {
    if (!object) return null;
    switch (object.kind) {
        case ObjectKind.NUMBER:
            return {
                kind: ExpressionKind.Literal,
                value: {
                    kind: LiteralKind.Number,
                    value: object.value,
                },
            };

        case ObjectKind.BOOLEAN:
            return {
                kind: ExpressionKind.Literal,
                value: {
                    kind: LiteralKind.Boolean,
                    value: object.value,
                },
            };

        case ObjectKind.QUOTE:
            return object.value;

        default:
            return {
                kind: ExpressionKind.Literal,
                value: {
                    kind: LiteralKind.Number,
                    value: 0,
                },
            };
    }
};

const func = (expression: Expression, env: Enviroment): Expression => {
    if (!isUnqoteCall(expression)) return expression;

    if (expression?.kind === ExpressionKind.Call) {
        const call = expression as unknown as CallExpression;
        if (call.arguments.length !== 1) return expression;
        return convertObjectToAst(evalExpression(call.arguments[0], env));
    }

    return expression;
};

const evalUnquoteCalls = (quoted: Expression, env: Enviroment): Expression => {
    const call = modify_expression(quoted, env, func);
    if (!call) return quoted;

    return call;
};

const isUnqoteCall = (expression: Expression): boolean => {
    if (expression?.kind === ExpressionKind.Call) {
        const call = expression as unknown as CallExpression;

        if (call.function?.kind === ExpressionKind.Ident) {
            const ident = call.function as unknown as StringLiteral;

            return ident.value === 'unquote';
        }
    }
    return false;
};

const evalHashArguments = (
    args: Array<HashPair>,
    env: Enviroment
): HashObject => {
    const hash: HashObject = {
        kind: ObjectKind.HASH,
        pairs: new Map(),
    };

    args.forEach((arg: HashPair) => {
        const key = evalExpression(arg.key, env);
        if (!key) return;

        const value = evalExpression(arg.value, env);
        if (!value) return;

        let key_: StringObject | NumberObject | BooleanObject = {
            kind: ObjectKind.STRING,
            value: '',
        };

        switch (key.kind) {
            case ObjectKind.NUMBER:
                key_ = {
                    kind: ObjectKind.NUMBER,
                    value: key.value,
                };
                break;

            case ObjectKind.STRING:
                key_ = {
                    kind: ObjectKind.STRING,
                    value: key.value,
                };
                break;

            default:
                return;
        }

        if (key) hash.pairs.set(key_, value);
    });
    return hash;
};

const evalExpressions = (
    expression: Array<Expression>,
    env: Enviroment
): Array<LangObject> => {
    const ret: Array<LangObject> = [];

    expression.forEach((expr: Expression) => {
        const obj = evalExpression(expr, env);

        if (obj?.kind === ObjectKind.ERROR) {
            ret.push(obj);
            return;
        }

        ret.push(obj);
    });

    return ret;
};

const applyFunction = (
    func: LangObject,
    args: Array<LangObject>,
    env: Enviroment
): LangObject => {
    if (func?.kind === ObjectKind.FUNCTION) {
        const res = evalExpression(
            (func as unknown as FunctionExpression).body,
            extendFunctionEnv(func, args, env)
        );

        if (res?.kind === ObjectKind.RETURN_VALUE) return res.value;

        return res;
    }

    if (func?.kind === ObjectKind.BUILTIN)
        return (func as unknown as BuiltinFunction).func(...args);

    return {
        kind: ObjectKind.ERROR,
        message: 'not a function',
    };
};

const extendFunctionEnv = (
    func: LangObject,
    args: Array<LangObject>,
    env: Enviroment
): Enviroment => {
    if (func?.kind === ObjectKind.FUNCTION) {
        const newEnv = newEnclosedEnvironment(env);

        func.parameters.forEach((param: Expression, i: number) => {
            if (param?.kind === ExpressionKind.Ident) {
                const ident = param as unknown as StringLiteral;
                newEnv.set(ident.value, args[i]);
            }
        });

        return newEnv;
    }

    return new Enviroment();
};

const langObjectUtil = (obj: LangObject, strW: boolean = false): string => {
    if (!obj) return 'NULL';
    switch (obj.kind) {
        case ObjectKind.NUMBER:
            return obj.value.toString();

        case ObjectKind.STRING:
            return strW ? `"${obj.value}"` : obj.value;

        case ObjectKind.BOOLEAN:
            return obj.value ? 'true' : 'false';

        case ObjectKind.ARRAY:
            return `[${obj.value
                .map((v) => langObjectUtil(v, true))
                .join(', ')}]`;

        case ObjectKind.HASH:
            return `{ ${[...obj.pairs.entries()]
                .map(
                    ([key, value]) =>
                        `${langObjectUtil(key)}: ${langObjectUtil(value, true)}`
                )
                .join(', ')} }`;

        case ObjectKind.FUNCTION:
            return `fn(${obj.parameters.map((m) => m?.kind).join(', ')})`;

        case ObjectKind.BUILTIN:
            return `builtin`;

        case ObjectKind.NULL:
            return 'NULL';

        case ObjectKind.ERROR:
            return obj.message;

        default:
            return `[Unknown]`;
    }
};

const builtinFunction = (name: string, env: Enviroment): LangObject => {
    switch (name) {
        case 'print':
            return {
                kind: ObjectKind.BUILTIN,
                func: (...args: Array<LangObject>): LangObject => {
                    console.log(...args.map((arg) => langObjectUtil(arg)));
                    return null;
                },
            };

        default:
            return null;
    }
};

const evalIdent = (name: string, env: Enviroment): LangObject => {
    if (env.get(name)) return env.get(name);

    return builtinFunction(name, env);
};

const evalLiteral = (
    literal: LiteralExpression,
    env: Enviroment
): LangObject => {
    switch (literal.value.kind) {
        case LiteralKind.Number:
            return {
                kind: ObjectKind.NUMBER,
                value: literal.value.value,
            };

        case LiteralKind.String:
            return {
                kind: ObjectKind.STRING,
                value: literal.value.value,
            };

        case LiteralKind.Boolean:
            return {
                kind: ObjectKind.BOOLEAN,
                value: literal.value.value,
            };

        default:
            return NULL;
    }
};

const evalPrefix = (
    operator: TokenType,
    right: Expression,
    env: Enviroment
): LangObject => {
    const expression = evalExpression(right, env);

    if (expression?.kind === ObjectKind.ERROR) return expression;

    switch (operator) {
        case TokenType.MINUS:
            return evalMinus(expression);

        case TokenType.BANG:
            return evalBang(expression);

        default:
            return NULL;
    }
};

const evalInfix = (
    operator: TokenType,
    _left: Expression,
    _right: Expression,
    env: Enviroment
): LangObject => {
    const left = evalExpression(_left, env);

    if (left?.kind === ObjectKind.ERROR) return left;

    const right = evalExpression(_right, env);

    if (right?.kind === ObjectKind.ERROR) return right;

    const error: LangObject = {
        kind: ObjectKind.ERROR,
        message: `type missmatch ${left?.kind} ${right?.kind}`,
    };

    switch (left?.kind) {
        case ObjectKind.NUMBER:
            if (right?.kind === ObjectKind.NUMBER)
                return evalNumberInfix(operator, left, right, env);
            return error;

        case ObjectKind.STRING:
            if (right?.kind === ObjectKind.STRING)
                return evalStringInfix(operator, left, right, env);
            return error;

        case ObjectKind.BOOLEAN:
            if (right?.kind === ObjectKind.BOOLEAN)
                return evalBooleanInfix(operator, left, right, env);
            return error;

        default:
            return error;
    }
};

const evalNumberInfix = (
    operator: TokenType,
    left: LangObject,
    right: LangObject,
    env: Enviroment
): LangObject => {
    if (left?.kind !== ObjectKind.NUMBER || right?.kind !== ObjectKind.NUMBER) {
        return {
            kind: ObjectKind.ERROR,
            message: 'type missmatch',
        };
    }

    switch (operator) {
        case TokenType.PLUS:
            return {
                kind: ObjectKind.NUMBER,
                value: left.value + right.value,
            };

        case TokenType.MINUS:
            return {
                kind: ObjectKind.NUMBER,
                value: left.value - right.value,
            };

        case TokenType.SLASH:
            return {
                kind: ObjectKind.NUMBER,
                value: left.value / right.value,
            };

        case TokenType.ASTERISK:
            return {
                kind: ObjectKind.NUMBER,
                value: left.value * right.value,
            };

        case TokenType.EQUAL:
            return {
                kind: ObjectKind.BOOLEAN,
                value: left.value === right.value,
            };

        case TokenType.NOT_EQUAL:
            return {
                kind: ObjectKind.BOOLEAN,
                value: left.value !== right.value,
            };

        case TokenType.GT:
            return {
                kind: ObjectKind.BOOLEAN,
                value: left.value > right.value,
            };

        case TokenType.LT:
            return {
                kind: ObjectKind.BOOLEAN,
                value: left.value < right.value,
            };

        default:
            return null;
    }
};

const evalBooleanInfix = (
    operator: TokenType,
    left: LangObject,
    right: LangObject,
    env: Enviroment
): LangObject => {
    if (
        left?.kind !== ObjectKind.BOOLEAN ||
        right?.kind !== ObjectKind.BOOLEAN
    ) {
        return {
            kind: ObjectKind.ERROR,
            message: 'type missmatch',
        };
    }

    switch (operator) {
        case TokenType.EQUAL:
            return {
                kind: ObjectKind.BOOLEAN,
                value: left.value === right.value,
            };

        case TokenType.NOT_EQUAL:
            return {
                kind: ObjectKind.BOOLEAN,
                value: left.value !== right.value,
            };

        default:
            return null;
    }
};

const evalStringInfix = (
    operator: TokenType,
    left: LangObject,
    right: LangObject,
    env: Enviroment
): LangObject => {
    if (
        operator !== TokenType.PLUS ||
        left?.kind !== ObjectKind.STRING ||
        right?.kind !== ObjectKind.STRING
    ) {
        return {
            kind: ObjectKind.ERROR,
            message: 'type missmatch',
        };
    }

    return {
        kind: ObjectKind.STRING,
        value: `${left.value}${right.value}`,
    };
};

const evalIfExpression = (
    condition: Expression,
    consequence: Expression,
    alternative: Expression,
    env: Enviroment
): LangObject => {
    const conditionExpression = evalExpression(condition, env);

    if (conditionExpression?.kind === ObjectKind.ERROR)
        return conditionExpression;

    if (conditionExpression?.kind === ObjectKind.BOOLEAN) {
        if (conditionExpression.value) {
            return evalExpression(consequence, env);
        } else if (alternative) {
            return evalExpression(alternative, env);
        } else return NULL;
    }

    return NULL;
};

const evalIndex = (left: LangObject, index: LangObject): LangObject => {
    switch (left?.kind) {
        case ObjectKind.ARRAY:
            if (index?.kind === ObjectKind.NUMBER)
                return evalArrayIndex(left, index);
            return {
                kind: ObjectKind.ERROR,
                message: 'not supported',
            };

        case ObjectKind.HASH:
            let key: string | number;
            switch (index?.kind) {
                case ObjectKind.STRING:
                case ObjectKind.NUMBER:
                    key = index.value;
                    break;
                default:
                    return {
                        kind: ObjectKind.ERROR,
                        message: 'not supported',
                    };
            }

            const newMap: Map<string | number, LangObject> = new Map();

            left.pairs.forEach((value, key) => newMap.set(key.value, value));

            return newMap.get(key) ?? NULL;

        default:
            return NULL;
    }
};

const evalArrayIndex = (left: LangObject, index: LangObject): LangObject => {
    if (index?.kind !== ObjectKind.NUMBER || left?.kind !== ObjectKind.ARRAY) {
        return {
            kind: ObjectKind.ERROR,
            message: 'not supported',
        };
    }

    if (index.value < 0 || index.value >= left.value.length) {
        return {
            kind: ObjectKind.ERROR,
            message: 'index out of range',
        };
    }

    return left.value[index.value];
};

const isTruthy = (obj: LangObject): boolean => {
    if (!obj) return false;

    switch (obj.kind) {
        case ObjectKind.BOOLEAN:
            return obj.value;

        case ObjectKind.NUMBER:
            return obj.value !== 0;

        case ObjectKind.NULL:
            return false;

        default:
            return true;
    }
};

const evalBang = (obj: LangObject): LangObject => ({
    kind: ObjectKind.BOOLEAN,
    value: !isTruthy(obj),
});

const evalMinus = (obj: LangObject): LangObject => {
    if (obj?.kind !== ObjectKind.NUMBER)
        return {
            kind: ObjectKind.ERROR,
            message: 'not supported',
        };

    return {
        kind: ObjectKind.NUMBER,
        value: -obj.value,
    };
};
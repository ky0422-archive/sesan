import * as Sesan from '../../index'

enum TokenType {
    ILLEGAL = 'ILLEGAL',
    EOF = 'EOF',
    IDENT = 'IDENT',

    NUMBER = 'NUMBER',
    STRING = 'STRING',
    TRUE = 'TRUE',
    FALSE = 'FALSE',
    NULL = 'NULL',
    FUNCTION = 'FUNCTION',
    COMMENT = 'COMMENT',
    ELEMENT = 'ELEMENT',
    NULLISH = 'NULLISH',

    ASSIGN = '=',
    PLUS = '+',
    MINUS = '-',
    BANG = '!',
    ASTERISK = '*',
    SLASH = '/',
    PERCENT = '%',
    QUESTION = '?',
    AT = '@',
    QUOTE = '"',
    SINGLE_QUOTE = "'",

    LT = '<',
    GT = '>',
    LTE = '<=',
    GTE = '>=',
    EQUAL = '==',
    NOT_EQUAL = '!=',
    AND = '&&',
    OR = '||',

    COMMA = ',',
    COLON = ':',
    SEMICOLON = ';',
    LPAREN = '(',
    RPAREN = ')',
    LBRACE = '{',
    RBRACE = '}',
    LBRACKET = '[',
    RBRACKET = ']',

    LET = 'LET',
    IF = 'IF',
    ELSE = 'ELSE',
    RETURN = 'RETURN',
    WHILE = 'WHILE',
    IN = 'IN',
    TYPEOF = 'TYPEOF',
    THROW = 'THROW',
    DELETE = 'DELETE',
    USE = 'USE',
    VOID = 'VOID',
    EXPR = 'EXPR',

    CLASS = 'CLASS',
    FOR = 'FOR',
    CONST = 'CONST',
}

interface Token {
    type: TokenType
    literal: string
    line: number
    column: number
}

const tokens: Array<Sesan.TokenCheck> = [
    { curr: '=', next: '=', tokenType: TokenType.EQUAL },
    { curr: '/', next: '/', commentToken: TokenType.COMMENT },
    { curr: '!', next: '=', tokenType: TokenType.NOT_EQUAL },
    { curr: '<', next: '-', tokenType: TokenType.ELEMENT },
    { curr: '<', next: '=', tokenType: TokenType.LTE },
    { curr: '>', next: '=', tokenType: TokenType.GTE },
    { curr: '&', next: '&', tokenType: TokenType.AND },
    { curr: '|', next: '|', tokenType: TokenType.OR },
    { curr: '?', next: '?', tokenType: TokenType.NULLISH },
    { curr: '=', tokenType: TokenType.ASSIGN },
    { curr: '(', tokenType: TokenType.LPAREN },
    { curr: ')', tokenType: TokenType.RPAREN },
    { curr: '{', tokenType: TokenType.LBRACE },
    { curr: '}', tokenType: TokenType.RBRACE },
    { curr: '[', tokenType: TokenType.LBRACKET },
    { curr: ']', tokenType: TokenType.RBRACKET },
    { curr: ';', tokenType: TokenType.SEMICOLON },
    { curr: '.', tokenType: TokenType.ELEMENT },
    { curr: ',', tokenType: TokenType.COMMA },
    { curr: '+', tokenType: TokenType.PLUS },
    { curr: '-', tokenType: TokenType.MINUS },
    { curr: '*', tokenType: TokenType.ASTERISK },
    { curr: '/', tokenType: TokenType.SLASH },
    { curr: '%', tokenType: TokenType.PERCENT },
    { curr: '!', tokenType: TokenType.BANG },
    { curr: '<', tokenType: TokenType.LT },
    { curr: '>', tokenType: TokenType.GT },
    { curr: '?', tokenType: TokenType.QUESTION },
    { curr: '@', tokenType: TokenType.AT },
    { curr: '"', stringToken: TokenType.QUOTE },
    { curr: "'", stringToken: TokenType.SINGLE_QUOTE },
    { curr: ':', tokenType: TokenType.COLON },
    { curr: '\0', tokenType: TokenType.EOF },
]

const fromLiteral = (literal: string): TokenType => {
    switch (literal) {
        case 'let':
            return TokenType.LET
        case 'func':
            return TokenType.FUNCTION
        case 'true':
            return TokenType.TRUE
        case 'false':
            return TokenType.FALSE
        case 'null':
            return TokenType.NULL
        case 'if':
            return TokenType.IF
        case 'else':
            return TokenType.ELSE
        case 'return':
            return TokenType.RETURN
        case 'while':
            return TokenType.WHILE
        case 'in':
            return TokenType.IN
        case 'typeof':
            return TokenType.TYPEOF
        case 'throw':
            return TokenType.THROW
        case 'delete':
            return TokenType.DELETE
        case 'use':
            return TokenType.USE
        case 'void':
            return TokenType.VOID
        case 'expr':
            return TokenType.EXPR
        // Not used, but may be added later
        case 'class':
            return TokenType.CLASS
        case 'for':
            return TokenType.FOR
        case 'const':
            return TokenType.CONST
        default:
            return TokenType.IDENT
    }
}

export { TokenType, Token, tokens, fromLiteral }

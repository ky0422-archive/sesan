import Options, { IOptions } from './types'

export const parseOptions = (option?: string): Options =>
    option
        ? { ...parseOptions(), ...JSON.parse(option) }
        : ({
              allowEval: false,
              allowJavaScript: false,
              useStdLibAutomatically: false,
              stderrPrefix: true,
              stderrColor: true,
              locale: 'en',
          } as IOptions)

export { Options }

export type BuildMode = 'production' | 'development'

export type BuildPaths = {
    entry: string
    output: string
    html: string
}

export type BuildOptions = {
    mode: BuildMode
    paths: BuildPaths
    isDev: boolean
    port: number
}

export type BuildEnv = {
    mode: BuildMode
    port: number
}
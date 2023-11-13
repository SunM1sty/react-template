import path from 'path';
import webpack from 'webpack';

import {buildWebpackConfig} from "./config/build/build-webpack-config";
import {BuildEnv, BuildPaths} from "./config/build/types/config";

export default (env: BuildEnv): webpack.Configuration => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html')
    }

    const MODE = env.mode || 'development'
    const PORT = env.port || 3000

    return buildWebpackConfig({
        mode: MODE,
        paths,
        isDev: MODE === 'development',
        port: PORT
    })
};
const Path = require( 'path' );

const Webpack = require( 'webpack' );
const TerserPlugin = require( 'terser-webpack-plugin' );

const appDirectory = Path.resolve( __dirname, '../' );

const babelLoaderConfiguration = {
test: /\.js$|tsx?$/,
    // Add every directory that needs to be compiled by Babel during the build.
    include: [
        Path.resolve( appDirectory, 'src/' ),
        Path.resolve( appDirectory, 'public/' ),
    ],
    use: {
    loader: 'babel-loader',
    options: {
        cacheDirectory: true,
        presets: [
            "@babel/preset-typescript",
            "@babel/preset-react"
        ],
        plugins: [ ],
    },
},
};

const svgLoaderConfiguration = {
    test: /\.svg$/,
    use: [
        {
            loader: '@svgr/webpack',
        },
    ],
};

const imageLoaderConfiguration = {
    test: /\.(gif|jpe?g|png)$/,
    use: {
        loader: 'url-loader',
        options: {
            name: '[name].[ext]',
        },
    },
};

const styleLoaderConfiguration = {
    test: /\.css$/,
    use: [ 'style-loader', 'css-loader' ],
};

const fontLoaderConfiguration = {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    type: 'asset/resource',
};

module.exports = {
    mode: 'production',
    entry: 
    {
        export: Path.resolve( appDirectory, 'src/ExampleComponent.tsx' ),
    },
    devtool: undefined,
    output: {
        path: Path.resolve( appDirectory, 'bundle' ),
        publicPath: '/',
        filename: 'ExampleComponent.production.min.js',
        library: {
            type: 'umd',
        }
    },
    devServer: {
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
        alias: {}
    },
    externals: 
    {
        'react': 'React',
        'react-dom': 'ReactDOM',
    },
    module: {
        rules: [
            babelLoaderConfiguration,
            imageLoaderConfiguration,
            svgLoaderConfiguration,
            styleLoaderConfiguration,
            fontLoaderConfiguration,
        ],
    },
    optimization: {
        usedExports: true,
        minimize: true,
        minimizer: [ new TerserPlugin() ],
        splitChunks: false,
    },
    plugins: [
        new Webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1,
        }),
    ],
};

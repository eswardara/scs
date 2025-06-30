
// webpack.config.js - Bundle optimization configuration
module.exports = {
    entry: {
        // Critical bundle - loads immediately
        critical: [
            './src/js/navigation.js',
            './src/js/loader.js'
        ],
        // Main bundle - loads after critical
        main: [
            './src/js/animations.js',
            './src/js/utilities.js'
        ],
        // Feature bundles - loads on demand
        carousel: './src/js/carousel.js',
        forms: './src/js/forms.js',
        blog: './src/js/blog.js'
    },
    output: {
        path: path.resolve(__dirname, 'assets/js/dist'),
        filename: '[name]-bundle.[contenthash].min.js',
        chunkFilename: '[name].[contenthash].chunk.js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                }
            }
        },
        minimize: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    // Creates `style` nodes from JS strings
                    // {
                    //     loader: "style-loader"
                    // },
                    // Translates CSS into CommonJS
                    {
                        loader: "css-loader"
                    },
                    // Compiles Sass to CSS
                    {loader: "sass-loader"},
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ]
    ,
    watch: true //auto config file
};

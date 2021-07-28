const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports={
    entry:"./src/index.js",
    output: {
        path: path.resolve(__dirname,"../dist"),
        filename: "[name].[contenthash].js", /** numero aleatorio diferente para usar el ultimo empaquetado */
        publicPath:"",
    },
    resolve: {
        extensions: [".js",".jsx"], /**con esta configuarion no tengo que pasar las extensiones de los archivos */
         
    },
   
    /** aqui se configura babel para que lea los tipos de archivos que le pidamos */
    module: {
      
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: { loader:'babel-loader'},
                exclude:/node_modules/
            },
            {
                test:/\.html$/,
                use: [
                    {loader:'html-loader'}
                ]
            },
            {
                test: /\.css|.sass|.scss$/,
                use:[
                    {
                     loader: MiniCssExtractPlugin.loader,
                    },
                   
                    'css-loader',
                    'sass-loader'
                ],
                

            },
            {
                type:"asset",
                test:/\.(png|svg|jpg|jpeg|gif)$/i,

            }

        ],
    },
   
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:"./public/index.html",
            filename:'./index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'assets/[name].css'
        }),
    ]


}
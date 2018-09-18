const path =require('path')
const HtmlWebpackPlugin=require("html-webpack-plugin")
const CleanWebpackPlugin=require("clean-webpack-plugin")
const { VueLoaderPlugin }=require("vue-loader")
module.exports={
    mode:"development",
    entry:'./src/main.js',
    output:{
        path:path.join(__dirname,"dist"),
        filename:"bundle.js"
    },
    module:{
        rules:[
            {test:/\.vue$/,use:['vue-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.css$/,use:['style-loader','css-loader']},
            { test:/\.js$/,use:['babel-loader'],exclude:/node_modules/},
            {test:/\.(woff|woff2|eot|ttf|otf)$/,use:'file-loader'},
            {test:/\.(png|svg|jpg|gif)$/,use:'file-loader'}
        ]
    },
    plugins:[
      new HtmlWebpackPlugin({
          template:'./src/index.html'
      }),
      new CleanWebpackPlugin(['dist']),
      new VueLoaderPlugin()
    ],
    resolve:{
     alias:{
         'vue$':"vue/dist/vue.js"
     }    
    }
}
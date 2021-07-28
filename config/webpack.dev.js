const { default: merge } = require("webpack-merge");
const common = require("./webpack.common");

const devConfig = {
    mode:"development",
    devServer: {
        port:3000,
        contentBase: "../dist",
        

    },
    target:"web"
    
}

module.exports = merge(common,devConfig)
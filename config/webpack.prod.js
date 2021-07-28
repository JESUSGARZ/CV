const { default: merge } = require("webpack-merge");
const common = require("./webpack.common");


const prodConfig = {
    mode:"production",
    
}

module.exports = merge(common,prodConfig)
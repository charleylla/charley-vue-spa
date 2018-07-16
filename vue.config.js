const loaders = require("./build/loaders");
const externals = require("./build/externals");
module.exports = {
  configureWebpack:{
    module:{
      rules:[...loaders]
    },
    externals
  },
  devServer:{
    overlay:{
      errors:true,
      warnings:true,
    },
    open:true,
  },
};

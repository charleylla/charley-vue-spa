const eslintLoader = {
  test: /\.(js|vue)$/,
  enforce: "pre",
  exclude: /node_modules/,
  loader: "eslint-loader",
  options: {
    fix:true,
    emitWarning:true,
  }
}

module.exports = [
  eslintLoader
]

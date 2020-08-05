const {override, addWebpackAlias} = require("customize-cra");
const path = require("path");

module.exports = override(addWebpackAlias({
    ['@services']: path.resolve(__dirname, 'src/services'),
    ['@app']: path.resolve(__dirname, 'src/app'),
    ['@assets']: path.resolve(__dirname, 'src/assets'),
    ['@styles']: path.resolve(__dirname, 'src/styles'),
  })
)

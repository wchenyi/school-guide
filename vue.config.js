const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  transpileDependencies: ["vuetify"],
  pwa: {
    name: "春院指南",
    themeColor: "#5b145c",
    workboxOptions: {
      skipWaiting: true
    }
  },
  configureWebpack: {
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            warnings: false,
            compress: {
              drop_console: true,
              drop_debugger: true,
              pure_funcs: ["console.log"]
            }
          }
        })
      ]
    }
  }
};

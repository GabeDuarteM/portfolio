const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin")

module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
    }
  },
  excludeFile: str => /\*.{spec,test}.js/.test(str),
  webpack: config => {
    config.plugins.push(
      new SWPrecacheWebpackPlugin({
        verbose: true,
        staticFileGlobsIgnorePatterns: [/\.next\//],
        runtimeCaching: [
          {
            handler: "networkFirst",
            urlPattern: /^https?.*/,
          },
        ],
      }),
    )

    return config
  },
}

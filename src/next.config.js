const withPlugins = require("next-compose-plugins")
const withImages = require("next-images")

module.exports = withPlugins([withImages], {
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/windows": { page: "/windows" },
    }
  },
  excludeFile: str => /\*.{spec,test}.js/.test(str),
})

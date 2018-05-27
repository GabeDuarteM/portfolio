const withPlugins = require("next-compose-plugins")
const optimizedImages = require("next-optimized-images")

module.exports = withPlugins([optimizedImages], {
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/windows": { page: "/windows" },
    }
  },
  excludeFile: str => /\*.{spec,test}.js/.test(str),
})

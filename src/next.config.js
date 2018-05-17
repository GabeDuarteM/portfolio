module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/windows": { page: "/windows" },
    }
  },
  excludeFile: str => /\*.{spec,test}.js/.test(str),
}

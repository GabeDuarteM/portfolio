module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
    }
  },
  excludeFile: str => /\*.{spec,test}.js/.test(str),
}

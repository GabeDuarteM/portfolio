module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" },
    }
  },
  excludeFile: str => /\*.{spec,test}.js/.test(str),
}

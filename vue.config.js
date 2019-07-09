module.exports = {
  configureWebpack: {
    output: {
      library: "VueJedi",
      libraryExport: 'default'
    },
  },
  css: {
    extract: false
  }
}

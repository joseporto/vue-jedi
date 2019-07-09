const path = require('path')

module.exports = {
	title: 'Vue Jedi',
	components: 'src/components/**/[A-Z]*.vue',
  defaultExample: false,
  exampleMode: 'expand',
  usageMode: 'expand',
  require: [
    'babel-polyfill',
    path.join(__dirname, 'src/styles/main.scss')
  ]
}

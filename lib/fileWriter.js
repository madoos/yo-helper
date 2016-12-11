'use strict'

const fs = require('fs')
const util = require('./util')

module.exports = writeFiles

function writeFiles (folderPat, templateVarNames) {
  const filenames = fs.readdirSync(folderPat)
  const copyFilesFunctions = filenames.map(makeCopyFileFunction)

  return function () {
    const _yeoman = this
    const templateParams = templateVarNames.reduce(util.addProp.bind(_yeoman), {})
    copyFilesFunctions.forEach(util.execute.bind(_yeoman, templateParams))
  }
}

function makeCopyFileFunction (filename) {
  const output = filename === '_package.json' ? filename.replace('_', '') : filename.replace('_', '.')

  return function (templateParams) {
    this.fs.copyTpl(
      this.templatePath(filename),
      this.destinationPath(output),
      templateParams)
  }
}


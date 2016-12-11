'use strict'

const util = require('./lib/util')
const getName = util.getval.bind(null, 'name')
const prompts = require('./lib/prompts')
const fileWriter = require('./lib/fileWriter')

module.exports = function yoHelper (generatorName, questions, templatePath) {
  const templateVarNames = util.isFunction(questions) ? questions().map(getName) : questions.map(getName)

  return {
    prompts: prompts(generatorName, questions),
    fileWriter: fileWriter(templatePath, templateVarNames)
  }
}

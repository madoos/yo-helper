'use strict'

const yosay = require('yosay')
const chalk = require('chalk')
const util = require('./util')

module.exports = function (generatorName, questions) {
  return function () {
    const _yeoman = this

    _yeoman.log(yosay(
        'Welcome to the glorious ' + chalk.red(generatorName) + ' generator!'
    ))

    questions = util.isFunction(questions) ? questions.call(_yeoman) : questions
    return this.prompt(questions).then(util.setAnswers.bind(_yeoman))
  }
}

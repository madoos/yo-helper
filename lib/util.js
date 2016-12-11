'use strict'

module.exports = {
  getval,
  isFunction,
  setAnswers,
  addProp,
  execute
}

function getval (key, obj) {
  return obj[key]
}

function isFunction (obj) {
  return Object.prototype.toString.call(obj) === '[object Function]'
}

function setAnswers (answers) {
  this.props = answers
}

function addProp (propsAdder, prop) {
  propsAdder[prop] = this.props[prop]
  return propsAdder
}

function execute (templateParams, copyFile) {
  copyFile.call(this, templateParams)
}

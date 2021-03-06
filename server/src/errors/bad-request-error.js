'use strict'

const { BAD_REQUEST } = require('http-status')

const AbstractError = require('./abstract-error')

class BadRequest extends AbstractError {
  constructor ({ errors, message }) {
    super(message)
    this.status = BAD_REQUEST
    this.errors = errors
  }
}

module.exports = BadRequest

'use strict'

const express = require('express')
const { Student, User, Class, Teacher } = require('../../models')
const { mapList, mapStudentCore, mapStudentExtended } = require('../../utils/entity-mappers')
const { database: databaseLogger } = require('../../utils/logger')
const { NotFoundError } = require('../../errors')
const { validateMiddleware, asyncMiddleware, checkAuthenticated } = require('../../utils/middlewares')

const router = new express.Router()

router.get('/',
  checkAuthenticated([ Student, Teacher ]),
  validateMiddleware('emptySchema'),
  asyncMiddleware(async (req, res) => {
    const students = await Student.findAndCountAll({
      include: [
        {model: User},
        {model: Class}
      ],
      distinct: true
    }).catch(err => databaseLogger.error('Uncaught exception: %s', err))

    const studentsFormatted = mapList(mapStudentCore)(students)
    res.json(studentsFormatted)
  })
)

router.get('/:id(\\d+)',
  checkAuthenticated([ Student ]),
  validateMiddleware('emptySchemaWithId'),
  asyncMiddleware(async (req, res) => {
    const student = await Student.findById(req.params.id, {
      include: [
        { model: User },
        { model: Class }
      ]
    })
    if (!student) {
      throw new NotFoundError(`Student ${req.params.id} not found`)
    }

    const studentFormatted = mapStudentExtended(student)
    res.json(studentFormatted)
  })
)

module.exports = router

const { Appointment } = require('../models')

const index = async (req, res, next) => {
  try {
      res.json(await Appointment.find({}))
  } catch (error){
      res.status(400).json(error)
  }
}

const create = async (req, res, next) => {
    try {
        res.json(await Appointment.create(req.body))
    } catch (error) {
        res.status(400).json(error)
    }
}

const show = async (req, res, next) => {
    try {
        res.json(await Appointment.findById(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
}

const destroy = async (req, res, next) => {
    try {
        res.json(await Appointment.findByIdAndDelete(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
}

const update = async (req, res, next) => {
    try {
        res.json(await Appointment.findByIdAndUpdate(req.params.id, req.body, {new: true}))
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    index,
    create,
    show,
    delete: destroy, 
    update,
}
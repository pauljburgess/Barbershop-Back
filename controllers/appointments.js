const { Appointment } = require('../models')


const create = async (req, res, next) => {
    try {
        res.json(await Appointment.create(req.body))
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
    create,
    delete: destroy,
    update,
}
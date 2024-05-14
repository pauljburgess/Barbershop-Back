const { Service } = require('../models')

const index = async (req, res, next) => {
    try {
        res.json(await Service.find({}))
    } catch (error){
        res.status(400).json(error)
    }
}

const create = async (req, res, next) => {
    try {
        res.json(await Service.create(req.body))
    } catch (error) {
        res.status(400).json(error)
    }
}

const destroy = async (req, res, next) => {
    try {
        res.json(await Service.findByIdAndDelete(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
}

const update = async (req, res, next) => {
    try {
        res.json(await Service.findByIdAndUpdate(req.params.id, req.body, {new: true}))
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    index,
    create,
    delete: destroy,
    update,
}
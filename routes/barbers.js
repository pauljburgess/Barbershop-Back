const express = require('express')
const router = express.Router()
const barberCtrl = require("../controllers/barbers")

router.get("/", barberCtrl.index)

router.post("/", barberCtrl.create)

router.get("/:id", barberCtrl.show)

router.delete("/:id", barberCtrl.delete)

router.put("/:id", barberCtrl.update)


module.exports = router
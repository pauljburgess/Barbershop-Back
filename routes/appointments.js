const express = require('express')
const router = express.Router()
const appointmentsCtrl = require("../controllers/appointments")
const middleware = require('../middleware')


router.get("/", appointmentsCtrl.index)
    
router.post("/", 
    // middleware.stripToken,
    // middleware.verifyToken,
    appointmentsCtrl.create)

router.get("/:id", appointmentsCtrl.show)

router.delete("/:id", 
    middleware.stripToken,
    middleware.verifyToken,
    appointmentsCtrl.delete)

router.put("/:id", 
    middleware.stripToken,
    middleware.verifyToken,
    appointmentsCtrl.update)


module.exports = router
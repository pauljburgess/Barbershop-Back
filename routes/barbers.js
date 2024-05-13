const express = require('express')
const router = express.Router()
const barberCtrl = require("../controllers/barbers")
const middleware = require('../middleware')


router.get("/", barberCtrl.index)
    
router.post("/", 
    middleware.stripToken,
    middleware.verifyToken,
    barberCtrl.create)

router.get("/:id", barberCtrl.show)

router.delete("/:id", 
    middleware.stripToken,
    middleware.verifyToken,
    barberCtrl.delete)

router.put("/:id", 
    middleware.stripToken,
    middleware.verifyToken,
    barberCtrl.update)


module.exports = router
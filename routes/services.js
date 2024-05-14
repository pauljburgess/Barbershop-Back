const express = require('express')
const router = express.Router()
const servicesCtrl = require("../controllers/services")
const middleware = require('../middleware')


router.get("/", servicesCtrl.index)
    
router.post("/", 
    middleware.stripToken,
    middleware.verifyToken,
    servicesCtrl.create)

router.delete("/:id", 
    middleware.stripToken,
    middleware.verifyToken,
    servicesCtrl.delete)

router.put("/:id", 
    middleware.stripToken,
    middleware.verifyToken,
    servicesCtrl.update)


module.exports = router
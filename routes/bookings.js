const express = require('express')
const router = express.Router()
const bookingsCtrl = require("../controllers/bookings")
const middleware = require('../middleware')


router.get("/", bookingsCtrl.index)
    
router.post("/", bookingsCtrl.create)

router.get("/:id", bookingsCtrl.show)

router.delete("/:id", 
    middleware.stripToken,
    middleware.verifyToken,
    bookingsCtrl.delete)

router.put("/:id", 
    middleware.stripToken,
    middleware.verifyToken,
    bookingsCtrl.update)


module.exports = router
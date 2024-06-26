// To create the authentication for this app, the lesson by John A. Jacobs from GA was followed. Much if not all of the code pertaining to it will be identical to his.

const router = require('express').Router()
const AuthCtrl =  require('../controllers/AuthController')
const middleware = require('../middleware')

router.post('/login', AuthCtrl.Login)

router.post('/register', AuthCtrl.Register)

router.put("/:id", 
    middleware.stripToken,
    middleware.verifyToken,
    AuthCtrl.UpdatePassword)

router.get('/session', 
    middleware.stripToken,
    middleware.verifyToken,
    AuthCtrl.CheckSession)

module.exports = router
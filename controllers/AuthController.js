// To create the authentication for this app, the lesson by John A. Jacobs from GA was followed. Much if not all of the code pertaining to it will be identical to his.


const { User } = require('../models')
const middleware = require('../middleware')


const Login = async (req, res) => {
    try {
		const { email, password } = req.body
		const user = await User.findOne({email})
		let matched = await middleware.comparePassword(
			user.passwordDigest,
			password
		)	
		if (matched) {
			let payload = {
				id: user.id,
				email: user.email
			}
			let token = middleware.createToken(payload)
			return res.send({user: payload, token})
		}
		res.status(401).send({ status: 'Error', msg: 'Unautorized'})
    } catch (error) {
		console.log(error)
		res.status(401).send({ status: 'Error', msg: 'An error has occurred!'})
    }
}


const Register = async (req, res) => {
    try {
		const { email, password, name } = req.body
		let passwordDigest = await middleware.hashPassword(password)
		let existingUser = await User.findOne({email})
		if (existingUser) {
			return res.status(400).send("A user with that email already exists")
		} else {
			const user = await User.create({ email, passwordDigest, name})
			res.send(user)
		}
    } catch (error) {
      console.log(error)
    }
}

module.exports = {
    Login,
    Register
}
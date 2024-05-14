// To create the authentication for this app, the lesson by John A. Jacobs from GA was followed. Much if not all of the code pertaining to it will be identical to his.


const { User } = require('../models')
const middleware = require('../middleware')
const { response } = require('express')


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
		res.status(401).send({ status: 'Error', msg: 'Unauthorized'})
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
			return res.status(400).send("Hmmm. According to our records a user already registered with that email.")
		} else {
			const user = await User.create({ email, passwordDigest, name})
			res.send(user)
		}
    } catch (error) {
      console.log(error)
    }
}

const UpdatePassword = async (req, res) => {
	try {
		const { oldPassword, newPassword } = req.body
		let user = await User.findById(req.params.id)
		let matched = await middleware.comparePassword(
			user.passwordDigest,
			oldPassword
		)
		if (matched){
			let passwordDigest = await middleware.hashPassword(newPassword)
			user = await User.findByIdAndUpdate(req.params.id, {passwordDigest})
			console.log(user.id)
			let payload = {
				id: user.id,
				email: user.email,
			}
			return res.send({ status: 'Your password was successfully updated!', user: payload })
		}
		res.status(401).send({ status: 'Error', msg: "Looks like your old password did't match, sorry."})
	} catch (error) {
		console.log(error)
		res.status(401).send({status: 'Error', msg: 'Something went wrong...'})
	}
}

const CheckSession = async (req, res) => {
	const { payload } = res.locals
	res.send(payload)
}

module.exports = {
    Login,
    Register,
		UpdatePassword,
		CheckSession,
}
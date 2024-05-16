// /controllers/api/users.js
require('dotenv').config()
const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { hash } = require('../../config/util')

const checkToken = (req, res) => {
  console.log('req.user', req.user)
  res.json(req.exp)
}

const dataController = {
  async create (req, res, next) {
    try {
      const user = await User.create(req.body)
      console.log(req.body)
      // token will be a string
      const token = createJWT(user)
      // send back the token as a string
      // which we need to account for
      // in the client
      res.locals.data.user = user
      res.locals.data.token = token
      next()
    } catch (e) {
      console.log('you got a database problem')
      res.status(400).json(e)
    }
  },
  async login (req, res, next) {
    try {
      // puprosefully make username use req.body.email
      // then the frontend can use the same field to send username or email
      let user = await User.findOne({ email: req.body.email })
      if (!user) {
        user = await User.findOne({ username: req.body.email })
      }
      if(!user) throw new Error("can't find user with email or username")
      const match = await bcrypt.compare(req.body.password, await hash(user.password, process.env.SECRET))
      if (!match) throw new Error("password is invalid")
      res.locals.data.user = user
      res.locals.data.token = createJWT(user)
      next()
    } catch(err) {
      res.status(400).json({ msg: err.message })
    }
  }
}

const apiController = {
  auth (req, res) {
    res.json(res.locals.data.token)
  }
}

module.exports = {
  checkToken,
  dataController,
  apiController
}

/* -- Helper Functions -- */

function createJWT (user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  )
}
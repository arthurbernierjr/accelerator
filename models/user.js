require('dotenv').config()
const { Schema, model } = require('mongoose')
const { hash } = require('../config/util')

const userSchema = new Schema({
  userName: { type: String, required: true, unique: true },
  firstName: String,
  lastName: String,
  whyAreYouHere: String,
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    minLength: 3,
    required: true
  }
}, {
  timestamps: true,
  toJSON: {
    transform (doc, ret) {
      delete ret.password
      return ret
    }
  }
})

userSchema.pre('save', async function (next) {
  // 'this' is the user doc
  if (!this.isModified('password')) return next()
  // update the password with the computed hash
  this.password = await hash(this.password, process.env.SECRET)
  return next()
})

module.exports = model('User', userSchema)

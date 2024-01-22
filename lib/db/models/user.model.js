
const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  name: {
    type: String,
    require: true
  }, 
  email: {
    type: String,
    require: true
  }, 
  phone: {
    type: String,
    require: true
  }, 
  course:{
    type: String,
    require: true
  },
  city:{
    type: String,
    require: true
  },
  state:{
    type: String,
    require: true
  }
  
}, {
    timestamps: true
})

module.exports = mongoose.models.users || mongoose.model('users', userSchema);


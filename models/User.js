const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const shortid = require('shortid');

// Create Schema
const UserSchema = new Schema({

  _id: {
    type: String,
    default: shortid.generate
  },
  title: {
    type: String, 
  },

  firstName: {
    type: String,
  },

  lastName: {
    type: String,
   
  },
  username: {
    type: String,
    required: true
  },
 
  password: {
    type: String,
    required: true
  },

 
  userLevel: {
    type: String,
  },

  avatar:{
    type:String

  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = User = mongoose.model("users", UserSchema);






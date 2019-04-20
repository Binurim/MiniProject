const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const shortid = require('shortid');

// Create Schema
const PostSchema = new Schema({
  
  postID: {
    type: String,
    //default: shortid.generate
  },

  title: {
    type: String,
    required: true
  },
  
  content: {
    type: String,
    required: true
  },

  categoryID: {
    type: String,
  },
  remarks: {
    type: String,
  },
  publish: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Post = mongoose.model("posts", PostSchema);






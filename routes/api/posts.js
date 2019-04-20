const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load input validation
const validatePostInput = require("../../validation/post");

// Load Post model
const Post = require("../../models/Post");

// @route POST api/posts/newpost
// @desc Register user
// @access Public
router.post("/newpost/:id/:postID", (req, res) => {
    // Form validation
    const { errors, isValid } = validatePostInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    var token = req.headers['authorization'];
 
  if (!token)
    return res.status(403).send({ auth: false, message: 'No token provided.' });
    if (!token)
    return res.status(403).send({ auth: false, message: 'No token provided.' });
  jwt.verify(token, keys.secretOrKey, function(err, decoded) {
    if (err){
    return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    // if everything good, save to request for use in other routes
    
    }
        else {
            const newPost = new Post({
                id:req.params.id,
                postID:req.params.postID,
                title: req.body.title,
                content: req.body.content,
                categoryID: req.body.categoryID,
                remarks: req.body.remarks,
                publish: req.body.publish
            });
                //If token is successfully verified, we can send the autorized data 
                newPost
                    .save()
                    .then(post => res.json(post))
                    .catch(err => console.log(err));
            }
        })  
});

module.exports = router;
const express = require('express');
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

router.post ('/signup', async (req, res)=> {

const saltPassword = await bcrypt.genSalt(10)
const securePassword = await bcrypt.hash(req.body.password, saltPassword)

   const signedUpUser = new User({
    fullName: req.body.fullName,
    email: req.body.email,
    password: securePassword
   });
   console.log(signedUpUser, "signedUpUser")
   signedUpUser.save()
   .then(data => {
    //    res.json(data)
       console.log(data)
   }) 
   .catch(err => {
       res.json(err)
   })
})

router.post('/login', (req, res)=> {
    let getUser;
    User.findOne({
        email: req.body.loginEmail
    }).then(user => {
        if(!user) {
            return res.status(401).json({message: "No User Found"});
        }
        getUser = user;
        return bcrypt.compare(req.body.loginPassword, user.password);
    }).then(res => {
        if (!res) {
            return res.status(401).json({message: "Auth Failed"});
        }
        else {
            console.log('Logged In')
        }
    })
});

module.exports = router
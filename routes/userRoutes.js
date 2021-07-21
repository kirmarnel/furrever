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
    req.session.save(() => {
        req.session.user_id = data.id;
        req.session.logged_in = true;
        
        res.json({ user: data, message: 'You are now logged in!' });
      });
   }) 
   .catch(err => {
       res.json(err)
   })
})

router.post('/login', (req, res)=> {
  console.log (req.body)
    let getUser;
    User.findOne({
        email: req.body.loginEmail
    }).then(user => {
        if(!user) {
            return false
        }
        getUser = user;
        return bcrypt.compare(req.body.loginPassword, user.password);
    }).then(res => {
      console.log(res)
        if (!res) {
            return res.status(401).json({message: "Auth Failed"});
        }
        else {
            req.session.save(() => {
                req.session.user_id = getUser._id;
                req.session.logged_in = true;
                
                res.json({ user: getUser, message: 'You are now logged in!' });
              });
        }
    })
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      // Remove the session variables
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

module.exports = router
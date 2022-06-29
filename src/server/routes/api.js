const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { onErrorResumeNext } = require('rxjs')
const db = "mongodb+srv://Tomato:Tomato@cluster0.giyofje.mongodb.net/Tomato?retryWrites=true&w=majority"
router.get('/',(req,res)=>{res.send("This Msg from Routes")})
mongoose.connect(db, err=> {
  if(err){
    console.log(err)
  }
  else{
    console.log("Connection Success!!!")
  }
})

router.post('/register', (req, res)=>{
  let userData = req.body
  let user = new User(userData)
  user.save((err, registeredUser)=> {
    if(err){console.log(`Error: ${err}`)}
    else{
      let payload = {subject: registeredUser._id}
      let token = jwt.sign(payload, 'RSKHelpline')
      res.status(200).send({token})
    }
  })
})


router.post('/login', (req, res)=> {
  let userData = req.body
  User.findOne({username: userData.username}, (err, user) => {
    if(err){
      console.log(`Error: ${err}`)
    }
    else{
      if(!user){
        res.status(401).send("Invalid Username")
      }
      else if(userData.password !== user.password){
        res.status(401).send("Invalid Password")
      }
      else{
        let payload = {subject: user._id}
        let token = jwt.sign(payload, 'RSKHelpline')
        res.status(200).send({token})
      }
    }
  })
})

function verifyToken(req, res, next){
  if(!req.headers.Authorization){
    return res.status(401).send("UnAuthorized Request")
  }
  let token = req.headers.Authorization.split(' ')[1]
  if (token === 'null'){
    return res.status(401).send("UnAuthorized Request")
  }
  let payload = jwt.verify(token,'RSKHelpline')
  if(!payload){
    return res.status(401).send("UnAuthorized Request")
  }
  req._id = payload.subject

  next()
}
router.get('/cart', verifyToken, (req, res)=> {})
module.exports = router

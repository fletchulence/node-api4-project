const router = require('express').Router();

const { 
   checkBody,
   pushNewUser,
   formattingUsers
} = require('./users-middleware')

// let users = [
//    { username: 'davidfletcher', firstName: 'david', password: 'david1234' }, 
//    { username: 'sarafletcher', firstName: 'sara', password: 'sara1234' }
// ];

// let users = []

// [GET] gets all users
router.get('/users', formattingUsers, (req, res, next)=>{
   try{
      let usersArr = req.users
      console.log(usersArr)
      return res.json( usersArr)
   } catch(err){
      next(err)
   }
});

// [POST] posts a new registrant to the state
router.post('/register', checkBody, pushNewUser, (req, res, next)=>{
   // const {firstName, password, username} = req.body
   try{
      // users.push({ ...req.body, username, firstName, password }) 
      return res.status(201).json({username: req.username, firstName: req.firstName }
         // { username , firstName }
         )
   } catch(err){
      next(err)
   }
});

// [POST] login --> finding something in the list of arrays to match?
router.post('/login', (req, res, next)=>{
   try{
      users.forEach(element => {
         if ( element.username === req.body.username && element.password === element.password ){
            res.json({ message: `welcome in ${element.firstName}`})
         } else {
            console.log(users)
            next()
         }
      });
   } catch(err){
      next(err)
   }   
});

module.exports = router
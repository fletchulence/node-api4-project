const router = require('express').Router()

let users = [
   { username: 'davidfletcher', firstName: 'david', password: 'david1234' }, 
   { username: 'sarafletcher', firstName: 'sara', password: 'sara1234' }
];

// [GET] gets all users
router.get('/users', (req, res, next)=>{
   return res.json( users )
})

module.exports = router
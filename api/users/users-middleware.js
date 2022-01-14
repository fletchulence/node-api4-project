
let users = [
   { username: 'davidfletcher', firstName: 'david', password: 'david1234' }, 
   { username: 'sarafletcher', firstName: 'sara', password: 'sara1234' }
];

module.exports = {
   checkBody,
   formattingUsers,
   pushNewUser
}

function checkBody(req, res, next){
   const { firstName, username, password } = req.body
   if ( !firstName || firstName === undefined || !username || username === undefined || !password || password === undefined  ){
      next({ status: 403, message: 'Please include a First Name, Username, and Password'})
   } else {
      req.username = username
      req.password = password
      req.firstName = firstName
      next()
   }
}

function pushNewUser(req, res, next){
   try{
      users.push({ 
         // ...req.body,
         username: req.username, 
         password: req.password,
         firstName: req.firstName
      })
      next()
   } catch(err){
      next(err)
   }
}

function formattingUsers(req, res, next){
   try{
      req.users = users
      next()
   } catch(err){
      next(err)
   }
}

// function checkUsernamePass(req, res, next){

// }
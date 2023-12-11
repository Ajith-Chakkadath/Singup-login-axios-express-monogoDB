const mongo = require('mongoose')


const loginSchema = new mongo.Schema({
    Username : {type:String},
    Email : {type:String},
    Password : {type:String}
   
}, {Collection : 'login' })

module.exports= mongo.model("login",loginSchema)





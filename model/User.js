const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name :{
        type:String,
        required :true,
        
    },
    email:{
        type :String,
        reqired :true,
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type :String,
        default : 'user'
    },
    token:{
        type:String,
        required:true
    }
})

const User = mongoose.model('User', userSchema);

module.exports ={User};
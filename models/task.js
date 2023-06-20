const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please enter a name'],
        trim:true,
        maxlength:[60, 'Maximum character limit is 60']
    }, 
    completed:{
        type:Boolean,
        default:false,
    },
})

module.exports = mongoose.model('Task',TaskSchema)

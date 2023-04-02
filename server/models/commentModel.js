const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    userId: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    postId: {
        type: ObjectId,
        ref: 'Post',
        required: true
    },
    isDeleted:{
       type:Boolean,
       default:false
    },   
    
},{timestamps:true});

module.exports=mongoose.model(commentSchema,"Comment")

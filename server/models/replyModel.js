const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const replySchema = new mongoose.Schema({
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
    commentId:{
        type: ObjectId,
        ref: 'Comment',
        required: true
    },
    isDeleted:{
       type:Boolean,
       default:false
    },
    
    
},{timestamps:true});

module.exports=mongoose.model(replySchema,"Reply")
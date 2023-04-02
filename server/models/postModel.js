const mongoose=require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const postSchema= new mongoose.Schema({
   
    title:{
        type:String,
    },
    content:{
        type:String,
    },
    image:{
        type: String,
        default: 'default-profile-pic.png'
    },
    userId:{
        type:ObjectId,
        ref:'User',
        required:true
    },
    isDeleted:{
      type:Boolean,
      default:false
    }
 


},{timestamps:true});

module.exports=mongoose.model(postSchema,"Post")
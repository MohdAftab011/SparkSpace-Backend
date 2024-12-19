import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    body:{
        type : String,
        required : [true,'Message body is Required']
    },
    image:{
        type : String
    },
    channelId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Channel',
        required : [true,'Channel ID is Required']
    },
    senderId :{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : [true,'Sender ID is Required']
    },
    workspaceId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Workspace',
        required : [true,'Workspace ID is Required']
    }
});

const Message = mongoose.model('Message',messageSchema);
export default Message;
const router = require("express").Router();
const Conversation = require("../models/Conversation");
const Message = require("../models/Message");

//new conversation
router.post("/",(req,res)=>{
    const newConversation = new Conversation({
        members: [req.body.senderId,req.body.reciverId]
    });
});

//get convo of user

module.exports = router;
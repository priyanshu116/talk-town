import React from "react";
import Conversations from "../../mycomponents/conversations/Conversations";
import Message from "../../mycomponents/message/Message";
import ChatOnline from "../../mycomponents/chatOnline/chatOnline";
import "./messenger.css";




export default function Messenger(){
    return(
        <>
        
   
        <div className="messenger">
            <div className="chatMenu">
            <div className="chatMenuWrapper">
                <input className="chatMenuInputs" placeholder="Search for friends"/>
                <Conversations/>
                
                
            </div>
            </div>
            
            <div className="chatBox">
            <div className="chatBoxWrapper">
            <div className="chatBoxTop">
          <Message/>
          <Message own={true}/>
          <Message/>
          <Message own={true}/>
          <Message/>
          <Message own={true}/>
          <Message/>
          <Message own={true}/>
          <Message/>
          
                
            </div>
            <div className="chatBoxBottom">
                <textarea className="chatMessageInput" placeholder="Type here"></textarea>
                <button className="chatSubmitButton">Send</button>
            </div>
            </div>
            </div>
           
            <div className="chatOnline">
            <div className="chatOnlineWrapper">
                <ChatOnline/>
            </div>
            </div>
            
        </div>
        </>
        
    );
}

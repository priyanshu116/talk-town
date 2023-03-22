import React from 'react';
import './message.css';

export default function Message({own}){
    return(
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
               
                <img className='messageImg
                ' src='http://www.gqindia.com/wp-content/uploads/2015/06/jon-snow_0.jpg'
                 alt=''/>
                <p className='messageText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            <div className="messageBottom">
                1 hour ago
            </div>

            



        </div>
    )
}
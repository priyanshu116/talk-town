import React from "react";

import "./conversations.css";

export default function Conversations(){
    return(
        <>
       
        <div className="conversations">
            <img className="conversationsImg" src="http://www.gqindia.com/wp-content/uploads/2015/06/jon-snow_0.jpg" alt=""/>
            <span className="conversationsName">Jhon snow</span>
            
        </div>
        <div className="conversations">
            <img className="conversationsImg" src="https://tse4.mm.bing.net/th?id=OIP.2LgZq5TJRdDRwQQgaBj7VgHaFv&pid=Api&P=0" alt=""/>
            <span className="conversationsName">Brandon stark </span>
            
        </div>
        <div className="conversations">
            <img className="conversationsImg" src="http://hdqwalls.com/wallpapers/dragon-daenerys-targaryen-1e.jpg" alt=""/>
            <span className="conversationsName">Denarys targareyan</span>
            
        </div>
       
        <div className="conversations">
            <img className="conversationsImg" src="https://tse3.mm.bing.net/th?id=OIP.VaXWR3YG31869WLMlRTAQAHaEK&pid=Api&P=0" alt=""/>
            <span className="conversationsName">White walker</span>
            
        </div>
        </>
        
    )
}
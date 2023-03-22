import React from "react";
import './chatOnline.css';

export default function ChatOnline(){
    return(
        <div className="chatOnline">
            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img className="chatOnlineImg" src="http://www.gqindia.com/wp-content/uploads/2015/06/jon-snow_0.jpg" alt=""/>
                    <div className="chatOnlineBadge">

                    </div>
                </div>
                <span className="chatOnlineName">
                    Jhon snow
                </span>
                
            </div>

            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img className="chatOnlineImg" src="http://hdqwalls.com/wallpapers/dragon-daenerys-targaryen-1e.jpg" alt=""/>
                    <div className="chatOnlineBadge">

                    </div>
                </div>
                <span className="chatOnlineName">
                    Denarys targareyan
                </span>
                
            </div>

        </div>
    )
}
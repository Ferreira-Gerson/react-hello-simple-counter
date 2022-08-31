import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className="bigCounter">
            <div className="clock">
            <i className="fa fa-clock"></i>
            </div>
            <div className="sixDigit">0</div>
            <div className="fiveDigit">0</div>
            <div className="fourDigit">0</div>
            <div className="threeDigit">0</div>
            <div className="twoDigit"></div>
            <div className="oneDigit">0</div>
        </div>
            
            );
};

export default Home;

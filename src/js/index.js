//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from 'prop-types';

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
//import Home from "./component/home.jsx";
function Home (props) {
    return (
        <div className="bigCounter">
            <div className="clock">
            <i className="fa fa-clock"></i>
            </div>
            <div className="sixDigit">{props.sixth}</div>
            <div className="fiveDigit">{props.fifth}</div>
            <div className="fourDigit">{props.fourth}</div>
            <div className="threeDigit">{props.third}</div>
            <div className="twoDigit">{props.second}</div>
            <div className="oneDigit">{props.first}</div>
        </div>

    );

};
Home.propTypes = {
    sixth: propTypes.number,
    fifth: propTypes.number,
    fourth: propTypes.number,
    third: propTypes.number,
    second: propTypes.number,
    first: propTypes.number,
};
let counter = 0;

setInterval (() =>{
    const sixDigit = Math.floor(counter/100000) % 10;
    const fiveDigit= Math.floor(counter/10000) % 10;
    const fourDigit = Math.floor(counter/1000) % 10;
    const threeDigit = Math.floor(counter/100) % 10;
    const twoDigit = Math.floor(counter/10) % 10;
    const oneDigit = Math.floor(counter) % 10;
    counter++;
   
    ReactDOM.render(<Home 
        first={oneDigit} 
        second={twoDigit} 
        third={threeDigit}  
        fourth={fourDigit} 
        fifth={fiveDigit} 
        sixth={sixDigit} 
        />, 
        document.querySelector("#app"));
},1000);
//render your react application

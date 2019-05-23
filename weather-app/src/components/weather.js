import React from "react";

// Shorter version 02 of the initial code -- simple & more readable code
const Weather = props => ( <
    div className = "infoWeath" > {
        props.city &&
        <
        div >
        <
        p > Location: { props.city },
        { props.country } < /p> <
        p > Temprature: { props.temp } < /p> <
        p > Pressure: { props.pressure } < /p> <
        p > Sunset: { props.sunset } < /p> <
        /div>
    } <
    p className = "error" > { props.error } < /p> <
    /div>
);


// Shorter version 01 of the initial code
/*
const Weather = (props) => {
    return (
        <div>
            {props.city &&
        <div>
            <p>Location: {props.city}, {props.country}</p>
            <p>Temprature: {props.temp}</p>
            <p>Pressure: {props.pressure}</p>
            <p>Sunset: {props.sunset}</p>
        </div>
            }
            <p>{props.error}</p>
        </div>
        );
}
*/


// Initial code
/*
class Weather extends React.Component {
    render() {
        return ( 
            <div>
            {this.props.city &&
            <div>
            <p>Location: {this.props.city}, {this.props.country}</p>
            <p>Temprature: {this.props.temp}</p>
            <p>Pressure: {this.props.pressure}</p>
            <p>Sunset: {this.props.sunset}</p>
            < /div>
            }
            <p>{this.props.error}</p>
            </div>
        );
    }
}
*/

export default Weather;
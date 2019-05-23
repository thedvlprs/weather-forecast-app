import React from "react";

// Shorter version of the initial code
const Form = props => (
     <form onSubmit={props.weatherMethod}>
               <input type="text" name="city" placeholder="Your city name"/>
               <button>Search</button>
     </form>
)


/*
class Form extends React.Component {
    render() {
        return ( 
            <form onSubmit={this.props.weatherMethod}>
               <input type="text" name="city" placeholder="Your city name"/>
               <button>Search</button>
            </form>
        );
    }
}
*/

export default Form;

import React from 'react';

const Greet = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Hello {props.firstName}, your family name is: {props.lastName} </h1> 
            {props.children}
        </div>
      
    )
}

export default Greet;
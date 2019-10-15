import React from 'react';

const Greet = ({firstName, lastName}) => {
    // console.log(props);
    return (
        <div>
            <h1>Hello {firstName}, your family name is: {lastName} </h1> 
        </div>
      
    )
}

export default Greet;
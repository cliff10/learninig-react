import React from 'react'

function FunctionClicj() {
    function clickHandler(){
        console.log('Button clicked')
    }
    return (
        <div>
            <buttton onClick={clickHandler}>Click</buttton>
        </div>
    )
}

export default FunctionClicj

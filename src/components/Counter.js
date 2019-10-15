import React, { Component } from 'react'

 class Counter extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              count: 0
         }
     }

     incrementFive(){
         this.increment();
         this.increment();
         this.increment();
         this.increment();
         this.increment();
     }

    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log('Callback value', this.state.count)
        // })
        // console.log(this.state.count)
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))
    }
     
    render() {
        return (
            <div>
                Count - {this.state.count}
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter;
import React, { Component } from 'react'

class UserGreetre extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true 
        }
    }
    
    render() {

        return this.state.isLoggedIn && <div>Welcome Clifford</div>
        // return(
        //     this.state.isLoggedIn ?
        //     <div>Welcome Clifford</div> : 
        //     <div>Welcome Clifford</div> 
        // )
       
        // let message
        // if(this.state.isLoggedIn) {
        //     message = <div>Welcome Clifford</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>
        // if(this.state.isLoggedIn){
        //     return (
        //         <div>
        //             Welcome Clifford
        //         </div>
        //     )
        // } else {
        //     return(
        //       <div>
        //         Welcome Guest
        //     </div>
        //     )
            
        // }
    //     return (
    //         <div>
    //            <div> Welcome Clifford !</div>
    //            <div>Welcome Guest</div>
    //         </div>
    //     )
     }
}

export default UserGreetre

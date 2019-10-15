/* eslint-disable no-undef */
import  React, { Component } from 'react'

class Welcome extends Component {
    render() {
        const {firstName, lastName} = this.props;
        return (
            <div>
                <h1>Welcome {firstName} a.k.a {lastName}</h1>
            </div>
        )
    }
}
export default Welcome;
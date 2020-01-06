// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    onReceiveCoordinates = (e) => {
        console.log(e.data)
    }

    render() {
        return (
            <div>
                <button onClick={this.onReceiveCoordinates}></button>
            </div>
        )
    }
} 
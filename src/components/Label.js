import React, { Component } from 'react'
import './Label.css'

export default class Label extends Component {
    render () {
        return (
            <span className="badge">{ this.props.children }</span>
        )
    }
}
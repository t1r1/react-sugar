import React, { Component } from 'react'
import './Tab.css'

export default class Tab extends Component {

    handleClick(e) {
        this.props.onTabClicked(this.props.name)
    }

    render() {
        let classNames = "tab" + (this.props.active ? " active": "")
        return (
            <li onClick={this.handleClick.bind(this)} className={classNames}>
                { this.props.children }
            </li>
        )
    }
}
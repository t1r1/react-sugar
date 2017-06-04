import React, { Component } from 'react'
import Tab from './Tab'
import Label from './Label'
import './TabBar.css'

export default class TabBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabs: [
                { name: "bronze", active: false, text: "Bronze" },
                { name: "silver", active: false, text: <span>Silver <Label>+5%</Label></span> },
                { name: "gold", active: true, text: <span>Gold <Label>+25%</Label></span> },
                { name: "platinum", active: false, text: <span>Platinum <Label>+35%</Label></span> },
                { name: "black", active: false, text: <span>Black <Label>+40%</Label></span> },
            ]
        }
    }

    handleTabClicked(tabName) {
        let { tabs } = this.state
        tabs.forEach( tab => {
            tab.active = (tab.name === tabName)
        })
        this.setState({
            tabs: tabs
        })
        this.props.onTabSwitched(tabName)
    }

    render() {
        return (
            <ul className="tab-bar">
            {
                this.state.tabs.map( tab => {
                    return (
                        <Tab onTabClicked={this.handleTabClicked.bind(this)} name={tab.name} key={tab.name} active={tab.active}>{ tab.text }</Tab>
                    )
                })
            }
            </ul>
        )
    }
}
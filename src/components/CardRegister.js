import React, { Component } from 'react'
import TabBar from './TabBar'
import RegForm from './RegForm'
import CardInfo from './CardInfo'

export default class CardRegister extends Component {

    handleTabSwitched(tabName) {
        console.log('tab switched to ' + tabName)
    }

    render() {
        return (
            <div>
                <TabBar onTabSwitched={this.handleTabSwitched.bind(this)} />
                <RegForm />
                <CardInfo />
            </div>
        )
    }
}
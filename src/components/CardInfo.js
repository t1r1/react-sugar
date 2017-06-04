import React, { Component } from 'react'
import TabBar from './TabBar'
import './Cardinfo.css';

export default class CardInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: {
                path: '../img/main/card-' + props.name + '.png'
            }
        }
    }

    // changeCardName (cardName) {
    //     this.setState({
    //         cards.path.name = this.props.cardName
    //     })
        
    // }
   

    render() {
        return (
            <div className="card-info">
                {this.state.cards.path} и инфо про категориии
            </div>
        )
    }
}
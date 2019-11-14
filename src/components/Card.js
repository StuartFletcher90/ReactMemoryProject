import React, {Component} from 'react';
import './Card.css';


class Card extends Component {
    render () {

        return(
            <div>
                {card.cardValue}
                {card.cardValue}
                {card.cardValue}
                {card.cardValue}
            </div>
        )
    }
}

const card = {
    cardValue:  1,
    shown: false

}
export default Card;
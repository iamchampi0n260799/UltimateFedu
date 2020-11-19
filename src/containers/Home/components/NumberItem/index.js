import React, { Component } from 'react'

export default class NumberItem extends Component {
    render() {
        const { number } = this.props;
        return (
            <div className="numbers__item">
                <h1 className="counter">{number.number}</h1>
                <p>{number.name}</p>
            </div>
        )
    }
}

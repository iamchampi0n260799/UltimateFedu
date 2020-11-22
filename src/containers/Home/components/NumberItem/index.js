import React, { Component } from 'react';
import CountUp from "react-countup";


export default class NumberItem extends Component {
    render() {
        const { number } = this.props;
        return (
            <div className="numbers__item">
                <h1 className="counter">
                    <CountUp end={number.number} duration={5} />
                </h1>
                <p>{number.name}</p>
            </div>
        )
    }
}

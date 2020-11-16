import React, { Component } from 'react'

export default class ReasonItem extends Component {
    render() {
        return (
            <div className="reasons__item">
                <div className="reasons__one reasons__info">
                    <h1>01</h1>
                    <p>Học theo lộ trình, có định hướng</p>
                </div>
                <div className="reasons__image">
                    <div className="reasons__slider">
                        <img src="./images/reasons_1.jpg" alt />
                        <img src="./images/reasons_3.jpg" alt />
                        <img src="./images/reasons_5.jpg" alt />
                    </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react';
import "./../../../../styles/sass/main.scss";
import NumberItem from "../NumberItem";

export default class Numbers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: [
                {
                    number: 5014,
                    name: "Khóa học & videos"
                },
                {
                    number: 3890,
                    name: "Học viên offline"
                },
                {
                    number: 15,
                    name: "Năm kinh nghiệm"
                },
                {
                    number: 54,
                    name: "Đối tác",
                },
            ]
        }

    }
    render() {
        return (
            <section className="numbers">
                <div className="numbers__content container">
                    {
                        this.state.numbers.map(function (number, index) {
                            return (
                                <NumberItem number={number} key={index} />
                            );
                        })
                    }
                </div>
            </section>

        )
    }
}

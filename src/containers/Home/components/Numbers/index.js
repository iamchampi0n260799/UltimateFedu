import React, { Component } from 'react';
import "./../../../../styles/sass/main.scss";

export default class Numbers extends Component {
    render() {
        return (
            <section className="numbers">
                <div className="numbers__content container">
                    <div className="numbers__item">
                        <h1 className="counter">4</h1>
                        <p>Cở Sở</p>
                    </div>
                    <div className="numbers__item">
                        <h1 className="counter">54</h1>
                        <p>Đối tác</p>
                    </div>
                    <div className="numbers__item">
                        <h1 className="counter">3250</h1>
                        <p>Học Viên</p>
                    </div>
                    <div className="numbers__item">
                        <h1 className="counter">3</h1>
                        <p>Năm Hoạt Động</p>
                    </div>
                </div>
            </section>

        )
    }
}

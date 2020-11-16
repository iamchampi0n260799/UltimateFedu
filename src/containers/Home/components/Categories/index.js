import React, { Component } from 'react';
import "./../../../../styles/sass/main.scss";

export default class Categories extends Component {
    render() {
        return (
            <section className="categories">
                <div className="categories__content container">
                    <h1>Các Khóa Học Tại Cybersoft</h1>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="categories__item shadow-border">
                                <a href="#">
                                    <img src="./images/khoatuduy.jpg" alt="Card image" />
                                    <h4>Lập Trình Tư Duy</h4>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="categories__item shadow-border">
                                <a href="#">
                                    <img src="./images/khoafrontend.jpg" alt="Card image" />
                                    <h4>Lập Trình Front End</h4>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="categories__item shadow-border">
                                <a href="#">
                                    <img src="./images/khoabackend.jpg" alt="Card image" />
                                    <h4>Lập Trình Back End</h4>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="categories__item shadow-border">
                                <a href="#">
                                    <img src="./images/khoamobile.jpg" alt="Card image" />
                                    <h4>Lập Trình Di Động</h4>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="categories__item shadow-border">
                                <a href="#">
                                    <img src="./images/khoafullstack.jpg" alt="Card image" />
                                    <h4>Lập Trình Full Stack</h4>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="categories__item shadow-border">
                                <a href="#">
                                    <img src="./images/khoadesign.jpg" alt="Card image" />
                                    <h4>Thiết Kế Web</h4>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

import React, { Component } from 'react';
import "./footer.css";

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer__top container">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="footer__menu">
                                <ul>
                                    <li><a href="#">Về chúng tôi</a></li>
                                    <li><a href="#">Liên hệ</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="footer__menu">
                                <ul>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Hỗ trợ và Tư vấn</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="footer__menu footer__icon">
                                <ul>
                                    <li>
                                        <a href="#"><i className="fab fa-facebook-square" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-youtube" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom container">
                    <div className="row">
                        <div className="col-6">
                            <div className="footer__botLeft">
                                {/* <img src="./images/logo.png" alt /> */}
                                <p className="mb-0">Elearning Cybersoft | Copyright © 2020 Cybersoft ELearning</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="footer__botRight">
                                <ul>
                                    <li><a href="#">Điều khoản</a></li>
                                    <li><a href="#">Chính sách bảo mật</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        )
    }
}

import React from 'react';
import "./../../styles/sass/main.scss";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

export default function Footer() {
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
                                    <a href="#">
                                        <FacebookIcon />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <TwitterIcon />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <YouTubeIcon />
                                    </a>
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
                            <img src="./images/logo.png" className="img-fluid" alt="Elearning Cybersoft" />
                            <p className="mb-0">Copyright © 2020 Cybersoft ELearning</p>
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


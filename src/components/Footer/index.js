import React from 'react';
import "./../../styles/sass/main.scss";
// import FacebookIcon from '@material-ui/icons/Facebook';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import YouTubeIcon from '@material-ui/icons/YouTube';

export default function Footer() {
    return (
        <footer>
            <div>
                <div classname="footer__top container">
                    <div classname="row">
                        <div classname="col-sm-3">
                            <div classname="footer__menu">
                                <ul>
                                    <li><a href="#">Về chúng tôi</a></li>
                                    <li><a href="#">Liên hệ</a></li>
                                </ul>
                            </div>
                        </div>
                        <div classname="col-sm-3">
                            <div classname="footer__menu">
                                <ul>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Hỗ trợ và Tư vấn</a></li>
                                </ul>
                            </div>
                        </div>
                        <div classname="col-sm-3">
                            <div classname="footer__menu footer__icon">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <facebookicon>
                                            </facebookicon></a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <twittericon>
                                            </twittericon></a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <youtubeicon>
                                            </youtubeicon></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div classname="footer__bottom container">
                    <div classname="row">
                        <div classname="col-6">
                            <div classname="footer__botLeft">
                                <img src="./images/logo.png" classname="img-fluid" alt="Elearning Cybersoft" />
                                <p classname="mb-0">Copyright © 2020 Cybersoft ELearning</p>
                            </div>
                        </div>
                        <div classname="col-6">
                            <div classname="footer__botRight">
                                <ul>
                                    <li><a href="#">Điều khoản</a></li>
                                    <li><a href="#">Chính sách bảo mật</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}


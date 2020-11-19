import React, { Component } from 'react'
import "./../../styles/sass/main.scss";

export default class Header extends Component {

    render() {
        return (
            <header className="container">
                <nav className="navbar navbar-expand-lg fixed-top header__content">
                    <div className="col-sm-6">
                        <div className="header__left">
                            <a className="navbar-brand" href="#">
                                <img src="./images/logo.png" className="img-fluid" alt="ELearning Cybersoft" />
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="header__right">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">TRANG CHỦ</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            CÁC KHÓA HỌC
                                        </a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">Lập Trình Tư Duy</a>
                                            <a className="dropdown-item" href="#">Lập Trình Front End</a>
                                            <a className="dropdown-item" href="#">Lập Trình Back End</a>
                                            <a className="dropdown-item" href="#">Lập Trình Di Động</a>
                                            <a className="dropdown-item" href="#">Lập Trình Full Stack</a>
                                            <a className="dropdown-item" href="#">Thiết Kế Web</a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">SỰ KIỆN</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">BLOG</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">LIÊN HỆ</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">ĐĂNG NHẬP</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}
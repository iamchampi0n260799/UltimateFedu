import React, { Component } from 'react';
import "../../../../styles/sass/main.scss";
import { Link } from "react-router-dom";

export default class CourseCarousel extends Component {
    render() {
        return (
            <section className="courseCarousel">
                <div className="courseCarousel__content">
                    <h1 className="courseCarousel__title">HỌC VIỆN CYBERSOFT CHUYÊN ĐÀO TẠO</h1>
                    <span className="display-3">LẬP TRÌNH FRONT END</span>
                    <p>HỌC THỰC TẾ - LÀM CỰC DỄ</p>
                    <Link to="/courses" className="courseCarousel__link">Xem Thêm</Link>
                </div>
            </section>
        )
    }
}

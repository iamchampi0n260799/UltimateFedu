import React, { Component } from 'react';
import "../../../../styles/sass/main.scss";
import { Link } from "react-router-dom";

export default class CourseCarousel extends Component {
    render() {
        return (
            <section className="courseCarousel">
                <div className="courseCarousel__content">
                    <h1 className="courseCarousel__title">HỌC VIỆN CYBERSOFT</h1>
                    <span className="display-3">CHUYÊN ĐÀO TẠO LẬP TRÌNH FRONT END</span>
                    <p>HỌC THỰC TẾ - LÀM CỰC DỄ</p>
                    <Link to="/course" className="btn btn-warning">Xem Thêm</Link>
                </div>
            </section>
        )
    }
}

import React, { Component } from 'react'
import "./carousel.css";

export default class CourseCarousel extends Component {
    render() {
        return (
            <section className="courseCarousel">
                <div id="courseCarousel" className="carousel slide">
                    <ol className="container carousel-indicators">
                        <li data-target="#courseCarousel" data-slide-to={0} className="active" />
                        <li data-target="#courseCarousel" data-slide-to={1} />
                        <li data-target="#courseCarousel" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block img-fluid" src="./img/carousel-01.jpg" alt="First slide" />
                            <div className="container carousel-item__caption carousel-caption d-none d-md-block text-white">
                                <span className="title">HỌC VIỆN CYBERSOFT CHUYÊN ĐÀO TẠO</span>
                                <h2 className="display-4">LẬP TRÌNH FRONT END</h2>
                                <p>HỌC THỰC TẾ - LÀM CỰC DỄ</p>
                                <div className="carousel-item__detail mt-4">
                                    <a href="#" className="btn">Xem Thêm</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-fluid" src="./img/carousel-02.jpg" alt="First slide" />
                            <div className="container carousel-item__caption carousel-caption d-none d-md-block text-white">
                                <span className="title">HỌC VIỆN CYBERSOFT CHUYÊN ĐÀO TẠO</span>
                                <h2 className="display-4">LẬP TRÌNH FRONT END</h2>
                                <p>HỌC THỰC TẾ - LÀM CỰC DỄ</p>
                                <div className="carousel-item__detail mt-4">
                                    <a href="#" className="btn">Xem Thêm</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-fluid" src="./img/carousel-03.jpg" alt="First slide" />
                            <div className="container carousel-item__caption carousel-caption d-none d-md-block text-white">
                                <span className="title">HỌC VIỆN CYBERSOFT CHUYÊN ĐÀO TẠO</span>
                                <h2 className="display-4">LẬP TRÌNH FRONT END</h2>
                                <p>HỌC THỰC TẾ - LÀM CỰC DỄ</p>
                                <div className="carousel-item__detail mt-4">
                                    <a href="#" className="btn">Xem Thêm</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

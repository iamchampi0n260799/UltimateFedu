import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./../../../../styles/sass/main.scss";

export default class CourseCarousel extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div>
                <h2> Responsive </h2>
                <Slider {...settings}>
                    <div>
                        <img className="" src="./images/carousel-01.jpg" />
                        {/* <div className="container carousel-item__caption carousel-caption d-none d-md-block text-white">
                            <span className="title">HỌC VIỆN CYBERSOFT CHUYÊN ĐÀO TẠO</span>
                            <h2 className="display-4">LẬP TRÌNH FRONT END</h2>
                            <p>HỌC THỰC TẾ - LÀM CỰC DỄ</p>
                            <div className="carousel-item__detail mt-4">
                                <a href="#" className="btn">Xem Thêm</a>
                            </div>
                        </div> */}
                    </div>
                    <div>
                        <h3>1</h3>
                    </div>
                </Slider>
            </div>

            // <section className="courseCarousel">
            //     <div id="courseCarousel" className="carousel slide">
            //         <ol className="container carousel-indicators">
            //             <li data-target="#courseCarousel" data-slide-to={0} className="active" />
            //             <li data-target="#courseCarousel" data-slide-to={1} />
            //             <li data-target="#courseCarousel" data-slide-to={2} />
            //         </ol>
            //         <div className="carousel-inner">
            //             <div className="carousel-item active">
            //                 <img className="d-block img-fluid" src="./img/carousel-01.jpg" alt="First slide" />
            //                 <div className="container carousel-item__caption carousel-caption d-none d-md-block text-white">
            //                     <span className="title">HỌC VIỆN CYBERSOFT CHUYÊN ĐÀO TẠO</span>
            //                     <h2 className="display-4">LẬP TRÌNH FRONT END</h2>
            //                     <p>HỌC THỰC TẾ - LÀM CỰC DỄ</p>
            //                     <div className="carousel-item__detail mt-4">
            //                         <a href="#" className="btn">Xem Thêm</a>
            //                     </div>
            //                 </div>
            //             </div>
            //             <div className="carousel-item">
            //                 <img className="d-block img-fluid" src="./img/carousel-02.jpg" alt="First slide" />
            //                 <div className="container carousel-item__caption carousel-caption d-none d-md-block text-white">
            //                     <span className="title">HỌC VIỆN CYBERSOFT CHUYÊN ĐÀO TẠO</span>
            //                     <h2 className="display-4">LẬP TRÌNH FRONT END</h2>
            //                     <p>HỌC THỰC TẾ - LÀM CỰC DỄ</p>
            //                     <div className="carousel-item__detail mt-4">
            //                         <a href="#" className="btn">Xem Thêm</a>
            //                     </div>
            //                 </div>
            //             </div>
            //             <div className="carousel-item">
            //                 <img className="d-block img-fluid" src="./img/carousel-03.jpg" alt="First slide" />
            //                 <div className="container carousel-item__caption carousel-caption d-none d-md-block text-white">
            //                     <span className="title">HỌC VIỆN CYBERSOFT CHUYÊN ĐÀO TẠO</span>
            //                     <h2 className="display-4">LẬP TRÌNH FRONT END</h2>
            //                     <p>HỌC THỰC TẾ - LÀM CỰC DỄ</p>
            //                     <div className="carousel-item__detail mt-4">
            //                         <a href="#" className="btn">Xem Thêm</a>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </section>

        )
    }
}

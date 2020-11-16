import React, { Component } from 'react'
import "./../../../../styles/sass/main.scss";
import Slider from "react-slick";

export default class Reasons extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
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
            <section className="reasons">
                <div className="reasons__list">

                    <div className="reasons__title">
                        <div>
                            <h1>Điểm ưu việt</h1>
                            <p>CHỈ CÓ TẠI CYBERSOFT</p>
                        </div>
                    </div>
                    <div className="reasons__item">
                        <div className="reasons__one reasons__info">
                            <h1>01</h1>
                            <p>Học theo lộ trình, có định hướng</p>
                        </div>
                        <div className="reasons__image">
                            <Slider {...settings}>
                                <div className="reasons__slider">
                                    <img src="./images/reasons_1.jpg" alt />
                                    <img src="./images/reasons_3.jpg" alt />
                                    <img src="./images/reasons_5.jpg" alt />
                                </div>
                            </Slider>

                        </div>
                    </div>
                    <div className="reasons__item reasons__single">
                        <div className="reasons__two reasons__info">
                            <h1>02</h1>
                            <p>Nền tảng, tư duy, cốt lõi trong lập trình</p>
                        </div>
                        <div className="reasons__image">
                            <div className="reasons__slider owl-carousel owl-theme">
                                <img src="./images/reasons_1.jpg" alt />
                                <img src="./images/reasons_3.jpg" alt />
                                <img src="./images/reasons_5.jpg" alt />
                            </div>
                        </div>
                    </div>
                    <div className="reasons__item">
                        <div className="reasons__three reasons__info">
                            <h1>03</h1>
                            <p>Mài giũa bạn qua kinh nghiệm, dự án thực tế</p>
                        </div>
                        <div className="reasons__image">
                            <div className="reasons__slider owl-carousel owl-theme">
                                <img src="./images/reasons_1.jpg" alt />
                                <img src="./images/reasons_3.jpg" alt />
                                <img src="./images/reasons_5.jpg" alt />
                            </div>
                        </div>
                    </div>
                    <div className="reasons__item">
                        <div className="reasons__four reasons__info">
                            <h1>04</h1>
                            <p>Teamwork, Scrum - Agile. Mentor tận tâm</p>
                        </div>
                        <div className="reasons__image">
                            <div className="reasons__slider owl-carousel owl-theme">
                                <img src="./images/reasons_1.jpg" alt />
                                <img src="./images/reasons_3.jpg" alt />
                                <img src="./images/reasons_5.jpg" alt />
                            </div>
                        </div>
                    </div>
                    <div className="reasons__item reasons__single">
                        <div className="reasons__five reasons__info">
                            <h1>05</h1>
                            <p>Công nghệ mới, chuyên sâu, thực tế</p>
                        </div>
                        <div className="reasons__image">
                            <div className="reasons__slider owl-carousel owl-theme">
                                <img src="./images/reasons_1.jpg" alt />
                                <img src="./images/reasons_3.jpg" alt />
                                <img src="./images/reasons_5.jpg" alt />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

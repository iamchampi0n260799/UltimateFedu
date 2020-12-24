import React, { Component } from 'react'
import Slider from "react-slick";

export default class ReasonItem extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
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

        const { reason } = this.props;

        return (
            <div className={`reasons__item ${reason.styleTitle}`}>
                <div className={`reasons__info ${reason.styleItem}`}>
                    <h1>{reason.id}</h1>
                    <p>{reason.title}</p>
                </div>
                <div className="reasons__image">
                    <div className="reasons__slider">
                        <Slider {...settings}>
                            <img src={reason.img1} alt="" />
                            <img src={reason.img2} alt="" />
                            <img src={reason.img3} alt="" />
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}

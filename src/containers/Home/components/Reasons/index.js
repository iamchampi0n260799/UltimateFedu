import React, { Component } from 'react'
import "./../../../../styles/sass/main.scss";
import ReasonItem from "../ReasonItem";

export default class Reasons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: [
                {
                    id: "01",
                    title: "Học theo lộ trình, có định hướng",
                    img1: "./images/crs1.jpg",
                    img2: "./images/crs4.jpg",
                    img3: "././images/crs3.jpg",
                    styleItem: "reasons__one",
                    styleTitle: ""
                },
                {
                    id: "02",
                    title: "Nền tảng, tư duy, cốt lõi trong lập trình",
                    img1: "./images/reasons_3.jpg",
                    img2: "./images/reasons_4.jpg",
                    img3: "././images/reasons_1.jpg",
                    styleItem: "reasons__two",
                    styleTitle: "reasons__single"
                },
                {
                    id: "03",
                    title: "Mài giũa bạn qua kinh nghiệm, dự án thực tế",
                    img1: "./images/crs4.jpg",
                    img2: "./images/crs1.jpg",
                    img3: "././images/crs1.jpg",
                    styleItem: "reasons__three",
                    styleTitle: ""
                },
                {
                    id: "04",
                    title: "Teamwork, Scrum - Agile. Mentor tận tâm",
                    img1: "./images/crs3.jpg",
                    img2: "./images/crs2.jpg",
                    img3: "././images/crs4.jpg",
                    styleItem: "reasons__four",
                    styleTitle: ""
                },
                {
                    id: "05",
                    title: "Công nghệ mới, chuyên sâu, thực tế",
                    img1: "./images/crs1.jpg",
                    img2: "./images/crs2.jpg",
                    img3: "././images/crs3.jpg",
                    styleItem: "reasons__five",
                    styleTitle: "reasons__single"
                },
            ],
        };
    }

    render() {
        return (
            <section className="reasons">
                <div className="reasons__list">
                    <div className="reasons__title">
                        <div>
                            <h1>Điểm ưu việt</h1>
                            <p>CHỈ CÓ TẠI CYBERSOFT</p>
                        </div>
                    </div>

                    {this.state.slides.map(function (slide, index) {
                        return (
                            <ReasonItem reason={slide} key={slide.id} />
                        );
                    })}
                </div>
            </section>

        )
    }
}

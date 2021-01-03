import React, { Component } from "react";
import "../../../../styles/sass/main.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedbacks: [
        {
          id: "01",
          name: "Nguyễn Quốc",
          major: "Học viên chuyển ngành",
          comment:
            "Tôi vô cùng hài lòng với công việc hiện tại của tôi tại Global CyberSoft. Tôi đã chọn lại được đúng đam mê của mình nhờ các khóa học chuyên sâu tại CyberSoft.",
          imgFeedback: "./images/hocvientieubieu-01.jpg",
        },
        {
          id: "02",
          name: "Nguyễn Quốc",
          major: "Học viên chuyển ngành",
          comment:
            "Tôi vô cùng hài lòng với công việc hiện tại của tôi tại Global CyberSoft. Tôi đã chọn lại được đúng đam mê của mình nhờ các khóa học chuyên sâu tại CyberSoft.",
          imgFeedback: "./images/hocvientieubieu-02.jpg",
        },
        {
          id: "03",
          name: "Nguyễn Quốc",
          major: "Học viên chuyển ngành",
          comment:
            "Tôi vô cùng hài lòng với công việc hiện tại của tôi tại Global CyberSoft. Tôi đã chọn lại được đúng đam mê của mình nhờ các khóa học chuyên sâu tại CyberSoft.",
          imgFeedback: "./images/hocvientieubieu-03.jpg",
        },
        {
          id: "04",
          name: "Nguyễn Quốc",
          major: "Học viên chuyển ngành",
          comment:
            "Tôi vô cùng hài lòng với công việc hiện tại của tôi tại Global CyberSoft. Tôi đã chọn lại được đúng đam mê của mình nhờ các khóa học chuyên sâu tại CyberSoft.",
          imgFeedback: "./images/hocvientieubieu-01.jpg",
        },
        {
          id: "05",
          name: "Nguyễn Quốc",
          major: "Học viên chuyển ngành",
          comment:
            "Tôi vô cùng hài lòng với công việc hiện tại của tôi tại Global CyberSoft. Tôi đã chọn lại được đúng đam mê của mình nhờ các khóa học chuyên sâu tại CyberSoft.",
          imgFeedback: "./images/hocvientieubieu-01.jpg",
        },
      ],
    };
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      autoplay: false,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      // <section className="feedback">
      //     <div className="feedback__content">
      //         <h2>Học Viên Tiêu Biểu</h2>
      //         <div className="row">
      //             <div className="col-md-12">
      //                 <Slider {...settings}>
      //                     {this.state.feedbacks.map(function (feedback) {
      //                         return (
      //                             <FeedbackItem feedback={feedback} key={feedback.id} />
      //                         );
      //                     })}
      //                 </Slider>
      //             </div>
      //         </div>
      //     </div>
      // </section>


      <section className="feedback">
        {/* <div className="headerBorderTop" /> */}
        <div className="feedback-content container">
          <Slider {...settings}>
            <div className="feedback-items">
              <span>
                <img src="./images/fb1.jpg" alt="" />
                <div className="mt-3 pt-3">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                <br />
                <span style={{ fontWeight: "bold", fontSize: 20 }}>Borivoje</span>
              </span>
              <p>
                CyberSoft is a life saver. I don't have the time or money for a
                college education. My goal is to become a freelance web developer,
                and thanks to CyberSoft, I'm really close.
            </p>
            </div>
            <div className="feedback-items">
              <span>
                <img src="./images/fb2.jpg" alt="" />
                <div className="mt-3 pt-3">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                <br />
                <span style={{ fontWeight: "bold", fontSize: 20 }}>Dipesh</span>
              </span>
              <p>
                CyberSoft is a life saver. I don't have the time or money for a
                college education. My goal is to become a freelance web developer,
                and thanks to CyberSoft, I'm really close.
            </p>
            </div>
            <div className="feedback-items">
              <span>
                <img src="./images/fb3.jpg" alt="" />
                <div className="mt-3 pt-3">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                <br />
                <span style={{ fontWeight: "bold", fontSize: 20 }}>Kathy</span>
              </span>
              <p>
                CyberSoft is a life saver. I don't have the time or money for a
                college education. My goal is to become a freelance web developer,
                and thanks to CyberSoft, I'm really close.
            </p>
            </div>
            <div className="feedback-items">
              <span>
                <img src="./images/fb4.jpg" alt="" />
                <div className="mt-3 pt-3">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                <br />
                <span style={{ fontWeight: "bold", fontSize: 20 }}>Borivoje</span>
              </span>
              <p>
                CyberSoft is a life saver. I don't have the time or money for a
                college education. My goal is to become a freelance web developer,
                and thanks to CyberSoft, I'm really close.
            </p>
            </div>
            <div className="feedback-items">
              <span>
                <img src="./images/fb2.jpg" alt="" />
                <div className="mt-3 pt-3">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                <br />
                <span style={{ fontWeight: "bold", fontSize: 20 }}>Dipesh</span>
              </span>
              <p>
                CyberSoft is a life saver. I don't have the time or money for a
                college education. My goal is to become a freelance web developer,
                and thanks to CyberSoft, I'm really close.
            </p>
            </div>
            <div className="feedback-items">
              <span>
                <img src="./images/fb3.jpg" alt="" />
                <div className="mt-3 pt-3">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                <br />
                <span style={{ fontWeight: "bold", fontSize: 20 }}>Kathy</span>
              </span>
              <p>
                CyberSoft is a life saver. I don't have the time or money for a
                college education. My goal is to become a freelance web developer,
                and thanks to CyberSoft, I'm really close.
            </p>
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}

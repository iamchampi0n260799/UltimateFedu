import React, { Component } from "react";
import { actFetchCourseDetail, actResignCourses } from "./modules/action";
import { connect } from "react-redux";
import Loader from "../../../components/Loader";
import "./index.css";

class index extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchCourseDetail(id);
  };

  dangKyKhoaHoc = () => {
    const { data } = this.props;
    const user = JSON.parse(localStorage.getItem("user"));
    const resignCourse = {
      maKhoaHoc: data.maKhoaHoc,
      taiKhoan: user.taiKhoan
    }

    // console.log(resignCourse);
    this.props.fetchCourseResign(resignCourse, this.props.history);
  };

  render() {
    const { data, loading, error } = this.props;
    if (loading) {
      return <Loader />;
    }

    return (
      <div className="detail">
        <section className="introduction">
          <div className="introduction-content">
            <div className="topic mb-3">
              <h6>Business &gt; Strategy &gt; Digital Marketing</h6>
            </div>
            <div className="header mb-3">
              {data && <h1>{data.tenKhoaHoc || "No name"}</h1>}
            </div>
            <div className="lead-header mb-3">
              {data && data.moTa}
            </div>
            <div className="rating mb-3">
              <span className="bestseller mr-2" >
                Bestseller
              </span>
              <span className="mr-2">4.5</span>
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              {data && <span>({data.luotXem} ratings) {data.soLuongHocVien} students</span>}

            </div>
            <div className="intructor mb-3">
              <span>Created by</span>
              <a>Robin Jesper</a>
            </div>
            <div className="last-update mb-3">
              <i className="fa fa-cog " />
              {data && <span>Last updated {data.ngayTao}</span>}
              <i className="fa fa-globe " />
              <span>English</span>
            </div>
            <div className="share-and-gift mb-3">
              <button className="btn btn-success mr-3">Wishlist</button>
              <button className="btn btn-success mr-3">Share</button>
              <button className="btn btn-success mr-3">Gift this course</button>
            </div>
          </div>
        </section>
        <section className="sidebar">
          <div className="sidebar-content">
            <div className="preview mb-3">
              {data && <img src={data.hinhAnh} />}
            </div>
          </div>
          <div className="price mb-3 pl-3">
            <span>$18.99</span>
            <span>$129.99</span>
            <p>
              <i className="fa fa-adjust" />1 day left at this price
            </p>
          </div>
          <div className="button-action mb-3 pl-3">
            <button className="btn btn-danger mb-3" onClick={this.dangKyKhoaHoc}>Đăng ký</button>
            <p className="text-center">30-Day Money-Back Guarantee</p>
          </div>
          <div className="course-includes mb-3 pl-3">
            <h5>This courses includes:</h5>
            <div>
              <i className="fa fa-asterisk mr-2" />
              84 hours on-demand video
            </div>
            <div>
              <i className="fa fa-file mr-2" />
              46 articles
            </div>
            <div>
              <i className="fa fa-download mr-2" />
              83 downloadable resources
            </div>
            <div>
              <i className="fa fa-audio-description mr-2" />
              Full lifetime access
            </div>
            <div>
              <i className="fa fa-american-sign-language-interpreting mr-2" />
              Access on mobile and TV
            </div>
            <div>
              <i className="fa fa-address-book mr-2" />
              Certificate of completion
            </div>
          </div>
          <h6 className="text-center text-primary">Appy Coupon</h6>
          <hr />
          <div className="training pl-3">
            <h4>Training 5 or more people</h4>
            <p>
              Get your team access to 5,000+ top Udemy courses anytime,
              anywhere.
            </p>
            <button className="btn btn-success">Try Udemy</button>
          </div>
        </section>
        <section className="learn">
          <h5>What you'll learn</h5>
          <div>
            <div>
              <i className="fa fa-check mr-2" />
              <span className>
                Set up Your Website, Design It &amp; Post Content on Your Blog.
              </span>
            </div>
          </div>
          <div>
            <div>
              <i className="fa fa-check mr-2" />
              <span>Create Converting Facebook Ads.</span>
            </div>
          </div>
          <div>
            <div>
              <i className="fa fa-check mr-2" />
              <span>
                Optimize Your Website &amp; YouTube Videos with SEO (Search
                Engine Optimization).
              </span>
            </div>
          </div>
          <div>
            <div>
              <i className="fa fa-check mr-2" />
              <span>Create Facebook Messenger Chatbots.</span>
            </div>
          </div>
          <div>
            <div>
              <i className="fa fa-check mr-2" />
              <span>
                Do Market Research to See What Markets are Most Profitable.
              </span>
            </div>
          </div>
        </section>
        <section className="require-and-description">
          <div className="require">
            <h3>Requirements</h3>
            <ul>
              <li>Basic Stock Market or Trading Knowledge</li>
              <li>
                This is a follow up course to the course "Foundation Stock
                Trading Course"
              </li>
            </ul>
          </div>
          <div className="description">
            <h3>Description</h3>
            <p>
              This course includes comprehensive advanced material that is
              required to start trading confidently and effectively. You learn
              the complete theory behind trading and even better, how to put
              theory into action. I will teach you how our full time traders are
              making independent market decisions to produce profitable
              consistent results. You will get an{" "}
              <span style={{ fontWeight: 600 }}>
                excellent understanding of the Tools and Techniques used by
                Professional Traders.
              </span>{" "}
            </p>
            <p>
              You will be learning from Mohsen Hassan, who is the Founder of
              Bloom Trading
            </p>
            <p>
              This course covers Intermediary and advanced level information to
              breakthrough your path to becoming a profitable trader in your own
              trading abilities.
              <span style={{ fontWeight: 600 }}>
                You're going to take away a different approach at analyzing the
                data, an approach that isn’t just based on theory.{" "}
              </span>{" "}
              We will also cover in depth 2 Strategies from the ground up that
              we currently run at our office. On top of all the material
              thought, I will be giving you our personal tricks, techniques and
              views on the stock market that have tremendously fast-tracked our
              success.
            </p>
            <p>
              <span style={{ fontWeight: 600 }}>
                Trading can be a very rewarding career if done correctly.
              </span>{" "}
              So whether you want to generate some side income by trading stocks
              or if you want to make trading your only source of income (like
              our Traders), then this course is for you.
            </p>
            <p>
              This is a full course separated in 2 parts, this is the 2nd part
              of the series.
            </p>
          </div>
          <div className="target">
            <h3>Who this course is for</h3>
            <ul>
              <li className="mb-2">
                Intermediate Investors who want to improve their performance
                &amp; build a strong knowledge on how to plan their trades and
                execute them.
              </li>
              <li className="mb-2">
                Individuals who want to learn advanced concepts to gain full
                comprehensive knowledge of financial markets.
              </li>
              <li className="mb-2">
                Suited for traders having trouble applying a profitable trading
                strategy to earn consistent profits through stock trading.
              </li>
              <li className="mb-2">
                Beginner/Intermediary level traders looking for tools and
                techniques used by professional traders.
              </li>
              <li className="mb-2">
                People who want to generate income through the stock market by
                Day Trading or Swing Trading.
              </li>
            </ul>
          </div>
        </section>
        <section className="review">
          <div className="review-items ">
            <h3>Featured review</h3>
            <div className="review-image mb-3">
              <img
                src="https://img-a.udemycdn.com/user/75x75/33215668_7035.jpg?ZrL2SfxE03pMshFHt_ENEdwFDJKBMHbaFrOT9mIZ3ms8bD5qT7_pGv0FwiGTVATORAewN2lTIqjfMhUb5ja560qbSanOm3bPfxCLsPcVZHkaqH54_E-1YrH2oQ"
                alt
              />
            </div>
            <div className="review-information mb-3">
              <h6>Dharmendra Mani</h6>
              <span>43 courses</span>
              <span> 6 reviews</span>
            </div>
            <div className="review-rating mb-3">
              <span>
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <span>5 months ago</span>
              </span>
            </div>
            <div className="review-content mb-3">
              <p>
                This Advance course is great and it covers the techniques,
                approach , strategy, indicators and what not. The best part is
                the way it is been taught and most of the questions about the
                lecture are replied by the tutor. Now i am on to part 3 of the
                course (Day and Swing Trading). Happy Learning!
              </p>
            </div>
            <div className="review-button mb-3">
              <button className="btn btn-success mr-2">Like</button>
              <button className="btn btn-danger mr-2">Dislike</button>
              <a>Report</a>
            </div>
          </div>
          <div className="review-items">
            <h3>Featured review</h3>
            <div className="review-image mb-3">
              <img
                src="https://img-a.udemycdn.com/user/75x75/2602294_150c.jpg?S01oGkIA-vzPQj5ZhFGBn56U83cNEcCnQ4zczrgXDFpPASY7Kzw3errh7LSON9M8tsEzmro5-nSoWIddMLFRv1EocDu0TJGzvNJIvKUGYR8Sn2GoWig1kxVQ"
                alt
              />
            </div>
            <div className="review-information mb-3">
              <h6>Harish Sharma</h6>
              <span>43 courses</span>
              <span> 6 reviews</span>
            </div>
            <div className="review-rating mb-3">
              <span>
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <span>5 months ago</span>
              </span>
            </div>
            <div className="review-content mb-3">
              <p>
                This Advance course is great and it covers the techniques,
                approach , strategy, indicators and what not. The best part is
                the way it is been taught and most of the questions about the
                lecture are replied by the tutor. Now i am on to part 3 of the
                course (Day and Swing Trading). Happy Learning!
              </p>
            </div>
            <div className="review-button mb-3">
              <button className="btn btn-success mr-2">Like</button>
              <button className="btn btn-danger mr-2">Dislike</button>
              <a>Report</a>
            </div>
          </div>
        </section>
        <section className="instructor">
          <h3>Instructor</h3>
          <h3 style={{ color: "aqua" }}>Robin &amp; Jesper</h3>
          <span>
            Best-Selling Instructors in Digital Marketing &amp; Business
          </span>
          <div className="instructor-image mb-3">
            <img
              src="https://img-a.udemycdn.com/user/75x75/36921905_7a32_6.jpg?8rbOpu_ll6NDkvKcnmscCrs60XudmeWLLkCClAxNUwAXHBbiWMcQA014wLAQxXKT9J888Hv2t18x2JzMMPwfhLuQUCX0EOnPDwOJDDujyllsslg73Kq0TfYHuFpt"
              alt
            />
          </div>
          <div className="instructor-information mb-3">
            <p>
              <i className="fa fa-star" style={{ color: "orange" }} />
              4.5 Instructor Rating
            </p>
            <p>
              <i className="fa fa-adjust" />
              18,434 Reviews
            </p>
            <p>
              <i className="fa fa-users" />
              98,953 Students
            </p>
            <p>
              <i className="fa fa-play-circle" />
              41 Courses
            </p>
          </div>
          <div className="instructor-content mb-3">
            <p>
              We're passionate about teaching.
              <span style={{ fontWeight: 600 }}>
                There's no greater joy than watching beautiful testimonials of
                people achieving their goals and dreams
              </span>
              . That's why we STRONGLY believe in full and constant support.
              With ALL of our courses you can expect:
            </p>
            <p>
              ✓ <span style={{ fontWeight: 600 }}>Practical Courses</span> -
              Hands-on Teaching for Real World Results.
            </p>
            <p>
              ✓{" "}
              <span style={{ fontWeight: 600 }}>
                Unlimited Premium Support Within 24 Hours
              </span>{" "}
              - Guaranteed Learning.
            </p>
            <p>
              If you're interested in learning{" "}
              <span style={{ fontWeight: 600 }}>
                Digital Marketing or Business Startup...
              </span>
            </p>
            <i>We're at your service.</i>
            <h6>Love</h6>
            <h6>Robin &amp; Jesper</h6>
          </div>
        </section>
        <div className="average-user-rating row">
          <div className="col-sm-3">
            <div className="rating-block">
              <h4>Average user rating</h4>
              <h2 className="bold padding-bottom-7">
                4.3 <small>/ 5</small>
              </h2>
              <button
                type="button"
                className="btn btn-warning btn-sm"
                aria-label="Left Align"
              >
                <span className="glyphicon glyphicon-star" aria-hidden="true">
                  <i style={{ color: "white" }} className="fa fa-star" />
                </span>
              </button>
              <button
                type="button"
                className="btn btn-warning btn-sm"
                aria-label="Left Align"
              >
                <span className="glyphicon glyphicon-star" aria-hidden="true">
                  <i style={{ color: "white" }} className="fa fa-star" />
                </span>
              </button>
              <button
                type="button"
                className="btn btn-warning btn-sm"
                aria-label="Left Align"
              >
                <span className="glyphicon glyphicon-star" aria-hidden="true">
                  <i style={{ color: "white" }} className="fa fa-star" />
                </span>
              </button>
              <button
                type="button"
                className="btn btn-light btn-grey btn-sm"
                aria-label="Left Align"
              >
                <span className="glyphicon glyphicon-star" aria-hidden="true">
                  <i style={{ color: "black" }} className="fa fa-star" />
                </span>
              </button>
              <button
                type="button"
                className="btn btn-light btn-grey btn-sm"
                aria-label="Left Align"
              >
                <span className="glyphicon glyphicon-star" aria-hidden="true">
                  <i style={{ color: "black" }} className="fa fa-star" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.courseDetailReducer.loading,
    data: state.courseDetailReducer.data,
    error: state.courseDetailReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCourseDetail: (id) => {
      dispatch(actFetchCourseDetail(id));
    },
    fetchCourseResign: (data, history) => {
      dispatch(actResignCourses(data, history))
    },

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);

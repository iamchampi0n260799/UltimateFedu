import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { connect } from "react-redux";
import { actionFetchCourse } from "./modules/action";
import CourseItems from "../../../components/CourseItems";
import Loader from "../../../components/Loader";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CourseCarousel from "../components/CourseCarousel";
import Reasons from "../components/Reasons";
import Categories from "../components/Categories";
import Numbers from "../components/Numbers";
import Feedback from "../components/Feedback";
import Banner from "../components/Banner";
import Companies from "../components/Companies";
import Search from '../../../components/Search'
import "./index.css";
class index extends Component {
  componentDidMount() {
    this.props.getCourse();
  }

  renderCourse = () => {
    let { data, searchTerm } = this.props;

    if (data) {
      data = data.filter((data) => {
        return (
          data.tenKhoaHoc.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
        );
      });
      return data.map((course, index) => (
        <CourseItems key={index} course={course} />
      ));
    }
  };

  render() {
    const { loading } = this.props;
    if (loading) {
      return <Loader />;
    }
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 2000
    };
    return (
      <>
        <CourseCarousel />
        <Numbers />
        <Reasons />

        {/* <Categories /> */}
        <section className="coursesContent">
          <h2>Các khóa học tiêu biểu:</h2>
          <Slider {...settings}>
            {this.renderCourse()}
          </Slider>


        </section>
        <Banner />
        <Feedback />
        <Companies />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.courseReducer.loading,
    data: state.courseReducer.data,
    error: state.courseReducer.error,
    searchTerm: state.courseReducer.searchTerm,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getCourse: () => {
      dispatch(actionFetchCourse());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(index);

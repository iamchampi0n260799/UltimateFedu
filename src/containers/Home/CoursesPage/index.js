import React, { Component } from "react";
import { connect } from "react-redux";
import CourseItems from "../../../components/CourseItems";
import Search from "../../../components/Search";
// import "./index.scss";
import "../../../styles/sass/main.scss";
import CategoriesList from "../../../components/CategoriesList";
import Loader from '../../../components/Loader';
import { actionFetchCourse, actionFetchCoursesByCategory } from "./modules/action";

class CoursesPage extends Component {

  componentDidMount() {
    this.props.getCourse();
  }

  handleGetCategory = (category) => {
    console.log("coursePage===========", category);
    if (category) {
      this.props.getCoursesByCategory(category)
    } else {
      this.props.getCourse(category)
    }

  }

  renderCourse = () => {
    let { data, searchTerm } = this.props;
    let timkiem = searchTerm;

    if (data) {
      data = data.filter((data) => {
        return (
          data.tenKhoaHoc.toLowerCase().indexOf(timkiem.toLowerCase()) !== -1
        );
      });

      return data.map((course) => (
        <div className="col-3" key={course.maKhoaHoc}>
          <CourseItems course={course} />
        </div>
      ));
    }
  };

  render() {
    if (this.props.loading) return <Loader />;
    return (
      <section className="coursesPage">
        <div className="coursesPage__content">
          <div className="row">
            {/* <CategoriesList history={this.props.history} getCategory={this.handleGetCategory} /> */}
            <CategoriesList getCategory={this.handleGetCategory} />
            <div className="coursesPage__right col-10">
              <Search />
              <div className="row">
                {this.renderCourse()}
              </div>
            </div>
          </div>
        </div>
      </section>
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
    getCoursesByCategory: (category) => {
      dispatch(actionFetchCoursesByCategory(category));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

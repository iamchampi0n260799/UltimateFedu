import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CourseItems from "../../../components/CourseItems";
import Search from "../../../components/Search";
import { actionFetchCourse } from "./modules/action";
import "./index.css";

class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }
  componentDidMount() {
    this.props.getCourse();
    const url = `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc`;
    axios
      .get(url)
      .then((result) => {
        this.setState({
          categories: result.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
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
      return data.map((course, index) => (
        <CourseItems key={index} course={course} />
      ));
    }
  };

  handleClickToPush = (maDanhMuc) => {
    this.props.history.push(`/categories/${maDanhMuc}`);
  };
  renderCategoies = () => {
    return this.state.categories.map((item, index) => (
      <Link
        style={{ cursor: "pointer" }}
        key={index}
        onClick={() => {
          this.handleClickToPush(item.maDanhMuc);
        }}
        className="dropdown-item"
      // to={`/courses/${item.maDanhMuc}`}
      >
        {item.tenDanhMuc}
      </Link>
    ));
  };
  render() {
    return (
      <div className="">
        <div className="row">
          <div className="categories col-2">
            <Link to="/course" style={{ fontWeight: "600" }} className="dropdown-item">Tất cả khỏa học</Link>
            {this.renderCategoies()}
          </div>
          <div className="coursepage col-10">

            <Search />
            <div className="row">{this.renderCourse()}</div>
          </div>
        </div>
      </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Courses);

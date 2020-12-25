import React, { Component } from "react";
import { connect } from "react-redux";
import { actFetchCategories } from "./modules/action";
import CourseItems from "../../../components/CourseItems";
import Search from '../../../components/Search'
import "./index.css"
import axios from "axios";
import { Link } from "react-router-dom";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }
  componentDidMount() {
    let { categories } = this.props.match.params;
    this.props.fetchCategories(categories)
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
  componentDidUpdate(prevProps) {
    if (this.props.match !== prevProps.match) {
      this.props.fetchCategories(this.props.match.params.categories)
    }
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
    console.log(this.state.categories);
    return (
      <div className="">
        <div className="row">
          <div className="categories col-2">
            <Link to="/course" style={{ fontWeight: "600" }} className="dropdown-item">Tất cả khóa học</Link>
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
    loading: state.categoriesReducer.loading,
    data: state.categoriesReducer.data,
    error: state.categoriesReducer.error,
    searchTerm: state.courseReducer.searchTerm,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: (categories) => {
      dispatch(actFetchCategories(categories));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(index);

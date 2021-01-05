import React, { Component } from "react";
import { connect } from "react-redux";
import { actFetchCategories } from "./modules/action";
import "./index.css"
import { Link } from "react-router-dom";
import Loader from "../Loader";

class CategoriesList extends Component {

  componentDidMount() {
    this.props.fetchCategories();
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.match !== prevProps.match) {
  //     this.props.fetchCategories(this.props.match.params.categories)
  //   }
  // }

  handleClickToPush = (category) => {
    // console.log(category);
    // this.props.history.push(`/course?category=${category}`);
    this.props.getCategory(category);
  };

  renderCategories = () => {
    const { data } = this.props;

    if (data) {
      return data.map((item) => (
        <Link
          style={{ cursor: "pointer" }}
          key={item.maDanhMuc}
          onClick={() => { this.handleClickToPush(item.maDanhMuc) }}
          className="dropdown-item"
          to={`/course?category=${item.maDanhMuc}`}
        >
          {item.tenDanhMuc}
        </Link>
      ));
    }
  };

  render() {
    if (this.props.loading) return <Loader />;
    return (
      <div className="categories col-2">
        <Link
          to="/course"
          style={{ fontWeight: "600" }}
          className="dropdown-item"
          onClick={() => { this.handleClickToPush() }}
        >
          Tất cả khóa học
          </Link>
        {this.renderCategories()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.categoriesReducer.loading,
    data: state.categoriesReducer.data,
    error: state.categoriesReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => {
      dispatch(actFetchCategories());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);

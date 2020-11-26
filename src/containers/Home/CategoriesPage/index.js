import React, { Component } from "react";
import { connect } from "react-redux";
import { actFetchCategories } from "./modules/action";
import CourseItems from "../../../components/CourseItems";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: null,
    };
  }
  componentDidMount() {
    let { categories } = this.props.match.params; // backend
    this.props.fetchCategories(categories)
  }
  renderCourse = () => {
    const { data } = this.props;
    if (data) {
      return data.map((course, index) => (
        <CourseItems key={index} course={course} />
      ));
    }
  };
  render() {
    console.log(this.state.categories);
    return (
      <div style={{ display: "flex" }} className="container-fluid mt-5">
        {this.renderCourse()}
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
    fetchCategories: (categories) => {
      dispatch(actFetchCategories(categories));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(index);

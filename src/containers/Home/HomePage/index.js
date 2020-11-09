import React, { Component } from "react";
import Slider from "react-slick";
import { connect } from "react-redux";
import { actionFetchCourse } from "./modules/action";
import MovieItems from "../../../components/MovieItems";
import Loader from "../../../components/Loader";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

class index extends Component {
  componentDidMount() {
    this.props.getCourse();
  }
  renderCourse = () => {
    let { data , searchTerm} = this.props;
   
    if (data) {
      data = data.filter((data) => {
        return data.tenKhoaHoc.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
      })
      return data.map((course, index) => (
        <MovieItems key={index} course={course} />
      ));
    }
  };
  render() {
    const { loading} = this.props;
    if (loading) {
      return <Loader />;
    }
    return (
      <div className="container-fluid coursesContent">
        <h3>Students are watching:</h3>
        <Grid container spaceing={3}>
          {this.renderCourse()}
        </Grid>
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
export default connect(mapStateToProps, mapDispatchToProps)(index);

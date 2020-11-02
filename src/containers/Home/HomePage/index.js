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
    const { data } = this.props;
    if (data) {
      return data.map((course, index) => (
        <MovieItems key={index} course={course} />
      ));
    }
  };
  render() {
    const { loading } = this.props;
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

import React, { Component } from "react";
import { connect } from "react-redux";
import {COURSES_SEARCH} from '../../containers/Home/HomePage/modules/constant'
class Search extends Component {
  // handleSearch = (e) => {
  //   this.props.search(e.target.value);
  // };
  render() {
    return (
      <input
        type="text"
        className="form-control mb-3 w-50"
        onChange={(event) => {
          this.props.getKeyWord(event.target.value)
        }}
      />
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getKeyWord: (keyword) => {
      dispatch({
        type: COURSES_SEARCH,
        payload: keyword
      })
    }
  }
}

export default connect(null , mapDispatchToProps)(Search);
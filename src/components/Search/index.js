import React, { Component } from "react";
import { connect } from "react-redux";
import { COURSES_SEARCH } from '../../components/CoursesList/modules/constant';

class Search extends Component {
  render() {
    return (
      <input
        type="text"
        className="form-control mb-3 w-50"
        placeholder="Tìm kiếm khóa học bạn muốn"
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

export default connect(null, mapDispatchToProps)(Search);
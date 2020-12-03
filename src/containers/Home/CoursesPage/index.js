import React, { Component } from 'react'
import { connect } from "react-redux";
import CourseItems from "../../../components/CourseItems";
import Search from '../../../components/Search'
import { actionFetchCourse } from "./modules/action";
import "./index.css"
class Courses extends Component {
    componentDidMount() {
        this.props.getCourse();
      }
    
      renderCourse = () => {
        let { data, searchTerm } = this.props;
        let timkiem = searchTerm
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
    render() {
        return (
            <div className="coursepage">
              <h2>Tất cả khóa học:</h2>
              <Search />
               <div className="row">
                   {this.renderCourse()}
               </div>
            </div>
        )
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
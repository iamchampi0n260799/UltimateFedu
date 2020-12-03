import { COURSES_REQUEST, COURSES_SUCCESS, COURSES_FAILED } from "./constant";
import Axios from "axios";
// nhớ sữa tên TYPE với tên hàm tên biến
export const actionFetchCourse = () => {
  // API
  return (dispatch) => {
    dispatch(actionFetchCourseRequest());
    Axios({
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01`,
      method: "GET",
    })
      .then((result) => {
        dispatch(actionFetchCourseSucess(result.data));
      })
      .catch((error) => {
        dispatch(actionFetchCourseFailed(error));
      });
  };
};
const actionFetchCourseRequest = () => {
  return {
    type: COURSES_REQUEST,
  };
};
const actionFetchCourseSucess = (data) => {
  return {
    type: COURSES_SUCCESS,
    payload: data,
  };
};
const actionFetchCourseFailed = (error) => {
  return {
    type: COURSES_FAILED,
    payload: error,
  };
};

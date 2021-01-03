import { COURSES_REQUEST, COURSES_SUCCESS, COURSES_FAILED } from "./constant";
import API from "../../../api/index";

// nhớ sữa tên TYPE với tên hàm tên biến
export const actionFetchCourse = () => {
  // API
  return (dispatch) => {
    dispatch(actionFetchCourseRequest());

    API(`/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01`, "GET", null)
      .then((result) => {
        dispatch(actionFetchCourseSuccess(result.data));
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

const actionFetchCourseSuccess = (data) => {
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

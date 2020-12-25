import { COURSE_DETAIL_REQUEST, COURSE_DETAIL_SUCESS, COURSE_DETAIL_FAILED } from "./constants"
import { COURSES_RESIGN_REQUEST, COURSES_RESIGN_SUCCESS, COURSES_RESIGN_FAILED } from "./constants"
import { COURSES_CANCEL_REQUEST, COURSES_CANCEL_SUCCESS, COURSES_CANCEL_FAILED } from "./constants"

import axios from "axios"
export const actFetchCourseDetail = (maKhoaHoc) => {
    return (dispatch) => {
        dispatch(actFetchCourseDetailRequest())
        const url = `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`
        axios.get(url)
            .then((result) => {
                dispatch(actFetchCourseDetailSucess(result.data))
            })
            .catch((error) => {
                dispatch(actFetchCourseDetailFailed(error))
            })
    }
}
const actFetchCourseDetailRequest = () => {
    return {
        type: COURSE_DETAIL_REQUEST
    }
}
const actFetchCourseDetailSucess = (data) => {
    return {
        type: COURSE_DETAIL_SUCESS,
        payload: data
    }
}
const actFetchCourseDetailFailed = (error) => {
    return {
        type: COURSE_DETAIL_FAILED,
        payload: error
    }
}


export const actResignCourses = (data, history) => {
    return (dispatch) => {
        let accessToken = ''
        if (localStorage.getItem('user')) {
            let getItemLocalStorage = JSON.parse(localStorage.getItem('user'))
            accessToken = getItemLocalStorage.accessToken;
        }
        dispatch(actResignCourseRequest())
        axios({
            url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/DangKyKhoaHoc`,
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            data,
        })
            .then((result) => {
                dispatch(actResignCourseSuccess(result.data))
                alert('Đăng ký thành công')
                history.push('/user')
            })
            .catch((error) => {
                dispatch(actResignCourseFailed(error))
            })
    }
}

const actResignCourseRequest = () => {
    return {
        type: COURSES_RESIGN_REQUEST
    }
}
const actResignCourseSuccess = (data) => {
    return {
        type: COURSES_RESIGN_SUCCESS,
        payload: data
    }
}
const actResignCourseFailed = (error) => {
    return {
        type: COURSES_RESIGN_FAILED,
        payload: error
    }
}

export const actCancelCourse = (data) => {
    return (dispatch) => {
        let accessToken = ''
        if (localStorage.getItem('user')) {
            let getItemLocalStorage = JSON.parse(localStorage.getItem('user'))
            accessToken = getItemLocalStorage.accessToken;
        }
        dispatch(actCancelCourseRequest())
        axios({
            url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/HuyGhiDanh`,
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            data,
        })
            .then((result) => {
                dispatch(actCancelCourseSuccess(result.data))
                alert('Hủy đăng ký thành công')
                window.location.href = window.location.pathname + window.location.search + window.location.hash;


            })
            .catch((error) => {
                dispatch(actCancelCourseFailed(error))
            })
    }
}
const actCancelCourseRequest = () => {
    return {
        type: COURSES_CANCEL_REQUEST
    }
}
const actCancelCourseSuccess = (data) => {
    return {
        type: COURSES_CANCEL_SUCCESS,
        payload: data
    }
}
const actCancelCourseFailed = (error) => {
    return {
        type: COURSES_CANCEL_FAILED,
        payload: error
    }
}

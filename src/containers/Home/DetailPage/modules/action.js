import { COURSE_DETAIL_REQUEST,COURSE_DETAIL_SUCESS,COURSE_DETAIL_FAILED } from "./constants"
import axios from "axios"
export const actFetchCourseDetail = (maKhoaHoc) => {
    // API
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
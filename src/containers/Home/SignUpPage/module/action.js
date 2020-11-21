import { SIGNUP_REQUEST , SIGNUP_SUCCESS , SIGNUP_FAILED} from './constant.js'

import axios from "axios"

export const fetchSignUp = (user , history) => {
    return (dispatch) => {
        dispatch(actFetchSignUpRequest());
        axios({
            url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
            method: "POST",
            data: user
        }).then((result) => {
            dispatch(actFetchSignUpSuccess(result.data))
            history.push('/signin')
            
        }).catch((error) => {
            dispatch(actFetchSignUpFailed(error))
        })
    }
}

const actFetchSignUpRequest = () => {
    return {
        type: SIGNUP_REQUEST
    }
}
const actFetchSignUpSuccess = (data) => {
    return {
        type: SIGNUP_SUCCESS,
        payload: data
    }
}
const actFetchSignUpFailed = (error) => {
    return {
        type: SIGNUP_FAILED,
        payload: error
    }
}
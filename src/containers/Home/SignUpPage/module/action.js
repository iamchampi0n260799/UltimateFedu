import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILED } from './constant.js'

import axios from "axios"

export const fetchSignUp = (user, history) => {
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
            switch (error.response.status) {
                case 500:
                    console.log(error.response.data);
                    alert(error.response.status + ": " + error.response.data);
                    break;
                case 401:
                    // xử lý logout,..
                    console.log(error.response.data);
                    alert(error.response.status + ": " + error.response.data);
                    break;
                default:
                    break;
            }
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
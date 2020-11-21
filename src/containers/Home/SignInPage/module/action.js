import { SIGNIN_REQUEST , SIGNIN_SUCCESS , SIGNIN_FAILED} from './constant.js'

import axios from "axios"

export const fetchSignIn = (user , history) => {
    return (dispatch) => {
        dispatch(actFetchSignInRequest());
        axios({
            url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
            method: "POST",
            data: user
        }).then((result) => {
            dispatch(actFetchSignInSuccess(result.data))
            localStorage.setItem("user", JSON.stringify(result.data));
            
            if(result.data.maLoaiNguoiDung === "QuanTri"){
                history.push('/admin')
            }
            history.push('/user')
            
        }).catch((error) => {
            dispatch(actFetchSignInFailed(error))
        })
    }
}

const actFetchSignInRequest = () => {
    return {
        type: SIGNIN_REQUEST
    }
}
const actFetchSignInSuccess = (data) => {
    return {
        type: SIGNIN_SUCCESS,
        payload: data
    }
}
const actFetchSignInFailed = (error) => {
    return {
        type: SIGNIN_FAILED,
        payload: error
    }
}
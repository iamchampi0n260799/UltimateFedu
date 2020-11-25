import { SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_FAILED } from './constant.js'

import axios from "axios"

export const fetchSignIn = (user, history) => {
    return (dispatch) => {
        dispatch(actFetchSignInRequest());
        axios({
            url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
            method: "POST",
            data: user
        }).then((result) => {
            dispatch(actFetchSignInSuccess(result.data))
            localStorage.setItem("user", JSON.stringify(result.data));

            if (result.data.maLoaiNguoiDung === "GV") {
                /**
                 * taikhoan GV: caochihieu
                 * matkhau: 123456
                 * accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiY2FvY2hpaGlldSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkdWIiwibmJmIjoxNjA2MzEwOTAwLCJleHAiOjE2MDYzMTQ1MDB9.KG0abTELjZ3WzPfJ3rAFM1N1voBxpX6GgETCUf1AGnc"
                 */
                history.push('/admin/users')
            } else {
                history.push('/user')
            }

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
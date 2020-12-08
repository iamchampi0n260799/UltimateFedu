import { EDIT_REQUEST , EDIT_SUCCESS , EDIT_FAILED} from './constant.js'

import axios from "axios"

export const fetchUserEdit = (user , history) => {
    return (dispatch) => {
        let accessToken = ''
        if(localStorage.getItem('user')){
            let getItemLocalStorage = JSON.parse(localStorage.getItem('user'))
            accessToken = getItemLocalStorage.accessToken;
        }
        dispatch(actFetchEditRequest());
        axios({
            url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung',
            method:"PUT",
            data: user,
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then((result) => {
            dispatch(actFetchEditSuccess(result.data))
            
            window.location.href = window.location.pathname + window.location.search + window.location.hash;

        }).catch((error) => {
            dispatch(actFetchEditFailed(error))
        })
    }
}

const actFetchEditRequest = () => {
    return {
        type: EDIT_REQUEST
    }
}
const actFetchEditSuccess = (data) => {
    return {
        type: EDIT_SUCCESS,
        payload: data
    }
}
const actFetchEditFailed = (error) => {
    return {
        type: EDIT_FAILED,
        payload: error
    }
}
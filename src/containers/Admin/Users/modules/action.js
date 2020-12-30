import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILED } from "./constant"
import API from "../../../../api";

export const actionFetchUsersList = (paramsString) => {
    return (dispatch) => {
        dispatch(actionFetchUsersListRequest());
        // MaNhom=GP01&page=1&pageSize=10
        // API(`QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?${paramsString}`, "GET", null)
        API(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${paramsString}`, "GET", null)
            .then((result) => {
                dispatch(actionFetchUsersListSuccess(result.data));
            })
            .catch((error) => {
                dispatch(actionFetchUsersListFailed(error));
            });
    };
};

const actionFetchUsersListRequest = () => {
    return {
        type: GET_USERS_REQUEST,
    }
}

const actionFetchUsersListSuccess = (data) => {
    return {
        type: GET_USERS_SUCCESS,
        payload: data,
    }
}

const actionFetchUsersListFailed = (error) => {
    return {
        type: GET_USERS_FAILED,
        payload: error,
    }
}
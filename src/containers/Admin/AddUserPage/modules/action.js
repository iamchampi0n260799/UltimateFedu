import { ADD_USER_REQUEST, ADD_USER_SUCCESS, ADD_USER_FAILED } from "./constant";
import API from "../../../../api";

export const actionAddUserAdmin = (user, history) => {
    let accessToken = "";
    if (localStorage.getItem("user")) {
        const userAdmin = JSON.parse(localStorage.getItem("user"));
        accessToken = userAdmin.accessToken;
        // console.log(userAdmin)
        // console.log(accessToken)
    }

    return (dispatch) => {
        dispatch(actionAddUserAdminRequest(user));
        // Axios({
        //     method: "POST",
        //     url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
        //     data: user,
        //     headers: `Bearer ${accessToken}`,
        // })
        API(`QuanLyNguoiDung/ThemNguoiDung`, "POST", user, accessToken)
            .then((result) => {
                dispatch(actionAddUserAdminSuccess(result.data));
                history.push('/admin/users');
            })
            .catch((error) => {
                // alert(error.response.status + ": " + error.response.data);
                dispatch(actionAddUserAdminFailed(error));
            });
    };
};

const actionAddUserAdminRequest = () => {
    return {
        type: ADD_USER_REQUEST,
    }
}

const actionAddUserAdminSuccess = (data) => {
    return {
        type: ADD_USER_SUCCESS,
        payload: data,
    }
}

const actionAddUserAdminFailed = (error) => {
    return {
        type: ADD_USER_FAILED,
        payload: error,
    }
}
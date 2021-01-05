import { CATEGORIES_REQUEST, CATEGORIES_SUCCESS, CATEGORIES_FAILED } from "./constants";
import API from "../../../api";

export const actFetchCategories = () => {
    // API
    return (dispatch) => {
        dispatch(actFetchCategoriesRequest())

        API(`/QuanLyKhoaHoc/LayDanhMucKhoaHoc`, "GET")
            .then((result) => {
                dispatch(actFetchCategoriesSuccess(result.data))
            })
            .catch((error) => {
                dispatch(actFetchCategoriesFailed(error))
            })
    }
}

const actFetchCategoriesRequest = () => {
    return {
        type: CATEGORIES_REQUEST
    }
}

const actFetchCategoriesSuccess = (data) => {
    return {
        type: CATEGORIES_SUCCESS,
        payload: data
    }
}

const actFetchCategoriesFailed = (error) => {
    return {
        type: CATEGORIES_FAILED,
        payload: error
    }
}
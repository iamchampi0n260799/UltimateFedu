import { CATEGORIES_REQUEST, CATEGORIES_SUCESS , CATEGORIES_FAILED } from "./constants"
import axios from "axios"
export const actFetchCategories = (categories) => {
    // API
    return (dispatch) => {
        dispatch(actFetchCategoriesRequest())


        const url = `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${categories}&MaNhom=GP01`
        axios.get(url)
            .then((result) => {
                dispatch(actFetchCategoriesSucess(result.data))
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
const actFetchCategoriesSucess = (data) => {
    return {
        type: CATEGORIES_SUCESS,
        payload: data
    }
}
const actFetchCategoriesFailed = (error) => {
    return {
        type: CATEGORIES_FAILED,
        payload: error
    }
}
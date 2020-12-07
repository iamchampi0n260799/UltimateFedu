import { combineReducers } from 'redux'
import courseReducer from '../containers/Home/HomePage/modules/reducer'
import courseDetailReducer from '../containers/Home/DetailPage/modules/reducer'
import categoriesReducer from '../containers/Home/CategoriesPage/modules/reducer'
import signupReducer from '../containers/Home/SignUpPage/module/reducer'
import signinReducer from "../containers/Home/SignInPage/module/reducer"
import editUserReducer from '../containers/Home/UserPage/module/reducer'
import resignCourseReducer from '../containers/Home/DetailPage/modules/resignCourseReducer'
import cancelCourseReducer from '../containers/Home/DetailPage/modules/cancelCourseReducer'
const rootReducer = combineReducers({
    courseReducer,
    courseDetailReducer,
    categoriesReducer,
    signupReducer,
    signinReducer,
    editUserReducer,
    resignCourseReducer,
    cancelCourseReducer,
})
export default rootReducer;
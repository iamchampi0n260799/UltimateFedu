import { combineReducers } from 'redux';
import courseReducer from '../components/CoursesList/modules/reducer';
// import courseByCategoriesReducer from '../components/CoursesListByCategories/modules/reducer';
import courseDetailReducer from '../containers/Home/DetailPage/modules/reducer';
// import categoriesReducer from '../containers/Home/CategoriesPage/modules/reducer';
import categoriesReducer from '../components/CategoriesList/modules/reducer';
import signupReducer from '../containers/Home/SignUpPage/module/reducer';
import signinReducer from "../containers/Home/SignInPage/module/reducer";
import editUserReducer from '../containers/Home/UserPage/module/reducer';
import resignCourseReducer from '../containers/Home/DetailPage/modules/resignCourseReducer';
import cancelCourseReducer from '../containers/Home/DetailPage/modules/cancelCourseReducer';
import usersListReducer from "../containers/Admin/Users/modules/reducer";
import addUserAdminReducer from "../containers/Admin/AddUserPage/modules/reducer";

const rootReducer = combineReducers({
    courseReducer,
    // courseByCategoriesReducer,
    courseDetailReducer,
    categoriesReducer,
    signupReducer,
    signinReducer,
    editUserReducer,
    resignCourseReducer,
    cancelCourseReducer,
    usersListReducer,
    addUserAdminReducer,
})

export default rootReducer;
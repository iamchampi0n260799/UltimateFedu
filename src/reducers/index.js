import { combineReducers } from 'redux'
import courseReducer from '../containers/Home/HomePage/modules/reducer'
import courseDetailReducer from '../containers/Home/DetailPage/modules/reducer'
import categoriesReducer from '../containers/Home/CategoriesPage/modules/reducer'
const rootReducer = combineReducers({
    courseReducer,
    courseDetailReducer,
    categoriesReducer,
})
export default rootReducer;
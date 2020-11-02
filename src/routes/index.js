import Home from '../containers/Home/HomePage'
import DetailCoursePage from '../containers/Home/DetailPage'
import CategoriesPage from '../containers/Home/CategoriesPage'
export const routesHome = [
    { path: '/' , component: Home , exact: true},
    { path: '/course/:id' , component: DetailCoursePage , exact: false},
    { path: '/categories/:categories' , component: CategoriesPage , exact: false},
]
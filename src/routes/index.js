import Home from '../containers/Home/HomePage'
import DetailCoursePage from '../containers/Home/DetailPage'
import CategoriesPage from '../containers/Home/CategoriesPage'
import SignUp from '../containers/Home/SignUpPage'
export const routesHome = [
    { path: '/' , component: Home , exact: true},
    { path: '/signup' , component: SignUp , exact: false},
    { path: '/course/:id' , component: DetailCoursePage , exact: false},
    
    { path: '/categories/:categories' , component: CategoriesPage , exact: false},
]
import Home from '../containers/Home/HomePage'
import DetailCoursePage from '../containers/Home/DetailPage'
import CategoriesPage from '../containers/Home/CategoriesPage'
import Courses from "../containers/Home/CoursesPage"

export const routesHome = [
    { path: '/', component: Home, exact: true },
    { path: '/courses', component: Courses, exact: true },
    { path: '/course/:id', component: DetailCoursePage, exact: false },
    { path: '/categories/:categories', component: CategoriesPage, exact: false },
]
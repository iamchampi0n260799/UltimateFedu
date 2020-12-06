import Home from '../containers/Home/HomePage'
import DetailCoursePage from '../containers/Home/DetailPage'
import CategoriesPage from '../containers/Home/CategoriesPage'
import SignUp from '../containers/Home/SignUpPage/Signup'
import SignIn from '../containers/Home/SignInPage/Signin'
import User from '../containers/Home/UserPage/User'
import Course from '../containers/Home/CoursesPage'
// Admin page
import UsersAdmin from '../containers/Admin/Users'
import CoursesAdmin from '../containers/Admin/Courses'
import Dashboard from "../containers/Admin/Dashboard";

export const routesHome = [
    { path: '/', component: Home, exact: true },
    { path: '/signup', component: SignUp, exact: false },
    { path: '/signin', component: SignIn, exact: false },
    { path: '/user', component: User, exact: false },
    { path: '/course', component: Course, exact: true },
    { path: '/course/:id', component: DetailCoursePage, exact: false },
    { path: '/categories/:categories', component: CategoriesPage, exact: false },
];

export const routesAdmin = [
    {
        path: "/admin/dashboard",
        component: Dashboard,
        exact: false
    },
    {
        path: "/admin/users",
        component: UsersAdmin,
        exact: false
    },
    {
        path: "/admin/courses",
        component: CoursesAdmin,
        exact: false
    },
];


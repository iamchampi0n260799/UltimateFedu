import { lazy } from 'react';
import Home from '../containers/Home/HomePage';
import DetailCoursePage from '../containers/Home/DetailPage';
// import CategoriesPage from '../containers/Home/CategoriesPage';
import SignUp from '../containers/Home/SignUpPage/Signup';
import SignIn from '../containers/Home/SignInPage/Signin';
import User from '../containers/Home/UserPage/User';
import Course from '../containers/Home/CoursesPage';
import Dashboard from "../containers/Admin/Dashboard";
import UsersAdmin from '../containers/Admin/Users';
import CoursesAdmin from '../containers/Admin/Courses';
import AddUserPage from '../containers/Admin/AddUserPage';

// const Home = lazy(() => import('../containers/Home/HomePage'));
// const DetailCoursePage = lazy(() => import('../containers/Home/DetailPage'));
// const CoursesListByCategories = lazy(() => import('../components/CoursesListByCategories'));
// const SignUp = lazy(() => import('../containers/Home/SignUpPage/Signup'));
// const SignIn = lazy(() => import('../containers/Home/SignInPage/Signin'));
// const User = lazy(() => import('../containers/Home/UserPage/User'));
// const Course = lazy(() => import('../containers/Home/CoursesPage'));
// const Dashboard = lazy(() => import('../containers/Admin/Dashboard'));
// const UsersAdmin = lazy(() => import('../containers/Admin/Users'));
// const CoursesAdmin = lazy(() => import('../containers/Admin/Courses'));
// const AddUserPage = lazy(() => import('../containers/Admin/AddUserPage'));

export const routesHome = [
    { path: '/', component: Home, exact: true },
    { path: '/signup', component: SignUp, exact: false },
    { path: '/signin', component: SignIn, exact: false },
    { path: '/user', component: User, exact: false },
    { path: '/course', component: Course, exact: true },
    { path: '/course/:id', component: DetailCoursePage, exact: true },
    // { path: '/course/category/:categories', component: CoursesListByCategories, exact: true },
];

export const routesAdmin = [
    {
        path: "/admin/dashboard",
        component: Dashboard,
        exact: false
    },
    {
        path: "/admin/users/",
        component: UsersAdmin,
        exact: true
    },
    {
        path: "/admin/users/add",
        component: AddUserPage,
        exact: true
    },
    {
        path: "/admin/users/edit",
        component: AddUserPage,
        exact: true
    },
    {
        path: "/admin/users/delete",
        component: AddUserPage,
        exact: true
    },
    {
        path: "/admin/courses",
        component: CoursesAdmin,
        exact: false
    },
];


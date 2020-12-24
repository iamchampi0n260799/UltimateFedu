import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import { NavLink } from 'react-router-dom';
import SchoolIcon from '@material-ui/icons/School';

export const mainListItems = (
    <div>
        <ListItem button component={NavLink} to="/admin/dashboard">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={NavLink} to="/admin/users">
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
        </ListItem>
        <ListItem button component={NavLink} to="/admin/courses">
            <ListItemIcon>
                <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary="Courses" />
        </ListItem>
    </div>
);
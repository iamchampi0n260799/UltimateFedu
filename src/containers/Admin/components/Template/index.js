import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Sidebar from '../Sidebar';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" to="#">
                Cybersoft Elearning
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));

export default function TemplateAdmin(props) {
    const classes = useStyles();
    // const [open, setOpen] = React.useState(true);
    // const handleDrawerOpen = () => {
    //     setOpen(true);
    // };
    // const handleDrawerClose = () => {
    //     setOpen(false);
    // };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Sidebar />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    {/* phần content */}
                    {props.children}
                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </div>
    );
}


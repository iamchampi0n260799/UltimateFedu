import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { FormControl, Typography, Button, MenuItem } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    typography: {
        textAlign: 'center',
    },
    button: {
        margin: theme.spacing(1),
        color: theme.palette.text.primary,
    },
}));

const listGroupId = [
    {
        value: 'GP01',
        label: 'Nhóm 1',
    },
    {
        value: 'GP02',
        label: 'Nhóm 2',
    },
    {
        value: 'GP03',
        label: 'Nhóm 3',
    },
    {
        value: 'GP04',
        label: 'Nhóm 4',
    },
    {
        value: 'GP05',
        label: 'Nhóm 5',
    },
    {
        value: 'GP06',
        label: 'Nhóm 6',
    },
    {
        value: 'GP07',
        label: 'Nhóm 7',
    },
    {
        value: 'GP08',
        label: 'Nhóm 8',
    },
    {
        value: 'GP09',
        label: 'Nhóm 9',
    },
    {
        value: 'GP10',
        label: 'Nhóm 10',
    },
];

const listUserType = [
    {
        value: 'GV',
        label: 'Giáo viên',
    },
    {
        value: 'HV',
        label: 'Học viên',
    },

];

function Users() {
    const classes = useStyles();

    const [groupId, setGroupId] = React.useState('GP01');
    const handleChangeGroupId = (event) => {
        setGroupId(event.target.value);
    };

    const [userType, setUserType] = React.useState('GV');
    const handleChangeUserType = (event) => {
        setUserType(event.target.value);
    }

    return (
        <Grid container justify='center' alignContent='center'>
            <Grid item xs={6} md={4}>
                <Paper elevation={4} style={{ padding: '20px 15px', marginTop: '30px' }}>
                    <Typography className={classes.typography}>
                        THÊM NGƯỜI DÙNG
                    </Typography>
                    <FormControl fullWidth margin='normal'>
                        <TextField
                            id="email"
                            label="Email"
                            type="email"
                            required
                        />
                    </FormControl>
                    <FormControl fullWidth margin='normal'>
                        <TextField
                            id="taiKhoan"
                            label="Tài khoản"
                            required
                            // error
                            // helperText="Incorrect entry."
                            fullWidth
                        />
                    </FormControl>
                    <FormControl fullWidth margin='normal'>
                        <TextField
                            id="matKhau"
                            label="Mật khẩu"
                            type="password"
                            required
                        />
                    </FormControl>
                    <FormControl fullWidth margin='normal'>
                        <TextField
                            id="hoTen"
                            label="Họ tên"
                        />
                    </FormControl>
                    <FormControl fullWidth margin='normal'>
                        <TextField
                            id="soDT"
                            label="Số điện thoại"
                        />
                    </FormControl>
                    <Grid container item xs={12} justify='space-between'>
                        <Grid item xs={12} md={5}>
                            <FormControl fullWidth margin='normal' >
                                <TextField
                                    id="maLoaiNguoiDung"
                                    label="Mã loại người dùng"
                                    value={userType}
                                    onChange={handleChangeUserType}
                                    select
                                    required
                                    helperText="Hãy chọn mã loại người dùng."
                                >
                                    {listUserType.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <FormControl fullWidth margin='normal' >
                                <TextField
                                    id="maNhom"
                                    label="Mã nhóm"
                                    value={groupId}
                                    onChange={handleChangeGroupId}
                                    select
                                    required
                                    helperText="Hãy chọn mã nhóm."
                                >
                                    {listGroupId.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </FormControl>
                        </Grid>
                    </Grid>

                    <FormControl fullWidth margin='normal'>
                        <Button
                            variant='contained'
                            color='primary'
                            type='submit'
                            size="large"
                            className={classes.button}
                            startIcon={<SaveIcon />}
                        >
                            Thêm
                            </Button>
                    </FormControl>
                </Paper>
            </Grid>
        </Grid >
    )
}

export default Users;

import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { FormControl, Typography, Button, MenuItem } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { useFormik } from "formik";
import * as yup from "yup";
import Axios from "axios";

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

const handleAddUser = (values) => {
    console.log(values);
    Axios({
        method: "POST",
        url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
        data: values,
    })
}

const validateUserSchema = yup.object().shape({
    taiKhoan: yup.string().required("Tài khoản không được để trống!"),
    matKhau: yup.string().required("Mật khẩu không được để trống!"),
    hoTen: yup.string().required("Họ tên không được để trống!"),
    soDT: yup.string().matches(/^\d{10}$/, "Số điện thoại phải đủ 10 số!"),
    email: yup
        .string()
        .required("Email không được để trống!")
        .email("Email không hợp lệ!"),
    maLoaiNguoiDung: yup.string().required("Mã loại người dùng không được để trống!"),
    maNhom: yup.string().required("Mã nhóm không được để trống!"),
})

function Users(props) {
    const classes = useStyles();

    const [groupId] = React.useState('GP01');
    // const [groupId, setGroupId] = React.useState('GP01');
    // const handleChangeGroupId = (event) => {
    //     setGroupId(event.target.value);
    // };

    const [userType] = React.useState('GV');
    // const [userType, setUserType] = React.useState('GV');
    // const handleChangeUserType = (event) => {
    //     setUserType(event.target.value);
    // }

    const userFormik = useFormik({
        initialValues:
        {
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            soDT: "",
            maLoaiNguoiDung: "HV",
            maNhom: "GP01",
            email: ""
        },
        validationSchema: validateUserSchema,
        onSubmit: handleAddUser,
    })

    return (
        <Grid container justify='center' alignContent='center'>
            <Grid item xs={6} md={4}>
                <Paper elevation={4} style={{ padding: '20px 15px', marginTop: '30px' }}>
                    <Typography className={classes.typography}>
                        THÊM NGƯỜI DÙNG
                    </Typography>
                    <form onSubmit={userFormik.handleSubmit}>
                        <FormControl fullWidth margin='normal'>
                            <TextField
                                id="taiKhoan"
                                label="Tài khoản *"
                                // required
                                fullWidth
                                value={userFormik.values.taiKhoan}
                                name="taiKhoan"
                                onChange={userFormik.handleChange}
                                error={userFormik.touched.taiKhoan && Boolean(userFormik.errors.taiKhoan)}
                                helperText={userFormik.touched.taiKhoan && userFormik.errors.taiKhoan}
                            />
                        </FormControl>
                        <FormControl fullWidth margin='normal'>
                            <TextField
                                id="matKhau"
                                label="Mật khẩu *"
                                type="password"
                                // required
                                value={userFormik.values.matKhau}
                                name="matKhau"
                                onChange={userFormik.handleChange}
                                error={userFormik.touched.matKhau && Boolean(userFormik.errors.matKhau)}
                                helperText={userFormik.touched.matKhau && userFormik.errors.matKhau}
                            />
                        </FormControl>
                        <FormControl fullWidth margin='normal'>
                            <TextField
                                id="hoTen"
                                label="Họ tên *"
                                value={userFormik.values.hoTen}
                                name="hoTen"
                                onChange={userFormik.handleChange}
                                error={userFormik.touched.hoTen && Boolean(userFormik.errors.hoTen)}
                                helperText={userFormik.touched.hoTen && userFormik.errors.hoTen}
                            />
                        </FormControl>
                        <FormControl fullWidth margin='normal'>
                            <TextField
                                id="email"
                                label="Email"
                                type="email"
                                // required
                                value={userFormik.values.email}
                                name="email"
                                onChange={userFormik.handleChange}
                                error={userFormik.touched.email && Boolean(userFormik.errors.email)}
                                helperText={userFormik.touched.email && userFormik.errors.email}
                            />
                        </FormControl>
                        <FormControl fullWidth margin='normal'>
                            <TextField
                                id="soDT"
                                label="Số điện thoại"
                                value={userFormik.values.soDT}
                                name="soDT"
                                onChange={userFormik.handleChange}
                                error={userFormik.touched.soDT && Boolean(userFormik.errors.soDT)}
                                helperText={userFormik.touched.soDT && userFormik.errors.soDT}
                            />
                        </FormControl>
                        <Grid container item xs={12} justify='space-between'>
                            <Grid item xs={12} md={5}>
                                <FormControl fullWidth margin='normal' >
                                    <TextField
                                        id="maLoaiNguoiDung"
                                        label="Mã loại người dùng"
                                        value={userType}
                                        // onChange={handleChangeUserType}
                                        select
                                        // required
                                        // helperText="Hãy chọn mã loại người dùng."
                                        value={userFormik.values.maLoaiNguoiDung}
                                        name="maLoaiNguoiDung"
                                        onChange={userFormik.handleChange}
                                        error={userFormik.touched.maLoaiNguoiDung && Boolean(userFormik.errors.maLoaiNguoiDung)}
                                        helperText={userFormik.touched.maLoaiNguoiDung && userFormik.errors.maLoaiNguoiDung}
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
                                        // onChange={handleChangeGroupId}
                                        select
                                        // required
                                        // helperText="Hãy chọn mã nhóm."
                                        value={userFormik.values.maNhom}
                                        name="maNhom"
                                        onChange={userFormik.handleChange}
                                        error={userFormik.touched.maNhom && Boolean(userFormik.errors.maNhom)}
                                        helperText={userFormik.touched.maNhom && userFormik.errors.maNhom}
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
                            >Thêm</Button>
                        </FormControl>
                    </form>
                </Paper>
            </Grid>
        </Grid >
    )
}

export default Users;

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { FormControl, Typography, Button, MenuItem } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { useFormik } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";
import { actionAddUserAdmin } from "../AddUserPage/modules/action";
import Loader from "../../../components/Loader";
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

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
        padding: theme.spacing(1),
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

function AddUserPage(props) {
    const classes = useStyles();

    // const [groupId] = React.useState('GP01');
    // const [groupId, setGroupId] = React.useState('GP01');
    // const handleChangeGroupId = (event) => {
    //     setGroupId(event.target.value);
    // };

    // const [userType] = React.useState('GV');
    // const [userType, setUserType] = React.useState('GV');
    // const handleChangeUserType = (event) => {
    //     setUserType(event.target.value);
    // }

    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleAddUser = (values) => {
        // console.log(values);
        setOpen(true);
        props.addUserAdmin(values, props.history);
    }

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

    const renderNoti = () => {
        const { error } = props;
        if (error) {
            return (
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message={"Lỗi: " + error.response.status + ": " + error.response.data}
                    action={
                        <React.Fragment>
                            <Button color="secondary" size="small" onClick={handleClose}>
                                UNDO
                            </Button>
                            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        </React.Fragment>
                    }
                />
            )
        }
    }

    if (props.loading) {
        return <Loader />;
    }

    return (
        <>
            <Grid container justify='center' alignContent='center'>
                <Grid item xs={12} md={6}>
                    <Typography className={classes.typography}>
                        THÊM NGƯỜI DÙNG
                </Typography>
                    <Paper elevation={4} style={{ padding: '10px 15px' }}>
                        <Grid container justify='center'>
                            <Grid item>
                                <form onSubmit={userFormik.handleSubmit}>
                                    {renderNoti()}
                                    <FormControl fullWidth margin='normal'>
                                        <TextField
                                            label="Tài khoản *"
                                            id="taiKhoan"
                                            name="taiKhoan"
                                            value={userFormik.values.taiKhoan}
                                            onChange={userFormik.handleChange}
                                            error={userFormik.touched.taiKhoan && Boolean(userFormik.errors.taiKhoan)}
                                            helperText={userFormik.touched.taiKhoan && userFormik.errors.taiKhoan}
                                            fullWidth
                                        />
                                    </FormControl>
                                    <FormControl fullWidth margin='normal'>
                                        <TextField
                                            label="Mật khẩu *"
                                            id="matKhau"
                                            name="matKhau"
                                            type="password"
                                            value={userFormik.values.matKhau}
                                            onChange={userFormik.handleChange}
                                            error={userFormik.touched.matKhau && Boolean(userFormik.errors.matKhau)}
                                            helperText={userFormik.touched.matKhau && userFormik.errors.matKhau}
                                            fullWidth
                                        />
                                    </FormControl>
                                    <FormControl fullWidth margin='normal'>
                                        <TextField
                                            label="Họ tên *"
                                            id="hoTen"
                                            name="hoTen"
                                            value={userFormik.values.hoTen}
                                            onChange={userFormik.handleChange}
                                            error={userFormik.touched.hoTen && Boolean(userFormik.errors.hoTen)}
                                            helperText={userFormik.touched.hoTen && userFormik.errors.hoTen}
                                            fullWidth
                                        />
                                    </FormControl>
                                    <FormControl fullWidth margin='normal'>
                                        <TextField
                                            label="Email"
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={userFormik.values.email}
                                            onChange={userFormik.handleChange}
                                            error={userFormik.touched.email && Boolean(userFormik.errors.email)}
                                            helperText={userFormik.touched.email && userFormik.errors.email}
                                            fullWidth
                                        />
                                    </FormControl>
                                    <FormControl fullWidth margin='normal'>
                                        <TextField
                                            label="Số điện thoại"
                                            id="soDT"
                                            name="soDT"
                                            value={userFormik.values.soDT}
                                            onChange={userFormik.handleChange}
                                            error={userFormik.touched.soDT && Boolean(userFormik.errors.soDT)}
                                            helperText={userFormik.touched.soDT && userFormik.errors.soDT}
                                            fullWidth
                                        />
                                    </FormControl>
                                    <Grid container item xs={12} justify='space-between'>
                                        <Grid item xs={12} md={6}>
                                            <FormControl fullWidth margin='normal' >
                                                <TextField
                                                    label="Mã loại người dùng"
                                                    id="maLoaiNguoiDung"
                                                    name="maLoaiNguoiDung"
                                                    select
                                                    // value={userType}
                                                    value={userFormik.values.maLoaiNguoiDung}
                                                    onChange={userFormik.handleChange}
                                                    error={userFormik.touched.maLoaiNguoiDung && Boolean(userFormik.errors.maLoaiNguoiDung)}
                                                    helperText={userFormik.touched.maLoaiNguoiDung && userFormik.errors.maLoaiNguoiDung}
                                                    fullWidth
                                                >
                                                    {listUserType.map((option) => (
                                                        <MenuItem key={option.value} value={option.value}>
                                                            {option.label}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <FormControl fullWidth margin='normal' >
                                                <TextField
                                                    label="Mã nhóm"
                                                    id="maNhom"
                                                    name="maNhom"
                                                    // value={groupId}
                                                    select
                                                    value={userFormik.values.maNhom}
                                                    onChange={userFormik.handleChange}
                                                    error={userFormik.touched.maNhom && Boolean(userFormik.errors.maNhom)}
                                                    helperText={userFormik.touched.maNhom && userFormik.errors.maNhom}
                                                    fullWidth
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
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid >
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        loading: state.addUserAdminReducer.loading,
        data: state.addUserAdminReducer.data,
        error: state.addUserAdminReducer.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUserAdmin: (values, history) => {
            dispatch(actionAddUserAdmin(values, history));
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(AddUserPage);

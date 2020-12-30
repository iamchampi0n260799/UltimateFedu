import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { actionFetchUsersList } from "./modules/action";
import Loader from "../../../components/Loader";
import queryString from "query-string";
import Pagination from '@material-ui/lab/Pagination';
import {
    useHistory,
    useLocation,
    Link,
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Users(props) {
    const classes = useStyles();

    const history = useHistory();
    const query = useQuery();

    const page = parseInt(query.get("page"));
    let totalPages = 1;

    const [pagination, setPagination] = useState({
        maNhom: "GP01",
        page: page || 1,
        pageSize: 10,
    });

    useEffect(() => {
        const paramsString = queryString.stringify(pagination);
        props.fetchUsersList(paramsString);
    }, [pagination]);

    const renderTable = () => {
        const { data } = props;

        if (data) {
            totalPages = data.totalPages;
            return data.items.map((item, index) => {
                return (
                    <tr key={index}>
                        <td scope="row">{item.taiKhoan}</td>
                        <td>{item.hoTen}</td>
                        <td>{item.email}</td>
                        <td>{item.soDT}</td>
                        <td>{item.tenLoaiNguoiDung}</td>
                    </tr>
                )
            })
        }

    }

    const handleChange = (event, value) => {
        setPagination({
            ...pagination,
            page: value,
        });
        history.push(`/admin/users?page=${value}`);
    }

    const handleAddUser = (event) => {
        event.preventDefault();
        history.push(`/admin/users/add`);
    }
    const { loading } = props;
    if (loading) return <Loader />;
    return (
        <div>
            <h4 className="text-center mt-0">Danh Sách Người Dùng</h4>
            <div>
                <Link
                    className="btn btn-primary"
                    to="/admin/users/add"
                    onClick={handleAddUser}
                >Thêm người dùng</Link>
            </div>
            <div >
                <table className="table">
                    <thead>
                        <tr>
                            <th>Tài Khoản</th>
                            <th>Họ Tên</th>
                            <th>Email</th>
                            <th>Số Điện Thoại</th>
                            <th>Loại Người Dùng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTable()}
                    </tbody>
                </table>
            </div>
            <div className={classes.root}>
                <Pagination
                    count={totalPages}
                    color="primary"
                    page={pagination.page}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        loading: state.usersListReducer.loading,
        data: state.usersListReducer.data,
        error: state.usersListReducer.err,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsersList: (paramsString) => {
            dispatch(actionFetchUsersList(paramsString));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
import React, { Component } from 'react';
import { connect } from "react-redux";
import { actionFetchUsersList } from "./modules/action";
import Loader from "../../../components/Loader";

class Users extends Component {

    componentDidMount() {
        this.props.fetchUsersList();
    }

    renderTable = () => {
        console.log(this.props.data)
        if (this.props.data) {
            return this.props.data.items.map((item, index) => {
                return (
                    <tr key={index}>
                        <td scope="row">{item.taiKhoan}</td>
                        <td>{item.hoTen}</td>
                        <td>{item.soDT}</td>
                        <td>{item.email}</td>
                        <td>{item.tenLoaiNguoiDung}</td>
                    </tr>
                )
            })
        }
    }

    render() {
        if (this.props.loading) return <Loader />;

        return (
            <div>
                <h1 className="text-center">Danh Sách Người Dùng</h1>
                <div>
                    <a className="btn btn-primary" href="#" role="button">Thêm người dùng</a>
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
                            {this.renderTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
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
        fetchUsersList: () => {
            dispatch(actionFetchUsersList());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
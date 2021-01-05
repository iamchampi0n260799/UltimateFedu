import React, { useState, useEffect } from "react";
import "./index.css";
import { fetchUserEdit } from "./module/action";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import axios from "axios"
import { actCancelCourse } from "../DetailPage/modules/action";
function User(props) {
  let [khoaHocDaDangKy, setKhoaHocDaDangKy] = useState([])

  let userInformation = JSON.parse(localStorage.getItem("user"));

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    props.EditUser({ ...data, maLoaiNguoiDung: "HV", maNhom: "GP01" }, props.history)
  };

  let data = props.data;

  if (data) {
    localStorage.setItem("user", JSON.stringify({ ...data, accessToken: userInformation.accessToken }))
    userInformation = JSON.parse(localStorage.getItem("user"));
  }

  useEffect(() => {

    axios({
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
      method: "POST",
      data: {
        taiKhoan: `${userInformation.taiKhoan}`,
        matKhau: `${userInformation.matKhau}`,
      },
      headers: {
        Authorization: `Bearer ${userInformation.accessToken}`
      },
    }).then((result) => {

      setKhoaHocDaDangKy(result.data.chiTietKhoaHocGhiDanh)
    }).catch((error) => {
      console.log(error)
    })
  }, [])
  const cancelCourse = (maKhoaHoc) => {
    props.fetchCancelCourse({
      maKhoaHoc,
      taiKhoan: userInformation.taiKhoan
    })
  }
  const renderRegisterCourses = () => {
    if (khoaHocDaDangKy) {
      return khoaHocDaDangKy.map((khoaHoc, index) => (
        <div id="userCourses" className="userCourse" key={index}>
          <h5>{khoaHoc.tenKhoaHoc}</h5>

          <button onClick={() => { cancelCourse(khoaHoc.maKhoaHoc) }} className="btn btn-danger">Hủy</button>
        </div>
      ))
    }
  }

  return (
    <div className="user-profile container">
      <div className="row">
        <div className="col-4">
          <div>
            <img
              style={{ width: "90%", height: "90%" }}
              src="./images/user.png"
              alt=""
            />
            <h3 className="text-center">{userInformation.hoTen}</h3>
            <p className="text-center">{userInformation.email}</p>
          </div>
          <div className="box">
            <i class="fa fa-user mr-5"></i>
            <a href="#userProfile">User profile</a>
          </div>
          <hr />
          <div className="box">
            <i class="fa fa-book mr-5"></i>
            <a href="#userCourses">User courses</a>
          </div>
          <hr />
        </div>
        <div className="col-8">
          <div className="p-3 fancy" style={{ backgroundColor: "orange" }}>
            <p className="text-center text-light">
              Cuộc sống thật là vui!
            </p>
          </div>
          <div id="userProfile" className="profile">
            <h2>User's profile</h2>
            <div className="information-group">
              <h6>Họ tên:</h6>
              <input
                type="text"
                name="hoTen"
                id=""
                value={userInformation.hoTen}
              />
            </div>
            <div className="information-group">
              <h6>Email:</h6>
              <input
                type="text"
                name="email"
                id=""
                value={userInformation.email}
              />
            </div>
            <div className="information-group">
              <h6>Tài khoản:</h6>
              <input
                type="text"
                name="taiKhoan"
                id=""
                value={userInformation.taiKhoan}
              />
            </div>
            <div className="information-group">
              <h6>Số điện thoại:</h6>
              <input
                type="text"
                name="soDT"
                id=""
                value={userInformation.soDT || "01219138679"}
              />
            </div>
            <div className="information-group">
              <button
                data-toggle="modal"
                data-target="#exampleModal"
                className="btn btn-primary"
              >
                Edit profile
              </button>
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content pt-5">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Edit User
                      </h5>

                    </div>
                    <div class="modal-body">
                      <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div className="information-group-edit">

                          <i class="fa fa-user"></i>
                          <input
                            type="text"
                            name="hoTen"
                            ref={register({
                              required: " Required",
                            })}
                            placeholder="Họ tên"
                          />
                          {errors.hoTen && (
                            <span className="text-danger">
                              {errors.hoTen.message}
                            </span>
                          )}
                        </div>
                        <div className="information-group-edit">
                          <i class="fa fa-envelope"></i>
                          <input
                            type="email"
                            name="email"
                            ref={register({
                              required: " Required",
                            })}
                            placeholder="Email"
                          />
                          {errors.email && (
                            <span className="text-danger">
                              {errors.email.message}
                            </span>
                          )}
                        </div>
                        <div className="information-group-edit">
                          <i class="fa fa-phone"></i>
                          <input
                            type="number"
                            name="soDT"
                            ref={register({
                              required: " Required",
                            })}
                            placeholder="Số điện thoại"
                          />
                          {errors.soDT && (
                            <span className="text-danger">
                              {errors.soDT.message}
                            </span>
                          )}
                        </div>
                        <div className="information-group-edit">
                          <i class="fa fa-key"></i>
                          <input
                            type="text"
                            name="taiKhoan"
                            ref={register({
                              required: " Required",
                            })}
                            placeholder="Tài khoản"
                          />
                          {errors.taiKhoan && (
                            <span className="text-danger">
                              {errors.taiKhoan.message}
                            </span>
                          )}
                        </div>
                        <div className="information-group-edit">
                          <i class="fa fa-key"></i>
                          <input
                            type="password"
                            name="matKhau"
                            ref={register({
                              required: " Required",
                            })}
                            placeholder="Mật khẩu"
                          />
                          {errors.matKhau && (
                            <span className="text-danger">
                              {errors.matKhau.message}
                            </span>
                          )}
                        </div>
                        <button type="submit" class="btn btn-primary">
                          Save changes
                        </button>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h2>User's courses</h2>
            {renderRegisterCourses()}
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    data: state.editUserReducer.data,
    loading: state.editUserReducer.loading,
    error: state.editUserReducer.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    EditUser: (data, history) => {
      dispatch(fetchUserEdit(data, history));
    },
    fetchCancelCourse: (data, history) => {
      dispatch(actCancelCourse(data, history))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(User);

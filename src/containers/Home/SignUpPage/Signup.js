import React from "react";
import { useForm } from "react-hook-form";
import "./index.css";
import { fetchSignUp } from "./module/action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Signup(props) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    // const user = { ...data, maLoaiNguoiDung: "QuanTri", maNhom: "GP01" };
    const user = { ...data, maLoaiNguoiDung: "HV", maNhom: "GP01" };
    console.log(user);
    props.Signup(user, props.history);
  };
  return (
    <section className="signup">
      <div className="container">
        <div className="signup-content">
          <div className="signup-form">
            <h1>Sign up</h1>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="hoTen">
                  <i className="fa fa-user"></i>
                </label>
                <input
                  ref={register({
                    required: " Required",
                  })}
                  type="text"
                  name="hoTen"
                  id=""
                  placeholder="Họ tên"
                />
                {errors.hoTen && (
                  <span className="text-danger">{errors.hoTen.message}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  <i className="fa fa-envelope"></i>
                </label>
                <input
                  ref={register({
                    required: " Required",
                  })}
                  type="email"
                  name="email"
                  id=""
                  placeholder="Email"
                />
                {errors.email && (
                  <span className="text-danger">{errors.email.message}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="taiKhoan">
                  <i className="fa fa-asterisk"></i>
                </label>
                <input
                  type="text"
                  name="taiKhoan"
                  id=""
                  placeholder="Tài khoản"
                  ref={register({
                    required: " Required",
                  })}
                />
                {errors.taiKhoan && (
                  <span className="text-danger">{errors.taiKhoan.message}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="matKhau">
                  <i className="fa fa-key"></i>
                </label>
                <input
                  // type="text"
                  type="password"
                  name="matKhau"
                  id=""
                  placeholder="Mật khẩu"
                  ref={register({
                    required: " Required",
                  })}
                />
                {errors.matKhau && (
                  <span className="text-danger">{errors.matKhau.message}</span>
                )}
              </div>
              <div className="form-group">
                {/* <label htmlFor="nhapLaiMatKhau"> */}
                <label htmlFor="soDT">
                  <i className="fa fa-key"></i>
                </label>
                <input
                  type="number"
                  name="soDT"
                  id=""
                  placeholder="Số điện thoại"
                  ref={register({
                    required: " Required",
                  })}
                />
                {errors.soDT && (
                  <span className="text-danger">{errors.soDT.message}</span>
                )}
              </div>
              <div className="form-group">
                <span>
                  Bạn đã có tài khoản ? <Link to="/signin">Đăng nhập</Link>
                </span>
              </div>
              <button className="btn btn-primary">Đăng ký</button>
            </form>
          </div>
          <div className="signup-image">
            {/* <img style={{ width: "100%", height: "100%" }} src="./images/signup-image.jpg" alt="" /> */}
            <img style={{ width: "100%", height: "100%" }} src="/images/signup-image.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>


  );
}
const mapStateToProps = (state) => {
  return {
    loading: state.signupReducer.loading,
    data: state.signupReducer.data,
    error: state.signupReducer.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    Signup: (data, history) => {
      dispatch(fetchSignUp(data, history));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

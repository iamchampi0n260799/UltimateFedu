import React from 'react'
import { fetchSignIn } from "./module/action";
import { connect } from "react-redux";
import { useForm } from 'react-hook-form';
import "./index.css"
import { Link } from "react-router-dom";

function Signin(props) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    props.Signin(data, props.history)
  }
  return (
    <section className="signup">
      <div className="container">
        <div className="signup-content">
          <div className="signin-image">
            <img style={{ width: "100%", height: "100%" }} src="/images/signin-image.jpg" alt="" />
          </div>
          <div className="signup-form">
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="taiKhoan">
                  <i className="fa fa-asterisk"></i>
                </label>
                <input
                  type="taiKhoan"
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
              <button className="btn btn-primary">Đăng nhập</button>
              <div className="form-group">
                <span>
                  Bạn chưa có tài khoản ? <Link to="/signup">Đăng ký</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    loading: state.signinReducer.loading,
    data: state.signinReducer.data,
    error: state.signinReducer.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    Signin: (data, history) => {
      dispatch(fetchSignIn(data, history));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);

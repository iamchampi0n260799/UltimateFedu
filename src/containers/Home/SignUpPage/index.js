import React, { Component } from "react";
import "./index.css"
export default class index extends Component {
  render() {
    return (
      <div className="wrapper wrapper--w790 mt-5">
        <div className="card card-5">
          <div className="card-heading">
            <h2 className="title">Đăng ký</h2>
          </div>
          <div className="card-body">
            <form method="POST">
             
              <div className="form-row">
                <div className="name">Tài khoản</div>
                <div className="value">
                  <div className="input-group">
                    <input
                      className="input--style-5"
                      type="text"
                      name="taiKhoan"
                    />
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="name">Mật khẩu</div>
                <div className="value">
                  <div className="input-group">
                    <input
                      className="input--style-5"
                      type="email"
                      name="matKhau"
                    />
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="name">Họ tên</div>
                <div className="value">
                  <div className="input-group">
                    <input
                      className="input--style-5"
                      type="email"
                      name="hoTen"
                    />
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="name">Email</div>
                <div className="value">
                  <div className="input-group">
                    <input
                      className="input--style-5"
                      type="email"
                      name="email"
                    />
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="name">Mật khẩu</div>
                <div className="value">
                  <div className="input-group">
                    <input
                      className="input--style-5"
                      type="email"
                      name="soDT"
                    />
                  </div>
                </div>
              </div>
              <div>
                <button className="btn btn--radius-2 btn--red" type="submit">
                  Đăng ký
                </button>
                <button className="btn btn--radius-2 btn--green ml-3">
                  Đăng nhập
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

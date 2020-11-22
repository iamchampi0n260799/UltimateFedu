import React, { Component } from "react";
import "./index.css";
export default class index extends Component {
  render() {
    const userInformation = JSON.parse(localStorage.getItem("user"));
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
              <a href="#">User profile</a>
            </div>
            <hr />
            <div className="box">
              <i class="fa fa-book mr-5"></i>
              <a href="#">User courses</a>
            </div>
            <hr />
          </div>
          <div className="col-8">
            <div className="p-3 fancy" style={{ backgroundColor: "orange" }}>
              <p className="text-center text-light">
                Cuộc sống thật là vui khi làm wjbu và hãy luôn tự hào vì mình là
                1 thằng wjbu
              </p>
            </div>
            <div className="profile">
              <h2>User profile</h2>
              <form action="">
                <div className="information-group">
                  <h6>Họ tên:</h6>
                  <input
                    type="text"
                    name=""
                    id=""
                    value={userInformation.hoTen}
                  />
                </div>
                <div className="information-group">
                  <h6>Email:</h6>
                  <input
                    type="text"
                    name=""
                    id=""
                    value={userInformation.email}
                  />
                </div>
                <div className="information-group">
                  <h6>Tài khoản:</h6>
                  <input
                    type="text"
                    name=""
                    id=""
                    value={userInformation.taiKhoan}
                  />
                </div>
                <div className="information-group">
                  <h6>Số điện thoại:</h6>
                  <input
                    type="text"
                    name=""
                    id=""
                    value={userInformation.soDT || "01219138679"}
                  />
                </div>
                <div className="information-group">
                  <button className="btn btn-primary">Edit profile</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import "./index.css";
export default class index extends Component {
  render() {
    const userInformation = JSON.parse(localStorage.getItem("user"))
    console.log(userInformation);
    return (
      <div>
        <div className="user-profile container">
          <div className="row">
            <div className="col-sm-4 user-item text-center">
              <div className>
                <div className="left">
                  <div className="left-image">
                    <img src="./images/user.png" alt />
                    
                  </div>
                  <div style={{marginLeft: "55px"}} className="left-menu">
                    <div className="left-menu-item">
                      <i className="fa fa-user" />
                      <div className="child-item">
                        <a href="">User profile</a>
                      </div>
                    </div>
                  </div>
                  <div style={{marginLeft: "55px"}} className="left-menu">
                    <div className="left-menu-item">
                      <i className="fa fa-book" />
                      <div className="child-item">
                        <a href="">My courses</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right" />
              </div>
            </div>
            <div className="col-sm-8 user-item">
              <section className="signup">
                <div className="container">
                  <div className="signup-content">
                    <div className="signup-form">
                      
                      <form action="">
                        <div className="form-group">
                          
                          <label htmlFor="hoTen">
                            <i class="fa fa-user"></i>
                          </label>
                          <input
                            type="text"
                            name="hoTen"
                            id=""
                            value={userInformation.hoTen}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="email">
                            <i class="fa fa-envelope"></i>
                          </label>
                          <input
                            type="email"
                            name="email"
                            id=""
                            value={userInformation.email}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="taiKhoan">
                            <i class="fa fa-asterisk"></i>
                          </label>
                          <input
                            type="text"
                            name="taiKhoan"
                            id=""
                            value={userInformation.taiKhoan}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="soDT">
                            <i class="fa fa-key"></i>
                          </label>
                          <input
                            type="phone"
                            name="soDT"
                            id=""
                            value={userInformation.soDT || "0907942969"}
                          />
                        </div>
                        <button className="btn btn-primary">
                          Update profile
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

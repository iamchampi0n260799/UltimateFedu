import React, { Component } from "react";
import { withRouter } from "react-router";
// import axios from "axios";
import "../../../../styles/sass/main.scss";
import { Link } from "react-router-dom";

class Header extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     categories: [],
  //   };
  // }
  // componentDidMount() {
  //   const url = `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc`;
  //   axios
  //     .get(url)
  //     .then((result) => {
  //       this.setState({
  //         categories: result.data,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
  // handleClickToPush = (maDanhMuc) => {
  //   this.props.history.push(`/categories/${maDanhMuc}`);
  // };

  // renderCategoies = () => {
  //   return this.state.categories.map((item, index) => (
  //     <Link
  //       style={{ cursor: "pointer" }}
  //       key={index}
  //       onClick={() => {
  //         this.handleClickToPush(item.maDanhMuc);
  //       }}
  //       className="dropdown-item"
  //       to={`/courses/${item.maDanhMuc}`}
  //     >
  //       {item.tenDanhMuc}
  //     </Link>
  //   ));
  // };

  shortUserName = (userName) => {
    let splitNameToArray = userName.split(" ");
    let result = "";

    for (let i = 0; i <= splitNameToArray.length - 1; i++) {
      result += splitNameToArray[i].charAt(0).toUpperCase();
    }

    return result;
  };
  render() {
    const user = JSON.parse(localStorage.getItem("user"));

    return (
      <header className="header__home">
        {/* fixed-top */}
        <nav className="navbar navbar-expand-lg  header__content ">
          <div className="col-sm-6">
            <div className="header__left">
              <Link className="navbar-brand" to="/">
                <img
                  src="/images/logo.png"
                  className="img-fluid"
                  alt="ELearning Cybersoft"
                />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="header__right">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">
                      TRANG CHỦ
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link" to="/course">
                      CÁC KHÓA HỌC
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                      SỰ KIỆN
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                      BLOG
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                      LIÊN HỆ
                    </Link>
                  </li>
                  <li className="nav-item">
                    {user ? (
                      <Link className="nav-link logoUser" to="/user">
                        {this.shortUserName(user.hoTen)}
                      </Link>

                    ) : (
                        <Link className="nav-link" to="/signin">
                          ĐĂNG NHẬP
                        </Link>
                      )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);

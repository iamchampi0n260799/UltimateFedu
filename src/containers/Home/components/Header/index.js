import React, { Component } from "react";
import { withRouter } from "react-router";
import axios from "axios";
import Search from "../../../../components/Search";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }
  componentDidMount() {
    const url = `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc`;
    axios
      .get(url)
      .then((result) => {
        this.setState({
          categories: result.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  handleClickToPush = (maDanhMuc) => {
    this.props.history.push(`/categories/${maDanhMuc}`);
  };
  renderCategoies = () => {
    return this.state.categories.map((item, index) => (
      <a
        style={{ cursor: "pointer" }}
        key={index}
        onClick={() => {
          this.handleClickToPush(item.maDanhMuc);
        }}
        className="dropdown-item"
      >
        {item.tenDanhMuc}
      </a>
    ));
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {this.renderCategoies()}
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <Search />
          </div>
        </nav>
      </div>
    );
  }
}
export default withRouter(index);

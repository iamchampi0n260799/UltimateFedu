import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./index.css";
import axios from "axios";
export default function Courses(props) {
  const [danhMucKhoaHoc, setDanhMucKhoaHoc] = useState([]);
  const [danhSachNguoiDung, setDanhSachNguoiDung] = useState([]);
  const [taiKhoanNguoiTao, setTaiKhoanNguoiTao] =
    useState({}) || "Cao Chi Hieu";
  const [maDanhMucKhoaHoc, setMaDanhMucKhoaHoc] =
    useState({}) || "Lập trình Backend";
  const { register, handleSubmit, errors, getValues } = useForm();
  const onChangeNguoiTao = (event) => {
    setTaiKhoanNguoiTao(event.target.value);
  };
  const onChangeDanhMuc = (event) => {
    setMaDanhMucKhoaHoc(event.target.value);
  };
  const previewFile = () => {
    var preview = document.querySelector("img");
    var file = document.querySelector("input[type=file]").files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
      preview.src = reader.result;
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "";
    }
  };
  const onSubmit = (data) => {
    const courses = {
      ...data,
      maNhom: "GP01",
      luotXem: 3151,
      danhgia: 0,
      taiKhoanNguoiTao,
      maDanhMucKhoaHoc,
    };
    console.log(courses)
    let accessToken = ''
    if (localStorage.getItem('user')) {
      let getItemLocalStorage = JSON.parse(localStorage.getItem('user'))
      accessToken = getItemLocalStorage.accessToken;
    }
    axios({
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/ThemKhoaHoc`,
      method: "POST",
      data: courses,
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
    }).then((result) => {
      console.log('Success')
      console.log(result.data)
    }).catch(err => {
      console.log(err)
    })
  };
  const renderCategoies = () => {
    if (danhMucKhoaHoc) {
      return danhMucKhoaHoc.map((item, index) => (
        <option value={item.tenDanhMuc} name={item.tenDanhMuc} key={index}>
          {item.tenDanhMuc}
        </option>
      ));
    }
  };
  const renderDanhSachGV = () => {
    if (danhMucKhoaHoc) {
      return danhSachNguoiDung.map((item, index) => (
        <option value={item.hoTen} name={item.hoTen} key={index}>
          {item.hoTen}
        </option>
      ));
    }
  };
  function getDanhSachNguoiDung() {
    return axios(
      "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01"
    );
  }
  function getDanhMucKhoaHoc() {
    return axios(
      "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc"
    );
  }
  useEffect(() => {
    Promise.all([getDanhSachNguoiDung(), getDanhMucKhoaHoc()])
      .then((result) => {
        let filterNguoiDung = result[0].data.filter(
          (user) => user.maLoaiNguoiDung === "GV"
        );
        setDanhSachNguoiDung(filterNguoiDung);
        setDanhMucKhoaHoc(result[1].data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <section className="signup">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
              <h1>Thêm khóa học</h1>
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label htmlFor="maKhoaHoc"></label>
                  <input
                    ref={register({
                      required: " Required",
                    })}
                    type="text"
                    name="maKhoaHoc"
                    id="maKhoaHoc"
                    placeholder="Mã khóa học"
                  />
                  {errors.maKhoaHoc && (
                    <span className="text-danger">
                      {errors.maKhoaHoc.message}
                    </span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="tenKhoaHoc"></label>
                  <input
                    ref={register({
                      required: " Required",
                    })}
                    type="text"
                    name="tenKhoaHoc"
                    id="tenKhoaHoc"
                    placeholder="Tên khóa học"
                  />
                  {errors.tenKhoaHoc && (
                    <span className="text-danger">
                      {errors.tenKhoaHoc.message}
                    </span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="moTa"></label>
                  <input
                    ref={register({
                      required: " Required",
                    })}
                    type="text"
                    name="moTa"
                    id=""
                    placeholder="Mô tả"
                  />
                  {errors.moTa && (
                    <span className="text-danger">{errors.moTa.message}</span>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="hinhAnh"></label>
                  <div>
                    <input ref={register({
                      required: " Required",
                    })}
                      name="hinhAnh"
                      type="file"
                      onChange={previewFile} />
                    <br />
                    <img src="" width="100%" height="100%" alt="Image preview..."></img>
                  </div>


                </div>
                <p>Mã danh mục khóa học</p>
                <div className="form-group">
                  <select
                    onChange={onChangeDanhMuc}
                    name="maDanhMucKhoaHoc"
                    className="p-3 select-option"
                  >
                    {renderCategoies()}
                  </select>
                </div>
                <p>Tài khoản người tạo</p>
                <div className="form-group">
                  <select
                    onChange={onChangeNguoiTao}
                    name="taiKhoanNguoiTao"
                    id=""
                    className="p-3 select-option"
                  >
                    {renderDanhSachGV()}
                  </select>
                </div>
                <button className="btn btn-primary">Thêm</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

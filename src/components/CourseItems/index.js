import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router";
import "./index.css";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

function CourseItems(props) {
  const classes = useStyles();
  // const { hinhAnh, tenKhoaHoc, moTa, maKhoaHoc } = props.course;
  // const { hinhAnh, tenKhoaHoc, maKhoaHoc } = props.course;
  const { course } = props;
  // {
  //   "maKhoaHoc": "55w",
  //   "biDanh": "backend-node-js",
  //   "tenKhoaHoc": "Backend Node js",
  //   "moTa": "Node.js là một hệ thống phần mềm được thiết kế để viết các ứng dụng internet có khả năng mở rộng, đặc biệt là máy chủ web. Chương trình được viết bằng JavaScript, sử dụng kỹ thuật điều khiển theo sự kiện, nhập/xuất không đồng bộ để tối thiểu tổng chi phí và tối đa khả năng mở rộng. Wikipedia",
  //   "luotXem": 0,
  //   "hinhAnh": "https://elearning0706.cybersoft.edu.vn/hinhanh/backend-node-js.jpg",
  //   "maNhom": "GP01",
  //   "ngayTao": "05/11/2020",
  //   "soLuongHocVien": 0,
  //   "nguoiTao": {
  //     "taiKhoan": null,
  //     "hoTen": null,
  //     "maLoaiNguoiDung": null,
  //     "tenLoaiNguoiDung": null
  //   },
  //   "danhMucKhoaHoc": {
  //     "maDanhMucKhoahoc": "BackEnd",
  //     "tenDanhMucKhoaHoc": "Lập trình Backend"
  //   }
  // }
  return (
    // <Card
    //   onClick={() => {
    //     props.history.push(`/course/${course.maKhoaHoc}`);
    //   }}
    //   className={classes.root}
    // >
    //   <CardActionArea>
    //     <CardMedia
    //       component="img"
    //       alt="Contemplative Reptile"
    //       height="140"
    //       image={course.hinhAnh}
    //       title="Contemplative Reptile"
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="h2">
    //         {course.tenKhoaHoc}
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    //   <div className="p-3">
    //     <div className="card-name ">
    //       <h5>Angular - The Complete Guide (2020)</h5>
    //       <span>Maximilian Schwarzmüller</span>
    //     </div>
    //     <div className="card-rating">
    //       <span>4.6 </span>
    //       <span>
    //         <i className="fa fa-star"></i>
    //         <i className="fa fa-star"></i>
    //         <i className="fa fa-star"></i>
    //         <i className="fa fa-star"></i>
    //         <i className="fa fa-star"></i>
    //       </span>
    //       <span> (131,482)</span>
    //     </div>
    //     <div className="card-price">
    //       <span style={{ fontWeight: "bold" }}>$11,99 </span>
    //       <span>$129,99</span>
    //     </div>
    //   </div>
    //    <CardActions>
    //     <button className="btn btn-warning" size="small" color="warning">
    //       Bestseller
    //     </button>
    //     <button className="btn btn-light" size="small" color="warning">
    //       Detail
    //     </button>
    //   </CardActions>

    // </Card>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={course.biDanh}
          height="140"
          image={course.hinhAnh}
          title={course.tenKhoaHoc}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {course.tenKhoaHoc}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {course.nguoiTao.hoTen}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Chi Tiết
        </Button>
      </CardActions>
    </Card>
  );
}

export default withRouter(CourseItems);

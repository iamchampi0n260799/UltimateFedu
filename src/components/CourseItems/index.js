import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withRouter } from "react-router";
import "./index.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

function CourseItems(props) {
  const classes = useStyles();
  const { course } = props;

  return (
    <Card
      className={classes.root}
      onClick={() => {
        props.history.push(`/course/${course.maKhoaHoc}`);
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          alt={course.biDanh}
          height="140"
          image={course.hinhAnh}
          title={course.tenKhoaHoc}
        />
        <CardContent className="card__content">
          <Typography gutterBottom variant="h6" component="h4">
            {course.tenKhoaHoc}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {course.nguoiTao.hoTen ? course.nguoiTao.hoTen : "elearning"}
          </Typography>
        </CardContent>
        <CardContent className="card__content">
          <div className="card-rating">
            <span>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </span>
            <span> ({course.luotXem})</span>
          </div>
          <div className="card-price">
            <span style={{ fontWeight: "bold" }}>$11,99 </span>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default withRouter(CourseItems);

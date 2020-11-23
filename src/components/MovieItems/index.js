import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router'
import "./index.css"
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    boxShadow: "none"
  },
});

function MovieItems(props) {
  const classes = useStyles();
  const { hinhAnh, tenKhoaHoc , moTa , maKhoaHoc} = props.course;
  // onClick={() => {props.history.push(`/course/${maKhoaHoc}`)}}
  return (
        <Card onClick={() => {props.history.push(`/course/${maKhoaHoc}`)}} className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              
              image={hinhAnh}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {tenKhoaHoc}
              </Typography>
            </CardContent>
          </CardActionArea>
          <div class="p-3">
                    <div class="card-name ">
                        <h5>Angular - The Complete Guide (2020)</h5>
                        <span>Maximilian Schwarzmüller</span>
                    </div>
                    <div class="card-rating">
                        <span>4.6 </span>
                        <span>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </span>
                        <span> (131,482)</span>
                    </div>
                    <div class="card-price">
                        <span style={{fontWeight: "bold"}}>$11,99   </span>
                        <span>$129,99</span>
                    </div>
                </div>
          <CardActions>
            <button className="btn btn-warning" size="small" color="warning">
              Bestseller
            </button>
            <button className="btn btn-light" size="small" color="warning" >
              Detail
            </button>
          </CardActions>
        </Card>
      
  );
}
export default withRouter(MovieItems);
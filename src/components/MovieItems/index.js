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
  return (
    <Grid className="modify" item xs={3} style={{marginBottom: "20px"}}>
      <Paper className={classes.paper}>
        <Card className={classes.root}>
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
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Add to card
            </Button>
            <Button size="small" color="primary">
              <a onClick={() => {props.history.push(`/course/${maKhoaHoc}`)}}>Detail</a>
              
            </Button>
          </CardActions>
        </Card>
      </Paper>
    </Grid>
  );
}
export default withRouter(MovieItems);
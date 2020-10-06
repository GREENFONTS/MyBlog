import React, { Component } from "react";
import "../App.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Loading } from "./Loading";
import { baseUrl } from "../redux/baseUrl";
import  Container  from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Slider from "./slider";
import { makeStyles } from "@material-ui/core/styles";
// import { FadeTransform } from "react-animation-components";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { Posts } from "./slider";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  PostCard: {
    marginLeft: 10,
  },
  paper: {
    zIndex: 1,
    position: "relative",
    backgroundColor: "skyblue",
    padding: 5,
    fontSize: 15,
    width: "100%",
    borderRadius: 0
  },
  Pagination: {
    marginTop: "40px",
    marginLeft: "30px",
  },
  leftContainer: {
    marginTop: "20px",
    marginLeft: "10px",
    marginRight: 10
  },
  RightContainer: {
    marginTop: "20px",
    marginRight: 0,
    padding:0
  },
  PostContainer: {
    marginTop: 50,
    width: "100%",
  },
  RenderCard: {
    height: "27vh",
    padding: 0,
    margin: 0
  },
});

let paginations = [1, 2, 3, 4, 5];

function RenderCard({ post, isLoading, errMess }) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  if (isLoading) {
    return <Loading />;
  } else if (errMess) {
    return <h4>{errMess}</h4>;
  } else
    return (
      <div>
        {/* <FadeTransform */}
        {/* //   in
        //   transformProps={{
        //     exitTransform: "scale(0.5) translateY(-50%)",
        //   }}
        // > */}

        <Card
          onMouseEnter={() => setChecked(true)}
          onMouseLeave={() => setChecked(false)}
          className={classes.RenderCard}
        >
          <CardActionArea>
            {/* <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              /> */}
            <CardContent className="p-0 m-0">
              {/* <CardTitle>{item.name}</CardTitle>
                {item.designation ? (
                  <CardSubtitle>{item.designation}</CardSubtitle>
                ) : null}
                <CardText>{item.description}</CardText>
                <h1>hello</h1> */}
              <Typography gutterBottom variant="h5" component="h2">
                {post.name}
              </Typography>
              <Slide direction="up" in={checked} mountOnEnter unmountOnExit >
                <Paper elevation={4} className={classes.paper}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="h4"
                  >
                    {post.description}
                  </Typography>
                </Paper>
              </Slide>
            </CardContent>
          </CardActionArea>

          <CardActions>
            <Link>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </Link>
          </CardActions>
        </Card>

        {/* </FadeTransform> */}
      </div>
    );
}

const Home = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container spacing={5}>
        <Grid item xs={11} md={8} className={classes.leftContainer}>
          <Grid container className="slider">
            <Slider />
          </Grid>
          <Grid container spacing={2} className={classes.PostCard}>
            <Grid item xs={11} md={4} className={classes.PostContainer}>
              <RenderCard
                post={Posts[0]}
                // item={this.props.dish}
                // isLoading={this.props.dishesLoading}
                // errMess={this.props.dishesErrMess}
              />
            </Grid>
            <Grid item xs={11} md={4} className={classes.PostContainer}>
              <RenderCard
                className={classes.RenderCard}
                post={Posts[1]}
                // item={this.props.promotion}
                // isLoading={this.props.promoLoading}
                // errMess={this.props.promoErrMess}
              />
            </Grid>
            <Grid item xs={11} md={4} className={classes.PostContainer}>
              <RenderCard
                className={classes.RenderCard}
                post={Posts[2]}
                // item={this.props.leader}
                // isLoading={this.props.leaderLoading}
                // errMess={this.props.leaderErrMess}
              />
            </Grid>
          </Grid>

          <Grid container spacing={1} className={classes.Pagination}>
            <Grid item xs={3} md={3}>
              <button id="Prev" className="btn">
                {"<  "}PREV
              </button>
            </Grid>
            <Grid item xs={0} md={1}></Grid>
            <Grid item xs={5} md={5}>
              {paginations.map((num) => {
                return (
                  <button className="btn btn-light" id="pagbutton">
                    {num}
                  </button>
                );
              })}
            </Grid>
            <Grid item xs={3} md={3}>
              <button id="Prev" className="btn">
                NEXT{" >"}
              </button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={11} md={3}>
          <div className={classes.RightContainer}>
            <h3>Recent Posts</h3>
            <Divider />

            {Posts.map((post) => {
              return (
                <div className="pt-2 pb-2">
                  <h4>{post.name}</h4>
                  <Divider />
                </div>
              );
            })}
          </div>
          <div className={classes.RightContainer}>
            <h3>Categories</h3>
            <Divider />
            <h4>Education</h4>
            <Divider />
            <h4>Technology</h4>
            <Divider />
            <h4>Motivational</h4>
            <Divider />
            <h4>Uncategorized</h4>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Home;

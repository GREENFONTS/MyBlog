import React from "react";
import "../App.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
import { Loading } from "./Loading";
// import { baseUrl } from "../redux/baseUrl";
import Grid from "@material-ui/core/Grid";
import Slider from "./slider";
import {  makeStyles } from "@material-ui/core/styles";
import { FadeTransform } from "react-animation-components";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
// import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";
// import Paper from "@material-ui/core/Paper";
import { useSnackbar } from "notistack";
import { Posts } from "./slider";
import RightBar from "./RightBar";
import { useState, useEffect } from 'react';


const useStyles = makeStyles((theme) => ({
  MainContainer: {
    width: "calc(100% + 40px)",
    margin: 0,
    padding: 0,
  },
  PostCard: {
    marginLeft: 10,
    display: "inline-block",
  },

  Pagination: {
    marginTop: "10px",
    marginLeft: "30px",
  },
  leftContainer: {
    marginLeft: "5px",
  }
}));


export function RenderCard(props, {Loading}) {
  const classes = useStyles();
  if (Loading) {
    return <Loading />;
  } else if (props.errMess) {
    return <h4>{props.errMess}</h4>;
  } else
    return (
      <div className="row row-content spacing-2 p-0 m-0">
        <FadeTransform in
          transformProps={{
            exitTransform: "scale(0.5) translateY(-50%)",
          }}
        >
        {props.posts.map((post) => {
          return (
            <Card
              className="col-12 col-sm-6 col-md-4 box d-inline-block"
              // id="renderCard"
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
                  
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="h4"
                      >
                        {post.description}
                      </Typography>
                 
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
          );
    })}
        

         </FadeTransform>
      </div>
    );
}


const Home = (props) => {
   const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [pagesPerRow] = useState(6);
  const [Loading, setLoading] = useState(false);
  const [succMess, setSuccMess] = useState(props.successMess)

   if (succMess != null) {
     enqueueSnackbar(succMess, "success")
     setSuccMess(null)
   }

  useEffect(() => {
    const fetchPosts = () => {
      setLoading(true)
      setTimeout(() =>  1000)
      setPosts(Posts)
      setLoading(false)
    }
    fetchPosts()
  }, [])

  const lastPost = currentPage * pagesPerRow;
  const firstPost = lastPost - pagesPerRow;
  const currentPosts = posts.slice(firstPost, lastPost)
  let paginations = []
  for (let i = 1; i <= Math.ceil(posts.length / pagesPerRow); i++){
    paginations.push(i)
  }

  const PaginationView = () => {
    if (currentPage <= 1) {
      return (
        <React.Fragment>
          <Grid item xs={3} md={3}>
           
          </Grid>
          <Grid item xs={5} md={5}>
            {paginations.map((num) => {
              return (
                <li className="page-item list-unstyled d-inline-block">
                  <button
                    className="btn btn-light"
                    id="pagbutton"
                    key={num}
                    onClick={() => setCurrentPage(num)}
                  >
                    {num}
                  </button>
                </li>
              );
            })}
          </Grid>
          <Grid item xs={3} md={3}>
            <button id="Prev" className="btn" onClick={() => setCurrentPage(currentPage + 1)}>
              NEXT{" >"}
            </button>
          </Grid>
        </React.Fragment>
      );
    }
    if (currentPage === paginations.length) {
      return (
        <React.Fragment>
          <Grid item xs={3} md={3}>
            <button
              id="Prev"
              className="btn"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              {"<  "}PREV
            </button>
          </Grid>
          <Grid item xs={5} md={5}>
            {paginations.map((num) => {
              return (
                <li className="page-item list-unstyled d-inline-block">
                  <button
                    className="btn btn-light"
                    id="pagbutton"
                    onClick={() => setCurrentPage(num)}
                  >
                    {num}
                  </button>
                </li>
              );
            })}
          </Grid>
          <Grid item xs={3} md={3}></Grid>
        </React.Fragment>
      );
    }
    else {
      return (
        <React.Fragment>
          <Grid item xs={3} md={3}>
            <button
              id="Prev"
              className="btn"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              {"<  "}PREV
            </button>
          </Grid>
          <Grid item xs={5} md={5}>
            {paginations.map((num) => {
              return (
                <li className="page-item list-unstyled d-inline-block">
                  <button
                    className="btn btn-light"
                    id="pagbutton"
                    onClick={() => setCurrentPage(num)}
                  >
                    {num}
                  </button>
                </li>
              );
            })}
          </Grid>
          <Grid item xs={3} md={3}>
            <button
              id="Prev"
              className="btn"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              NEXT{" >"}
            </button>
          </Grid>
        </React.Fragment>
      );
    }
  }

  return (
    <React.Fragment>
      <Grid container spacing={4} className={classes.MainContainer}>
        <Grid item xs={11} md={8} className={classes.leftContainer}>
          <Slider />
          {/* <Grid spacing={2} className={classes.PostCard}> */}
            <RenderCard
              posts={currentPosts}
              isLoading={Loading}
              errMess={props.errMess}
            />
      

          {/* </Grid> */}

          <Grid container spacing={1} className={classes.Pagination}>
            {PaginationView()}
          </Grid>
        </Grid>

        <Grid item xs={11} md={3} className={classes.GridRight}>
          <RightBar mailForm={props.mailForm} successMess={props.successMess} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Home;

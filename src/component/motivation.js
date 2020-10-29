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
import { makeStyles } from "@material-ui/core/styles";
import { FadeTransform } from "react-animation-components";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { Posts } from "./slider";
import RightBar from "./RightBar";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const useStyles = makeStyles((theme) => ({
  MainContainer: {
    width: "calc(100% + 40px)",
    margin: 0,
    padding: 0,
  },
  Pagination: {
    marginTop: "40px",
    marginLeft: "30px",
  },
  leftContainer: {
    marginTop: "10px",
    marginLeft: "5px",
  },

  BreadCrumbText: {
    fontWeight: 700,
    fontSize:25,
    textDecoration: "none",
  },
  RenderCard: {
    height: "27vh",
    padding: 0,
    margin: 0,
  },
}));


export function RenderCard({ post, isLoading, errMess }) {
  const classes = useStyles();
  if (isLoading) {
    return <Loading />;
  } else if (errMess) {
    return <h4>{errMess}</h4>;
  } else
    return (
      <div>
        <FadeTransform
           in
          transformProps={{
            exitTransform: "scale(0.5) translateY(-50%)",
          }}
        > 

        <Card className={classes.RenderCard}>
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

        </FadeTransform>
      </div>
    );
}

const Motivation = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container spacing={4} className={classes.MainContainer}>
        <div className="mt-3 mb-1 container">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Link color="inherit" href="/" className={classes.BreadCrumbText}>
              Home
            </Link>
            <Link color="inherit" href="/" className={classes.BreadCrumbText}>
              Category
            </Link>
            <Link
              active
              color="inherit"
              href="/category/motivation"
              className={classes.BreadCrumbText}
            >
              Motivation
            </Link>
          </Breadcrumbs>
        </div>
        <Grid item xs={11} md={8} className={classes.leftContainer}>
          <Grid container spacing={2}>
            <Grid item xs={11} sm={6} md={4}>
              <RenderCard
                post={Posts[0]}
                // item={this.props.dish}
                // isLoading={this.props.dishesLoading}
                // errMess={this.props.dishesErrMess}
              />
            </Grid>
            <Grid item xs={11} sm={6} md={4}>
              <RenderCard
                className={classes.RenderCard}
                post={Posts[1]}
                // item={this.props.promotion}
                // isLoading={this.props.promoLoading}
                // errMess={this.props.promoErrMess}
              />
            </Grid>
            <Grid item xs={11} sm={6} md={4}>
              <RenderCard
                className={classes.RenderCard}
                post={Posts[2]}
                // item={this.props.leader}
                // isLoading={this.props.leaderLoading}
                // errMess={this.props.leaderErrMess}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={11} md={3} className={classes.GridRight}>
          <RightBar />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Motivation;

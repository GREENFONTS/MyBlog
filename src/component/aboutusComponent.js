import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea"; 
import CardContent from "@material-ui/core/CardContent";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import RightBar from "./RightBar";
import Link from "@material-ui/core/Link";
import { FadeTransform } from "react-animation-components";

const useStyles = makeStyles({
  MainContainer: {
    width: "calc(100% + 30px)",
    margin: 0,
    paddingLeft: "20px",
  },
  leftContainer: {
    marginTop: "20px",
    marginLeft: "5px",
  },
  BreadCrumbText: {
    fontWeight: 700,
    fontSize: 15,
    textDecoration: "none",
  },
  Facts: {
    padding: "5px",
    backgroundColor: "#1bc523",
    color: "white",
  },
});

const About = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.MainContainer}>
      <div className="mt-3 mb-3 container">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link color="inherit" href="/" className={classes.BreadCrumbText}>
            HOME
          </Link>
          <Link
            color="inherit"
            href="/aboutus"
            className={classes.BreadCrumbText}
          >
            About
          </Link>
        </Breadcrumbs>
      </div>

      <Grid container spacing={4}>
        <div className="container pr-5 mt-3 mb-1">
          <h3>About Us</h3>
          <Divider />
        </div>
        <Grid item spacing={5} xs={11} md={8}>
          <Grid container>
            <Grid item xs={11} sm={5} md={6} >
              <img
                alt="Godwill Onyewuchi"
                src="/assets/images/Mypic.jpg"
                // className="mr-2"
                width={200}
                height={200}
              />
            </Grid>
            <Grid item xs={11} sm={7} md={6} className="mt-2">
              <Card>
                <CardActionArea>
                  <Typography className={classes.Facts}>
                    Facts At a Glance
                  </Typography>

                  <CardContent>
                    <dl className="row p-1">
                      <dt className="col-4">Name</dt>
                      <dd className="col-8">Godwill Onyewuchi</dd>
                      <dt className="col-4">Occupation</dt>
                      <dd className="col-8">Student, Tech. Enthusiast</dd>
                      <dt className="col-4">Nationality</dt>
                      <dd className="col-8">Nigerian</dd>
                      <dt className="col-4">Interests</dt>
                      <dd className="col-8">Technology, Music</dd>
                    </dl>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
          <FadeTransform
            in
            transformProps={{
              exitTransform: "scale(0.5) translateX(-50%)",
            }}
          >
            <Grid container className="mt-4">
              <h5 className="mt-2">
                My Name is <strong>Godwill Onyewuchi. </strong>I am a full stack
                web developer with the passion and thrill for creating
                innovative apps and working on projects that improves life and
                makes things easier. I am a tech enthusiast who loves
                researching, learning and creating new things.
              </h5>
              <h5 className="mt-2">
                GreenFonts Media resources brings to you information and updates
                about the world of Technology, education and the lastest
                developments in the coding world, with easy to understand
                writeups. In addition, self improvement is key to growth and our
                motivational posts are right for you.
              </h5>
              <h5 className="mt-2">
                The organization traces its humble beginnings to{" "}
                <em>The Publication and Printing world</em> but now brought
                global to bring first class information to the community and
                world as a whole, a successful chain started by our CEO, Mr.
                Godwill Nwankwonta and Mr. Godwill Onyewuchi.
              </h5>
            </Grid>
          </FadeTransform>

          <Grid container className="mt-4">
            <Card>
              <CardContent className="bg-faded">
                <blockquote className="blockquote">
                  <p className="mb-0">
                    You Think it, {"    "}We Create it, {"     "} We Develop it
                  </p>
                  <footer className="blockquote-footer">
                    Godwill Nwankwonta,
                    <cite title="Source Title">
                      {"   "} GreenFontsMedia, 2019
                    </cite>
                  </footer>
                </blockquote>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={11} md={3}>
          <RightBar />
        </Grid>
      </Grid>
    </div>
  );
};

export default About;

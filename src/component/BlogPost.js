import React from "react";
// import { baseUrl } from "../redux/baseUrl";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import RightBar from "./RightBar";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Posts } from "./slider";
import CommentIcon from "@material-ui/icons/Comment";
import ReactDisqusComments from "react-disqus-comments";
import CardActions from "@material-ui/core/CardActions";
import { FadeTransform } from "react-animation-components";

const useStyles = makeStyles((theme) => ({
  MainContainer: {
    width: "calc(100% + 40px)",
    margin: 0,
    paddingLeft: "20px",
  },
  leftContainer: {
    marginTop: "10px",
    marginLeft: "5px",
  },
  BreadCrumbText: {
    fontWeight: 700,
    fontSize: 20,
    textDecoration: "none",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "white",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  Disqus: {
    width: "400px",
  },
  PostCard: {
    marginLeft: 10,
    display: "inline-block",
  },
 
}));

function RenderCardList(props, { Loading}) {
  const classes = useStyles();
  let posts = props.posts
  console.log(posts)
  if (Loading) {
    return <Loading />;
  } else if (props.errMess) {
    return <h4>{props.errMess}</h4>;
  } else
    return (
      <div className="row row-content d-block CardList">
        <FadeTransform
          in
          transformProps={{
            exitTransform: "scale(0.5) translateY(-50%)",
          }}
        >
          {posts.map((post) => {
            return (
              <Card className="col-12 col-sm-6 col-md-4 d-inline-block">
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

function RenderCard(props, { Loading }) {
  const classes = useStyles();
  let post = props.post;
  console.log(post);
  if (Loading) {
    return <Loading />;
  } else if (props.errMess) {
    return <h4>{props.errMess}</h4>;
  } else
    return (
      <div className="mt-3">
        <FadeTransform
         in
          transformProps={{
            exitTransform: "scale(0.5) translateY(-50%)",
          }}
        >
    
            <Card  >
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

const Blog = () => {
  const classes = useStyles();
   const currentPosts = Posts.slice(0, 3)
function handleNewComment(comment) {
    console.log(comment.text);
  }
     return (
       <div>
         <Grid container spacing={4} className={classes.MainContainer}>
           <Grid item xs={11} md={8} className={classes.LeftContainer}>
             <div className="mt-3 mb-3">
               <Breadcrumbs
                 separator={<NavigateNextIcon fontSize="small" />}
                 aria-label="breadcrumb"
               >
                 <Link
                   color="inherit"
                   href="/"
                   className={classes.BreadCrumbText}
                 >
                   HOME
                 </Link>
                 <Link
                   active
                   color="inherit"
                   href="/contactus"
                   className={classes.BreadCrumbText}
                 >
                   PROGRAMMING
                 </Link>
                 <Link
                   active
                   color="inherit"
                   href="/contactus"
                   className={classes.BreadCrumbText}
                 >
                   Post 1
                 </Link>
               </Breadcrumbs>
             </div>
             <Grid className="pr-5 mt-4 mb-2">
               <Button variant="contained" color="white" id="blogCategory">
                 PROGRAMMING
               </Button>
             </Grid>

             <Grid>
               <RenderCard post={Posts[1]} />
             </Grid>

             <Grid>
               <div className="mb-2 mt-4 d-block">
                 <Button variant="contained" color="primary" id="blogCategory">
                   {"<  "} PREV ARTICLE
                 </Button>
               </div>
             </Grid>
             <Grid>
               <div className="mt-4 ">
                 <h3>Related Articles</h3>
                 <Divider />
               </div>
             </Grid>
            
               <RenderCardList posts={currentPosts} />
            
             <Grid container className="mt-1">
               <Card>
                 <CardActionArea>
                   <CardContent>
                     <Typography gutterBottom variant="h5" component="h2">
                       About the Author
                     </Typography>
                     <Typography
                       variant="body2"
                       color="textSecondary"
                       component="h3"
                     >
                       I am Godwill Onyewuchi, a MERN stack web developer, a
                       Tech Ethusiast and a Classical Muscician.
                     </Typography>
                   </CardContent>
                 </CardActionArea>
               </Card>
             </Grid>
             <Grid container className="mt-2 mb-2">
               <div className="container">
                 <Button variant="contained" color="primary">
                   <CommentIcon className="mr-2" />
                   Drop your Comment
                 </Button>
               </div>
             </Grid>
             <Grid>
               <ReactDisqusComments
                 shortname="greenfonts-1"
                 identifier="1405012"
                 title="Greenfonts"
                 url="https://www.GreenFonts.com"
                 onNewComment={handleNewComment}
                 className={classes.Disqus}
               />
             </Grid>
           </Grid>
           <Grid item xs={11} md={3}>
             <RightBar />
           </Grid>
         </Grid>
       </div>
     );
};

export default Blog;

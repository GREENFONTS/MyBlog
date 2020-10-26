import React from "react";
import "../App.css";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Posts } from "./slider";
import { FormGroup } from "@material-ui/core";
import { Stagger, Fade } from "react-animation-components";

const useStyles = makeStyles((theme) => ({
  RightContainer: {
    marginTop: "10px",
    marginRight: 0,
    padding: 0,
    marginBottom: theme.spacing(4),
  },
  GridRight: {
    padding: 3,
    margin: 2,
  },
  MailBox: {
    backgroundColor: "skyblue",
    height: "52vh",
    textAlign: "center",
    paddingTop: theme.spacing(2),
    padding: 1,
  },
  TextField: {
    marginTop: 1,
    height: "8.5vh",
  },
  // Checkbox: {
  //   textAlign: "left",
  //   fontSize: "0.1rem",
  // },
  search: {
    position: "relative",
    border: "0.5px solid rgb(230, 224, 230)",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginBottom: theme.spacing(3),
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));


  
export const state = {
  Name: "",
  Email: "",
  check: false,
};

const RightBar = (props) => {
  const classes = useStyles();
  

  return (
    <React.Fragment>
      <div className={classes.RightContainer}>
        <div className="mb-4">
          <h4>Search</h4>
          <Divider />
        </div>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>

        <div className="mb-4">
          <h4>Recent Posts</h4>
          <Divider />

          <Stagger in>
            {Posts.map((post) => {
              return (
                <Fade in>
                  <div className="pt-2 pb-2">
                    <h6>{post.name}</h6>
                    <Divider />
                  </div>
                </Fade>
              );
            })}
          </Stagger>
        </div>
      </div>
      <div className={classes.RightContainer}>
        <h4 className="mb-3">Categories</h4>
        <Divider />
        <Link href="/category/Education">
          <h6 className="pt-2 pb-2" id="RightBarlinks">
            Education
          </h6>
        </Link>
        <Divider />
        <Link href="/category/Programming">
          <h6 className="pt-2 pb-2" id="RightBarlinks">
            Programming
          </h6>
        </Link>
        <Divider />
        <Link href="/category/Motivational">
          <h6 className="pt-2 pb-2" id="RightBarlinks">
            Motivational
          </h6>
        </Link>
        <Divider />
        <Link>
          <h6 className="pt-2 pb-2" id="RightBarlinks">
            Uncategorized
          </h6>
        </Link>
        <Divider />
      </div>

      <div className={classes.MailBox}>
        <Container>
          <h4>MAILING BOX</h4>
          <h6 id="MailText">
            Follow us through our mailing list and get awesome updates directly
            to your mailing box.
          </h6>
          <form
            className={classes.root}
            noValidate
            autoComplete="on"
            onSubmit={(e) => {
              e.preventDefault();
              props.mailForm(state);
            }}
          >
            <FormGroup>
              <TextField
                label="Enter your Name"
                variant="filled"
                className={classes.TextField}
                name="Name"
                onChange={(e) => (state.Name = e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <TextField
                label="Enter your Email"
                variant="filled"
                className={classes.TextField}
                name="Email"
                onChange={(e) => (state.Email = e.target.value)}
              />
            </FormGroup>

            <FormControlLabel
              id="CheckBox"
              control={
                <Checkbox
                  checked={state.checkedA}
                  onChange={(e) => (state.check = e.target.checked)}
                  name="check"
                  color="primary"
                />
              }
              label="I consent to subscribe"
            />
            <Button variant="contained" color="primary" type="submit">
              SIGN UP NOW
            </Button>
          </form>
        </Container>
      </div>

      <div className="mt-4">
        <div className="mb-3">
          <h4>
            <span>
              <img
                alt="GreenLeaf"
                src="/assets/images/green logo.jpg"
                className="mr-2"
                width={20}
                height={20}
              />
            </span>
            GreenFontsMedia
          </h4>
          <Divider />
        </div>
        <Stagger in>
          {Posts.map((post) => {
            return (
              <Fade in>
                <div className="pt-2 pb-2">
                  <h6>{post.name}</h6>
                  <Divider />
                </div>
              </Fade>
            );
          })}
        </Stagger>
      </div>
    </React.Fragment>
  );
};;

export default RightBar;

import React from "react";
import Button from "@material-ui/core/Button";
import { Control, Errors, Form } from "react-redux-form";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import RightBar from "./RightBar";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { FadeTransform } from "react-animation-components";

const useStyles = makeStyles({
  MainContainer: {
    width: "calc(100% + 40px)",
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
    padding: "7px",
    backgroundColor: "#1bc523",
    color: "white",
    fontWeight: 700
  },
  Label: {
    fontSize: 20
  }
});

const state = {
  firstname: "",
  lastname: "",
  telnum: "",
  email: "",
  agree: false,
  contactType: "Tel.",
  message: "",
  touched: {
    firstname: "",
    lastname: "",
    telnum: "",
    email: "",
  },
};

function handleSubmit(values) {
  console.log("Current State is: " + JSON.stringify(values));
  alert("Current State is: " + JSON.stringify(values));
  // this.props.resetFeedbackForm();
  // this.props.postFeedBack(
  //   values.firstname,
  //   values.lastname,
  //   values.telnum,
  //   values.email,
  //   values.agree,
  //   values.contactType,
  //   values.message
  // );
}

const Contact = () => {
  const classes = useStyles();
 
  const required = (val) => val && val.length;
  const maxLength = (len) => (val) => !val || val.length <= len;
  const minLength = (len) => (val) => val && val.length >= len;
  const isNumber = (val) => !isNaN(Number(val));
  const validEmail = (val) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
  return (
    <div>
      <div className="mt-3 mb-3 container">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link color="inherit" href="/" className={classes.BreadCrumbText}>
            HOME
          </Link>
          <Link
            active
            color="inherit"
            href="/contactus"
            className={classes.BreadCrumbText}
          >
            Contact
          </Link>
        </Breadcrumbs>
      </div>
      <Grid container spacing={4} className={classes.MainContainer}>
        <div className="container pr-5 mt-3 mb-2">
          <h3>Contact Us</h3>
          <Divider />
        </div>
        <Grid item spacing={4} xs={11} md={8}>
          <FadeTransform
            in
            transformProps={{
              exitTransform: "scale(0.8) translateY(-100%)",
            }}
          >
            <Grid container className="mb-4">
              <h3>Location Information</h3>
              <Card>
                <CardActionArea>
                  <Typography className={classes.Facts}>CONTACT</Typography>

                  <CardContent>
                    <dl className="row p-1">
                      <dt className="col-3">Our Address</dt>
                      <dd className="col-9">
                        St, Peter's Church Olokoro, Umuahia, Abia State
                      </dd>
                      <dt className="col-3">Country</dt>
                      <dd className="col-9">NIGERIA</dd>
                      <dt className="col-3">Phone</dt>
                      <dd className="col-9">+234 8132 30908</dd>
                      <dt className="col-3">Mobile</dt>
                      <dd className="col-9">+234 8027 037290</dd>
                      <dt className="col-3">Email</dt>
                      <dd className="col-9">godwillonyewuchii@gmail.com</dd>
                    </dl>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Container className="btn-group mb-3" role="group">
                    <Link
                      role="button"
                      className="btn btn-primary"
                      href="tel:+2348132030908"
                    >
                      <i className="fa fa-phone"></i> Call
                    </Link>
                    <Link role="button" className="btn btn-info" href="/">
                      <i className="fa fa-skype"></i> Skype
                    </Link>
                    <Link
                      role="button"
                      className="btn btn-success"
                      href="https"
                    >
                      <i className="fa fa-envelope-o"></i> Email
                    </Link>
                  </Container>
                </CardActions>
              </Card>
            </Grid>
          </FadeTransform>
          <Grid>
            <div>
              <h3>Send us your Feedback</h3>
              <Divider />
            </div>
          </Grid>
          <Grid />
          <FadeTransform in transformProps=
          {{
            exitTransform: "scale(0.8) translateX(-60%)",
          }}
          >
          <Form
            model="feedback"
            onSubmit={(values) => handleSubmit(values)}
            className="mt-3"
          >
            <Grid container spacing={3}>
              <Grid item xs={11} md={3}>
                <label className={classes.Label} htmlFor=".firstname">
                  FirstName:
                </label>
              </Grid>
              <Grid item xs={11} md={7}>
                <div>
                  <Control.text
                    model=".firstname"
                    id="firstname"
                    name="firstname"
                    className="form-control"
                    placeholder="First Name"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".firstname"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "Must be greater than 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </div>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs={11} md={3}>
                <label className={classes.Label} htmlFor=".lastname">
                  LastName:
                </label>
              </Grid>
              <Grid item xs={11} md={7}>
                <div>
                  <Control.text
                    model=".lastname"
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".lastname"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "Must be greater than 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </div>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs={11} md={3}>
                <label className={classes.Label} htmlFor=".telnum">
                  Contact Tel.
                </label>
              </Grid>
              <Grid item xs={11} md={7}>
                <div>
                  <Control.text
                    model=".telnum"
                    id="telnum"
                    name="telnum"
                    placeholder="Tel. Number"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                      isNumber,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".telnum"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "Must be greater than 2 numbers",
                      maxLength: "Must be 15 numbers or less",
                      isNumber: "Must be a number",
                    }}
                  />
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={11} md={3}>
                <label className={classes.Label} htmlFor=".email">
                  Email:
                </label>
              </Grid>
              <Grid item xs={11} md={7}>
                <div>
                  <Control.text
                    model=".email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    validators={{
                      required,
                      validEmail,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".email"
                    show="touched"
                    messages={{
                      required: "Required",
                      validEmail: "Invalid Email Address",
                    }}
                  />
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={3} className="pt-2 pb-2">
              <Grid xs={11} md={7}>
                <div className="form-check">
                  <label check>
                    <Control.checkbox
                      model=".agree"
                      name="agree"
                      checked={state.agree}
                    />{" "}
                    <strong>May we contact you?</strong>
                  </label>
                </div>
              </Grid>

              <Grid xs={11} md={2}>
                <Control.select
                  model=".contactType"
                  name="contactType"
                  className="form-control"
                >
                  <option>Tel.</option>
                  <option>Email</option>
                </Control.select>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={11} md={3}>
                <label className={classes.Label} htmlFor=".message">
                  Your Feedback:
                </label>
              </Grid>
              <Grid item xs={11} md={7}>
                <div>
                  <Control.textarea
                    model=".message"
                    id="message"
                    name="message"
                    rows="12"
                    className="form-control"
                  />
                </div>
              </Grid>
            </Grid>

            <Grid container spacing={3} className="mt-2">
              <Grid item xs={6} md={6}>
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
            </Form>
            </FadeTransform>
        </Grid>

        <Grid item xs={11} md={3}>
          <RightBar />
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;

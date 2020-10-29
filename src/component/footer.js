import React from "react";
import { Link } from "react-router-dom";
import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  footer: {
    margin: "10px auto",
    padding: "20px 0px 20px 0px",
    backgroundColor: "#3f51b5",
    color: "white",
    bottom: 0,
  },
});

function Footer(props) {
  const classes = useStyles()
  return (
    <Container className={classes.footer}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 offset-1 col-sm-2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home" className="text-light">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/aboutus" className="text-light">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/contactus" className="text-light">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-7 col-sm-6">
            <h5>Our Address</h5>
            <address>
              St, Peter's Church Olokoro
              <br />
              Umuahia, Abia State
              <br />
              NIGERIA
              <br />
              <i className="fa fa-phone fa-lg"></i>: +234 8132 30908
              <br />
              <i className="fa fa-fax fa-lg"></i>: +234 8027 037290
              <br />
            </address>
          </div>
          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center">
              <a
                className="btn btn-social-icon btn-google m-1"
                href="http://google.com/+"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-google-plus"></i>
              </a>
              <a
                className="btn btn-social-icon btn-facebook m-1"
                href="https://web.facebook.com/godwill.onyewuchi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                className="btn btn-social-icon btn-linkedin m-1"
                href="https://www.linkedin.com/in/godwill-onyewuchi-6746621b4/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                className="btn btn-social-icon btn-twitter m-1"
                href="https://twitter.com/GODWILLONYEWUC1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                className="btn btn-social-icon m-1 text-light"
                href="https://www.godwillonyewuchii@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-envelope-o"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto mt-2">
            <p className="text-center">© Copyright 2020 GreenfontsMediaResources</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Footer;

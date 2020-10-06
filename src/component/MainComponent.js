import React, { Component } from "react";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
  withRouter,
} from "react-router-dom";
import Footer from "./footer";
import Header from './header';
import Home from "./HomeComponent";
// import About from "./aboutusComponent";
// import Contact from "./contactComponent";
// import Blog from "./BlogPost";
import { fetchPosts, postFeedback } from "../redux/actionCreators/postActions";
import { connect } from "react-redux";
import { actions } from "react-redux-form";
import "../App.css";
import Container from "@material-ui/core/Container"; 
import { makeStyles } from "@material-ui/core/styles";


class Main extends Component {

  componentDidMount() {
    this.props.fetchPosts()
  }
  render() {
    return (
      <Router>
        <div className="container" id="App">
          <Header />
          <Switch>

            <Route path="/" exact component={Home} />
            {/* <Route path="/aboutus" exact component={About} />
            <Route
              path="/contactus"
              exact
              component={() => (
                <Contact
                  resetFeedbackForm={this.props.resetFeedbackForm}
                  postFeedBack={this.props.postFeedBack}
                />
              )}
            />
            <Route
              path="/blog/:blogid"
              exact
              component={() => <Blog posts={this.props.posts} />}
            /> */}
            <Redirect path="/" />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => {
    dispatch(fetchPosts());
  },
  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  },
  postFeedBack: (
    firstname,
    lastname,
    telnum,
    email,
    agree,
    contactType,
    message
  ) =>
    dispatch(
      postFeedback(
        firstname,
        lastname,
        telnum,
        email,
        agree,
        contactType,
        message
      )
    ),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
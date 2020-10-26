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
import About from "./aboutusComponent";
import Contact from "./contactComponent";
import Blog from "./BlogPost";
import Motivation from "./motivation";
import Education from "./Education";
import Programming from "./Programming";
import { fetchPosts, postFeedback, mailForm } from "../redux/actionCreators/postActions";
import { connect } from "react-redux";
import { actions } from "react-redux-form";
import "../index.css";
import { state } from './RightBar';
import { SnackbarProvider } from "notistack";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Main extends Component {

  componentDidMount() {
    // this.props.fetchPosts()
  }
  render() {
    return (
      <Router>
        <div className="container" id="App">
          <Header />
          <TransitionGroup>
            <CSSTransition
              key={this.props.location.key}
              classNames="page"
              timeout={300}
            >
              <Switch location={this.props.location}>
                <Route
                  path="/"
                  exact
                  component={() => (
                    <SnackbarProvider maxSnack={1}>
                      <Home
                        mailForm={this.props.mailForm}
                        sendMail={this.props.sendMail}
                        successMess={this.props.posts.errMess}
                      />
                    </SnackbarProvider>
                  )}
                />

                <Route path="/aboutus" exact component={About} />
                <Route
                  path="/category/motivation"
                  exact
                  component={Motivation}
                />
                <Route path="/category/Education" exact component={Education} />
                <Route
                  path="/category/Programming"
                  exact
                  component={Programming}
                />
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
                />
                <Redirect path="/" />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
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
  mailForm: () => {
    dispatch(mailForm(state));
  },
  
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
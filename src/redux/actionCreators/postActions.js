import { FECTH_POSTS, POSTS_FAILED, POSTS_LOADING, POST_FEEDBACK } from "../actionTypes";
import {baseUrl} from '../baseUrl';

export const fetchPosts = () => (dispatch) => {
  dispatch(postsLoading(true));

  return fetch('http://localhost:1337/blog-posts')
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((posts) => dispatch(addPosts(posts)))
    .catch((error) => dispatch(postsFailed(error.message)));
};

export const postsLoading = () => ({
  type: POSTS_LOADING,
});

export const postsFailed = (errmess) => ({
  type: POSTS_FAILED,
  payload: errmess,
});

export const addPosts = (posts) => ({
  type: FECTH_POSTS,
  payload: posts,
});

export const postFeedback = (
  firstname,
  lastname,
  telnum,
  email,
  agree,
  contactType,
  message
) => (dispatch) => {
  const newFeedback = {
    firstname: firstname,
    lastname: lastname,
    telnum: telnum,
    email: email,
    agree: agree,
    contactType: contactType,
    message: message,
  };
  return fetch(baseUrl + "feedBack", {
    method: "POST",
    body: JSON.stringify(newFeedback),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        throw error;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(addFeedback(response)))
    .catch((error) => {
      console.log("post comments", error.message);
      alert("Your comment could not be posted\nError: " + error.message);
    });
};

export const addFeedback = (feedback) => ({
  type: POST_FEEDBACK,
  payload: feedback,
});
import { FECTH_POSTS, POSTS_FAILED, POSTS_LOADING, POST_FEEDBACK, USER_FEEDBACK, MAIL_FEEDBACK} from "../actionTypes";
import {baseUrl} from '../baseUrl';

export const fetchPosts = () => (dispatch) => {
  dispatch(postsLoading(true));

  return fetch(baseUrl + '/blog-posts')
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

export const mailForm = (state) => (dispatch) => {
  const Body = state;
  let Users = [];
  let RegisteredUser = true
  
  fetch("http://localhost:1337/user-details")
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
    .then((users) => {
      Users = users
      if (Users.length !== 0) {
        Users.map((user) => {
          if (user.Email === Body.Email) {
            alert("Your have already subscribed to our Email updates ");
            return {
              message: "Your have already subscribed to our Email updates",
            };
          } else {
            RegisteredUser = false;
          }
          return null
        });
      }
      else {
        RegisteredUser = false;
      }
      if (RegisteredUser === false) {
        console.log(RegisteredUser);
        return fetch("http://localhost:1337/user-details", {
          method: "POST",
          body: JSON.stringify(Body),
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
          .then((response) => {
          
            dispatch(addUserForm(response))
            fetch("http://localhost:1337/email?email=" + encodeURIComponent(state.Email), { method: "GET" })
              .then((response) => {
                dispatch(
                  sendMailUser(
                    "An Email has been sent to You, Thanks for subcribing to our Updates"                  )
                )
              })
              
              .catch((error) => {
                console.log("User details", error.message)
              });
          })
      
      }
    })
    .catch((error) => console.log(error.message));
}

export const addUserForm = (feedback) => ({
  type: USER_FEEDBACK,
  payload: feedback,
  });

export const sendMailUser = (feedback) => ({
  type: MAIL_FEEDBACK,
  payload: feedback,
});
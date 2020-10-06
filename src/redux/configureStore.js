import { createStore, combineReducers, applyMiddleware } from "redux";
import { createForms } from "react-redux-form";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { InitialFeedback } from "./form";
import postReducer from '../redux/reducers/postsReducer';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      posts: postReducer,
      ...createForms({
        feedback: InitialFeedback,
      }),
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};

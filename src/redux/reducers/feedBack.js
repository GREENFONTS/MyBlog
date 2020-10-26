import {POST_FEEDBACK, USER_FEEDBACK, MAIL_FEEDBACK} from "../actionTypes";

export const FeedBack = (state = { feedBack: [] }, action) => {
  switch (action.type) {
    case ActionTypes.POST_FEEDBACK:
      return {
        ...state,
        feedBack: action.payload,
      };
    case ActionTypes.USER_FEEDBACK:
      return {
        ...state,
        feedBack: action.payload,
      };
    default:
      return state;
  }
};

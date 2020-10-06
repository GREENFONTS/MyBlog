import { FECTH_POSTS, POSTS_LOADING, POSTS_FAILED } from '../actionTypes';

const InitialState = {
    posts: [],
    errMess: null,
    isLoading: false
}

export default function (state = InitialState, action) {
    switch (action.type) {
        case FECTH_POSTS:
            return {
                ...state,
                posts: action.payload,
                errMess: null,
                isLoading: false
            }
        case POSTS_FAILED:
            return {
                ...state,
                posts: [],
                errMess: action.payload,
                isLoading: false
            }
        case POSTS_LOADING:
            return {
              ...state,
              posts: [],
              errMess: null,
              isLoading: true,
            };
        default:
            return state
    }
}
import _ from "lodash";
import JSONPlaceholder from "../api/JSONPlaceholder";

//! Лучший кейс, чем использование MEMOIZATION, позволяет обновлять полученные данные:

export const getPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(getPosts());

  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach(userId => dispatch(getUser(userId)))
    .value();
};

//*

export const getPosts = () => async dispatch => {
  const response = await JSONPlaceholder.get("/posts");

  dispatch({ type: "GET_POSTS", payload: response.data });
};

export const getUser = id => async dispatch => {
  const response = await JSONPlaceholder.get(`/users/${id}`);

  dispatch({ type: "GET_USER", payload: response.data });
};

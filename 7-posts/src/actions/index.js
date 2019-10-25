import _ from "lodash";
import JSONPlaceholder from "../api/JSONPlaceholder";

export const getPosts = () => async dispatch => {
  const response = await JSONPlaceholder.get("/posts");

  dispatch({ type: "GET_POSTS", payload: response.data });
};

export const getUser = id => async dispatch => _getUser(id, dispatch);

const _getUser = _.memoize(async (id, dispatch) => {
  const response = await JSONPlaceholder.get(`/users/${id}`);

  dispatch({ type: "GET_USER", payload: response.data });
});

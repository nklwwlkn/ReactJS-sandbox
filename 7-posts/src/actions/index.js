import JSONPlaceholder from "../api/JSONPlaceholder";

export const getPosts = () => async dispatch => {
  const response = await JSONPlaceholder.get("/posts");

  dispatch({ type: "GET_POSTS", payload: response.data });
};

export const getUser = id => async dispatch => {
  const response = await JSONPlaceholder.get(`/users/${id}`);

  dispatch({ type: "GET_USER", payload: response.data });
};

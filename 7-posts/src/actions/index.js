import JSONPlaceholder from "../api/JSONPlaceholder";

export const getPosts = () => async dispatch => {
  const response = await JSONPlaceholder.get("/posts");

  dispatch({ type: "GET_POSTS", payload: response });
};

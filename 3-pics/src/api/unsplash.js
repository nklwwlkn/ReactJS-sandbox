import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 26b0cac0e3ef11bb1ac57e4084c6b9a24c5f3d0038fd82e013e7371ea6fe7970"
  }
});

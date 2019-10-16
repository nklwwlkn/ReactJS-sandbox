import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "./../apis/youtube";

class App extends React.Component {
  state = { videos: [] };
  onSearchSubmit = async term => {
    try {
      console.log(term);
      const response = await youtube.get("/search", {
        params: {
          part: "snippet",
          key: "AIzaSyBuxY8-dxs1RTBIKntRfQUV9X2Jgt8meZY",
          maxResults: 5,
          q: term
        }
      });

      this.setState({ videos: response.data.items });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;

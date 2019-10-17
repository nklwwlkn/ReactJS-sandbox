import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "./../apis/youtube";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

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

      this.setState({
        videos: response.data.items,
        selectedVideo: response.data.items[0]
      });
    } catch (err) {
      console.log(err);
    }
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  componentDidMount() {
    this.onSearchSubmit("buildings");
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="ui eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="ui five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

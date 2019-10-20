import React, { Component } from "react";
import { connect } from "react-redux";

class SongDetail extends Component {
  render() {
    if (!this.props.song) {
      return <h1>Select a song</h1>;
    }

    return (
      <div>
        <h1>{this.props.song.title}</h1>
        <h1>{this.props.song.duration}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    song: state.selectedSong
  };
};

export default connect(mapStateToProps)(SongDetail);

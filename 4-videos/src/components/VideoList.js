import React from "react";
import VideoItem from "./VideoItem";

const VideoList = props => {
  return (
    <VideoItem videos={props.videos} onVideoSelect={props.onVideoSelect} />
  );
};

export default VideoList;

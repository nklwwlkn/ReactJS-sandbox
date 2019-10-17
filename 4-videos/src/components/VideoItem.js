import "./VideoItem.css";
import React from "react";

const VideoItem = ({ videos, onVideoSelect }) => {
  const renderedItems = videos.map(video => {
    console.log(video);
    return (
      <div
        className="video-item item"
        key={video.id.videoId}
        onClick={() => onVideoSelect(video)}
      >
        <img
          className="ui image"
          alt={video.snippet.title}
          src={video.snippet.thumbnails.medium.url}
        />
        <div className="content">
          <div className="header">{video.snippet.title}</div>
        </div>
      </div>
    );
  });

  return <div className="ui relaxed divided list">{renderedItems}</div>;
};

export default VideoItem;

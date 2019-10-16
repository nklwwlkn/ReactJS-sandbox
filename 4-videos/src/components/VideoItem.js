import React from "react";

const VideoItem = ({ videos }) => {
  const renderedItems = videos.map(video => {
    console.log(video);
    return (
      <div key={video.id.videoId}>
        <img src={video.snippet.thumbnails.medium.url} />
        {video.snippet.title}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
};

export default VideoItem;

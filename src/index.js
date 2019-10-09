import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Alex"
        avatar={faker.image.avatar()}
        timeAgo="Today at 5:00"
        commentText="Nice blog post!"
      />
      <CommentDetail
        author="Jane"
        avatar={faker.image.avatar()}
        timeAgo="Today at 3:33"
        commentText="Good one."
      />
      <CommentDetail
        author="Sam"
        avatar={faker.image.avatar()}
        timeAgo="Yesterday at 2:21"
        commentText="Gotcha!"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

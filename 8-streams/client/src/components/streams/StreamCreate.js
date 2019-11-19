import React from "react";
import { connect } from "react-redux";

import StreamForm from "./StreamForm";
import { createStream } from "../../actions";

class StreamCreate extends React.Component {
  render() {
    return (
      <div>
        <h3>Stream Create</h3>
        <StreamForm onSubmit={this.props.createStream}></StreamForm>
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);

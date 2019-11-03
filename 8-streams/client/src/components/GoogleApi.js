import React from "react";
import { connect } from "react-redux";

import { signIn, signOut } from "../actions";

class GoogleApi extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "668445984899-q1ss1p5dojgqnbgtuivu47ga8jphedhb.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth2 = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth2.isSignedIn.get() });
          this.auth2.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth2.signIn();
  };

  onSignOutClick = () => {
    this.auth2.signOut();
  };

  renderSignInButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon"></i>
          Sign out
        </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={this.onSignInClick}>
          <i className="google icon"></i>
          Sign in with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderSignInButton()}</div>;
  }
}

export default connect(
  null,
  {
    signIn,
    signOut
  }
)(GoogleApi);

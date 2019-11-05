import React from "react";
import { connect } from "react-redux";

import { signIn, signOut } from "../actions";

class GoogleApi extends React.Component {
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
          this.onAuthChange(this.auth2.isSignedIn.get());
          this.auth2.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth2.currentUser.get().getId());
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
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
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

const mapStateToProps = state => {
  console.log(state.auth.isSignedIn, state.auth.userId);
  return {
    isSignedIn: state.auth.isSignedIn
  };
};
export default connect(
  mapStateToProps,
  {
    signIn,
    signOut
  }
)(GoogleApi);

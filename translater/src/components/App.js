import React from "react";

import UserForm from "./UserForm";

class App extends React.Component {
  state = { language: "english" };

  onChangeLanguage = language => {
    this.setState({ language });
    console.log(this.state.language);
  };

  render() {
    return (
      <div>
        Select a language:
        <i
          onClick={() => this.onChangeLanguage("english")}
          className="us flag"
        ></i>
        <i
          onClick={() => this.onChangeLanguage("dutch")}
          className="nl flag"
        ></i>
        <UserForm />
      </div>
    );
  }
}

export default App;

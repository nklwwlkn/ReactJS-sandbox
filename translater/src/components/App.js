import React from "react";

import LanguageSelector from "./LanguageSelector";
import UserForm from "./UserForm";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState({ language });
    console.log(this.state.language);
  };

  render() {
    return (
      <div>
        <LanguageSelector onLanguageChange={this.onLanguageChange} />
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <UserForm />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;

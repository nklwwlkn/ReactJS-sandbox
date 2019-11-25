import React from "react";

class LanguageSelector extends React.Component {
  render() {
    return (
      <div>
        Select a language:
        <i
          onClick={() => this.props.onLanguageChange("english")}
          className="us flag"
        ></i>
        <i
          onClick={() => this.props.onLanguageChange("dutch")}
          className="nl flag"
        ></i>
      </div>
    );
  }
}

export default LanguageSelector;

import React from "react";

import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <ColorContext.Consumer>
        {color => (
          <button className={`ui button ${color} `}>
            <LanguageContext.Consumer>
              {value => (value === "english" ? "Submit" : "Voorlaggen")}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default Button;

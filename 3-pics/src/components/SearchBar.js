import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  formOnSubmit = e => {
    e.preventDefault();

    console.log(this.state.term);
  };

  render() {
    return (
      <div className="ui segment" style={{ marginTop: "10px" }}>
        <form className="ui form" onSubmit={this.formOnSubmit}>
          <div className="field">
            <label>Search for:</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./Component/Card-list/Card-list";
import Search from "./Component/Card-list/search/search";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    return this.setState({ searchField: e.target.value });
  };

  render() {
    const monsters2 = this.state.monsters;
    const searchField = this.state.searchField;
    const filteredMonsters = monsters2.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>MONSTERS PAGE</h1>
        <Search placeholder="search monster" handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;

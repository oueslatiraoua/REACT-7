import "./App.css";

import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        Fullname: "Raoua Oueslati",
        Bio: "Web Developer,Civil Engineer,like Programming",
        Profession: "Web Developer",
      },
      count: 0,
      isToggleOn: true,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClicked = this.handleClicked.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleClick() {
    this.setState((state) => ({
      isToggleOn: false,
    }));
  }
  handleClicked() {
    this.setState((state) => ({
      isToggleOn: true,
    }));
  }
  handleToggle() {
    this.setState((state) => ({
      isToggleOn: !this.state.isToggleOn,
    }));
  }

  render() {
    const { count } = this.state;
    return (
      <div style={{ backgroundColor: "PapayaWhip" }}>
        {this.state.isToggleOn ? (
          <div>
            <h1 style={{ color: "blue" }}>{this.state.person.Fullname}</h1>
            <h2 style={{ color: "blue" }}>{this.state.person.Bio}</h2>
            <h3 style={{ color: "blue" }}>{this.state.person.Profession}</h3>
          </div>
        ) : null}
        <button onClick={this.handleClick}>HIDE</button>
        <button onClick={this.handleClicked}>SHOW</button>
        <button onClick={this.handleToggle}>TOGGLE</button>
        <h3 style={{ color: "blue" }}>Count:{count}</h3>
      </div>
    );
  }
  componentDidMount() {
    this.myInterval = setInterval(() => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }, 1000);
  }
}

export default App;

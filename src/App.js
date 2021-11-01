import "./App.css";
import "./style.css";
import React, { Component } from "react";
import image from "./image2.jpg";
import ProgressBar from "react-bootstrap/ProgressBar";

import "bootstrap/dist/css/bootstrap.min.css";

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
      <div className="newapp">
        {this.state.isToggleOn ? (
          <div>
            <div
              style={{
                color: "blue",
                display: "flex",
                paddingLeft: "35%",
                border: "1px solid",
              }}
            >
              {this.state.person.Fullname}
            </div>
            <div style={{ color: "blue", fontSize: "70%" }}>
              {this.state.person.Bio}
            </div>
            <aricle style={{ color: "blue", fontSize: "70%" }}>
              {this.state.person.Profession}
            </aricle>
            <br />
            <img src={image} width="150px" height="50px" />
          </div>
        ) : null}
        <button className="btn" onClick={this.handleClick}>
          HIDE
        </button>
        <button className="btn" onClick={this.handleClicked}>
          SHOW
        </button>
        <button className="btn" onClick={this.handleToggle}>
          TOGGLE
        </button>
        <br />
        <div className="btn">count:{count}</div>
        <ProgressBar animated now={count} />
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

import React, { Component } from "react";
import Card from "./Card";

class Cardbody extends Component {
  render() {
    return (
      <div className="wrapper">
        <Card title="This is called Component" />
        <Card title="This is second Component" />
        <Card title="This is third Component" />
        <div className="card-body">
          <div className="header">
            <h4>This is Header</h4>
          </div>
          <div className="footer">
            <p>This is card body 1</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Cardbody;

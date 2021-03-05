import React, { Component } from "react";

class Card extends Component {
        constructor(props) {
            super(props);
            this.state = {  };
        }
   
  render() {
    return (
      <div className="card-body">
        <div className="header">
          <h4>{this.props.title}</h4>
        </div>
        <div className="footer">
          <p>This is card body 1</p>
        </div>
      </div>
    );
  }
}

export default Card;

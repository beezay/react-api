import React, { Component } from "react";
import Modal from "./Modal";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { post } = this.props;
    console.log("Card=> ", post);
    return (
      <>
        <div className="card-body">
          <div className="header">
            <h4>{post.title}</h4>
          </div>
          <div className="footer">
            <p>{post.author}</p>
          </div>
        </div>
        <Modal />
      </>
    );
  }
}

export default Card;

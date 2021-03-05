import React, { Component } from "react";
import Card from "./Card";
// import Modal from "./Modal";

class Cardbody extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }



  render() {
    const { posts } = this.props;
    console.log("Posts=>", posts);

    return (
        <div className="wrapper">
          {posts.map((post) => {
            return <Card key={post.id} post={post} />;
          })}
          {/* <h1>Hello</h1> */}
        </div>
    );
  }
}

export default Cardbody;

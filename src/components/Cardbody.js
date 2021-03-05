import React, { Component } from "react";
import Card from "./Card";

class Cardbody extends Component {

  constructor(props) {
    super(props)
  
    this.state = ''
  }
  
  
  render() {
    const { posts } = this.props
    console.log('Posts=>',posts)
    return (
      <div className="wrapper">
        {/* <Card title="This is called Component" />
        <Card title="This is second Component" />
        <Card title="This is third Component" /> */}
        {posts.map((post) => {
          return <Card key={post.id} post={post}  />
        })}
      </div>
    );
  }
}

export default Cardbody;

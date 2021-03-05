import { Component } from "react";

import Cardbody from "./components/Cardbody";
import Modal from "./components/Modal";

//***FETCH TASKS FROM API
const fetchPosts = async () => {
  const res = await fetch("http://localhost:5000/posts");

  const data = await res.json();

  return data;
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    const getPosts = async () => {
      const postsFromServer = await fetchPosts();
      console.log(postsFromServer);
      this.setState({ posts: postsFromServer });
    };
    getPosts();
  }

  render() {
    console.log("From App =>", this.state.posts);
    return (
      <>
        <div className="container">
          <h3>Welcome to React Task</h3>
          <Cardbody posts={this.state.posts} />
        </div>
        {/* <Modal /> */}
      </>
    );
  }
}

export default App;

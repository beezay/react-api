import { Component } from "react";

import Cardbody from "./components/Cardbody";

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
      fetchData: false,
    };
  }

  componentDidUpdate() {
    const getPosts = async () => {
      const postsFromServer = await fetchPosts();
      //console.log(postsFromServer);
      this.setState({ posts: postsFromServer });
    };
    if (this.state.fetchData && this.state.posts.length === 0) {
      getPosts();
      // this.setState({fetchData:false})
    }
  }

  render() {
    // console.log("From App =>", this.state.posts);
    return (
      <div className="container">
        <h3>Welcome to React Task</h3>
        <div className="btn-wrapper">
          <button
            className="fetch-btn posts"
            onClick={() => this.setState({ fetchData: true })}
          >
            Posts
          </button>
          <button
            className="fetch-btn jokes"
            onClick={() => this.setState({ fetchData: true })}
          >
            Posts
          </button>
          <button
            className="fetch-btn users"
            onClick={() => this.setState({ fetchData: true })}
          >
            Posts
          </button>
        </div>
        {this.state.fetchData && <Cardbody posts={this.state.posts} />}
      </div>
    );
  }
}

export default App;

import axios from 'axios';
import { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    users: [],
    posts: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      const users = res.data
      this.setState({users})
    })

    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(resPosts => {
      const posts = resPosts.data
      this.setState({posts})
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.users.map(user => <p key={user.id}>{user.name},
        <span> email: {user.email},</span>
        <span> city: {user.address.city}</span>
        </p>)}

        {this.state.posts.map(post => <p key={post.id}>
          <span>Title: {post.title}</span>
          <br/>
          <span>Body {post.body}</span>
        </p>)}
      </div>
    );
  }
  }

export default App;

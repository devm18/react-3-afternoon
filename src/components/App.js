import React, { Component } from 'react';
import axios from 'axios'; 
import './App.css';
import Header from './Header/Header';
import Compose from './Compose/Compose';
import Post from './Post/Post';

const BASE_URL = 'https://practiceapi.devmountain.com/api/';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };

    this.updatePost = this.updatePost.bind( this );
    this.deletePost = this.deletePost.bind( this );
    this.createPost = this.createPost.bind( this );
  }
  
  componentDidMount() {
    axios.get(`${BASE_URL}posts`)
      .then(res => {
        // console.log( res );
      this.setState({ posts: res.data });
    })
  }
  
  updatePost(id, text) {
    axios.put(`${BASE_URL}posts?id=${id}`, {text})
      .then(res => {
        // console.log( res );
        this.setState({ posts: res.data })
    })
  }

  deletePost(id) {
    axios.delete(`${BASE_URL}posts?id=${ id }`)
      .then( res => {
        this.setState({ posts: res.data });
    });

  }

  createPost(text) {
    axios.post(`${BASE_URL}posts`, { text }).then( res => {
      this.setState({ posts: res.data });
    });
  }

  render() {
    let thePosts = this.state.posts.map(post => {
      // console.log( post )
      return (
        <Post 
          key={ post.id }
          id={ post.id }
          text={ post.text}
          date={ post.date }
          updatePostFn={ this.updatePost }
          deletePostFn={ this.deletePost } />
      ) 
    });
      
    return (
      <div className="App__parent">
        <Header />
        <section className="App__content">

          <Compose createPostFn={ this.createPost } />
          
          { thePosts }
      
        </section>
      </div>
    );
  }
}

export default App;

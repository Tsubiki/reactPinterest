import React, { Component } from 'react';
import SinglePost from './SinglePost'
import allPosts from './allPosts.css'

class AllPosts extends Component {
  constructor(){
    super()
    const numOfPostsArray = [1, 2, 3, 4, 5, 6, 7];
  }
  render() {
    return (
      <div className="allPosts">
        {/* for (var i = 0; i < numOfPostsArray; i++) {
          numOfPostsArray.push(<SinglePost key={i} />)
        } */}
        <SinglePost />
      </div>
    );
  }
}

export default AllPosts;

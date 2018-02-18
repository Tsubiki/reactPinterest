import React, { Component } from 'react';
import imgPost from './img/imgPost.jpg';
import {icon} from 'react-fontawesome';
import singlePost from './singlePost.css';

class SinglePost extends Component {
  render() {
    return (
      <div className="singlePost">
        <div>
          <div className="imgHolder">
            <img src={imgPost} alt="postImg" />
          </div>
          <div className="postParagraph">
            <p>
              Julia is expert in sales in IT companies in the CIS…
            </p>
            <a href="" className="postMenu">
              <i className="fa fa-ellipsis-h postMenuIcon"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SinglePost;
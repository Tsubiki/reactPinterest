import React, { Component } from 'react';
import Header from './components/Header/Header';
import AllPosts from './components/MainView/AllPosts';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AllPosts />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import ViewArticle from './components/ViewArticle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="jumbotron text-center">
          <h1>New York Times Article Scrubber</h1>
          <h2>Search for articles of interest!</h2>
          </div>
        
        <Home />
        <ViewArticle />
      </div>
    );
  }
}

export default App;

import './App.css';

//rcc
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
  // 1 c = 'Me';
  render() {
    return (
      <div>
        {/* 1 Hello! my first classbased component {this.c}. */}
          <NavBar />
          <News/>
      </div>
    )
  }
}


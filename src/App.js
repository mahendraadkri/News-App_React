import './App.css';

//rcc
import React, { Component } from 'react'

export default class App extends Component {
  c = 'Me';
  render() {
    return (
      <div>
        Hello! my first classbased component {this.c}.
      </div>
    )
  }
}


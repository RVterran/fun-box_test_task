import React, { Component } from 'react';
import './App.css';

import Item from './item';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
            <h1 className="title">Ты сегодня покормил кота?</h1>
            <div className="item-list">
              <Item/>
              <Item/>
              <Item/>
            </div>
        </div>
      </div>
    );
  }
}

export default App;

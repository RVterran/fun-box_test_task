import React, { Component } from 'react';
import './item.css';
import cat from './img/cat.png';

class Item extends Component {
  render() {
    return (
      <div className="item">
        <h4>Сказочное заморское яство</h4>
        <h1>Нямушка</h1>
        <h2>с фуа-гра</h2>
        <p>10 порций</p>
        <p>мышь в подарок</p>
        <img src={cat}/>
        <div className="weight">
            <span className="count">0,5</span>
            <span className="description">кг</span>
        </div>
      </div>
    );
  }
}

export default Item;

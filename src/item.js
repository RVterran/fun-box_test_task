import React, { Component } from 'react';
import './item.css';
import cat from './img/cat.png';

class Item extends Component {
  render() {
    return (
      <div className="item">
        <div className="item-container">
            <h4>{this.props.headText}</h4>
            <h1>{this.props.titleName}</h1>
            <h2>{this.props.titleNameWith}</h2>
            <p>{this.props.subtext1}</p>
            <p>{this.props.subtext2}</p>
            <p>{this.props.subtext3}</p>
            <img src={cat}/>
            <div className="weight">
                <span className="count">{this.props.weightCount}</span>
                <span className="unitMeas">{this.props.unitMeas}</span>
            </div>
        </div>
      </div>
    );
  }
}

export default Item;

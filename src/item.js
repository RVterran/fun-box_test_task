import React, { Component } from 'react';
import './item.css';
import cat from './img/cat.png';

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.buyClickCheck);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.buyClickCheck);
  }

  buyClickCheck = (e) => {
    if (e.target.classList.contains('buy')) {
      this.select();
    }
  }

  select = () => {
    if (!this.props.disabled) {
      this.setState(state => ({
        selected: !state.selected
      }));
    }
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <div className="item" onClick={this.select}>
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
        <p className="footer-text">{this.props.footerText}</p>
      </div>
    );
  }
}

export default Item;

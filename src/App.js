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
              <Item
                headText="Сказочное заморское яство"
                titleName="Нямушка"
                titleNameWith="с фуа-гра"
                subtext1="10 порций"
                subtext2="мышь в подарок"
                weightCount="0,5"
                unitMeas="кг"
                footerText={["Чего сидишь? Порадуй котэ, ", <span className='buy'>купи.</span>]}
                footerTextSelected="Печень утки разварная с артишоками."
              />
              <Item
                headText="Сказочное заморское яство"
                titleName="Нямушка"
                titleNameWith="с рыбой"
                subtext1="40 порций"
                subtext2="2 мыши в подарок"
                weightCount="2"
                unitMeas="кг"
                footerText={["Чего сидишь? Порадуй котэ, ", <span className='buy'>купи.</span>]}
                footerTextSelected="Головы щучьи с чесноком да свежайшая сёмгушка."
              />
              <Item
                headText="Сказочное заморское яство"
                titleName="Нямушка"
                titleNameWith="с курой"
                subtext1="100 порций"
                subtext2="5 мышей в подарок"
                subtext3="заказчик доволен"
                weightCount="5"
                unitMeas="кг"
                footerText={["Чего сидишь? Порадуй котэ, ", <span className='buy' >купи.</span>]}
                footerTextSelected="Филе из цыплят с трюфелями в бульоне."
                disabled
              />
            </div>
        </div>
      </div>
    );
  }
}

export default App;

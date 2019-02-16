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
                subtext1={[<span className="bold">10</span>, " порций"]}
                subtext2="мышь в подарок"
                weightCount="0,5"
                unitMeas="кг"
                selectedHoverText="Котэ не одобряет?"
                footerText={["Чего сидишь? Порадуй котэ, ", <span className='buy'>купи.</span>]}
                footerTextSelected="Печень утки разварная с артишоками."
                footerTextDisabled="Печалька, с фуа-гра закончился."
              />
              <Item
                headText="Сказочное заморское яство"
                titleName="Нямушка"
                titleNameWith="с рыбой"
                subtext1={[<span className="bold">40</span>, " порций"]}
                subtext2={[<span className="bold">2</span>, " мыши в подарок"]}
                weightCount="2"
                unitMeas="кг"
                selectedHoverText="Котэ не одобряет?"
                footerText={["Чего сидишь? Порадуй котэ, ", <span className='buy'>купи.</span>]}
                footerTextSelected="Головы щучьи с чесноком да свежайшая сёмгушка."
                footerTextDisabled="Печалька, с рыбой закончился."
              />
              <Item
                headText="Сказочное заморское яство"
                titleName="Нямушка"
                titleNameWith="с курой"
                subtext1={[<span className="bold">100</span>, " порций"]}
                subtext2={[<span className="bold">5</span>, " мышей в подарок"]}
                subtext3="заказчик доволен"
                weightCount="5"
                unitMeas="кг"
                selectedHoverText="Котэ не одобряет?"
                footerText={["Чего сидишь? Порадуй котэ, ", <span className='buy' >купи.</span>]}
                footerTextSelected="Филе из цыплят с трюфелями в бульоне."
                footerTextDisabled="Печалька, с курой закончился."
                disabled
              />
            </div>
        </div>
      </div>
    );
  }
}

export default App;

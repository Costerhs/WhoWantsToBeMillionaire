import React from 'react';
import { useSelector } from 'react-redux';
import Variant from './Variant';

function Game() {
  let state = useSelector((state) => state);

  let text = state.game[0].questions;
  let ans = state.game[0].answer;

  return (
    <div className="boss">
      <div className="questions">
        <div className="t">
          <h2 className="q__text">{text}</h2>
        </div>
        <div className="items">
          {ans.map((el, index) => {
            return <Variant key={index} variant={el.variant} answer={el.text} />;
            // console.log(el.variant + ':' + el.text);
          })}
        </div>
      </div>
      <div className="price"></div>
    </div>
  );
}

export default Game;

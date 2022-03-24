import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clickThunk, showResult } from '../redux/reducer/gameReducer';
import Price from './Price';
import Variant from './Variant';

function Game() {
  //state
  let state = useSelector((state) => state);
  let mainNum = state.game.mainNum;
  let text = state.game[mainNum].questions;
  let ans = state.game[mainNum].answer;
  let score = state.game.score;

  let dispatch = useDispatch();

  const showRes = () => {
    dispatch(clickThunk(mainNum));
  };

  let vari = ans.map((el, index) => {
    return (
      <Variant
        key={index}
        Click={showRes}
        classForRes={el.classes != null ? el.classes : null}
        variant={el.variant}
        answer={el.text}
      />
    );
  });

  return (
    <div className="boss">
      <div className="questions">
        <div className="t">
          <h2 className="q__text">{text}</h2>
        </div>
        <div className="items">{vari}</div>
      </div>
      <div className="price">
        <div className="contPrice">Score</div>
        {score.map((elem, index) => {
          return <Price key={index} ind={index} forClass={mainNum} num={elem} />;
        })}
      </div>
    </div>
  );
}

export default Game;

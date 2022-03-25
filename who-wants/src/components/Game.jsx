import classNames from 'classnames';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { clickThunk } from '../redux/reducer/gameReducer';
import Price from './Price';
import Variant from './Variant';

function Game() {
  let dispatch = useDispatch();
  //state
  let game = useSelector((state) => state.game);
  let mainNum = game.mainNum;
  let bad = game.badGame;
  if (bad === true) {
    return <Navigate to={'/end'} />;
  } else if (mainNum === 12) {
    return <Navigate to={'/end'} />;
  }
  let text = game[mainNum].questions;
  let ans = game[mainNum].answer;
  let score = game.score;
  let forAnimation = game.forAnimation;

  const showRes = (id) => {
    let trues = ans[id].flag === true ? true : false;

    dispatch(clickThunk(mainNum, trues));
  };

  let vari = ans.map((el, index) => {
    return (
      <Variant
        forAnimation={forAnimation}
        key={index}
        Click={showRes}
        classForRes={el.classes != null ? el.classes : null}
        variant={el.variant}
        answer={el.text}
        id={index}
      />
    );
  });

  return (
    <div className="boss">
      <div className="questions">
        <div
          className={classNames({
            t: forAnimation,
            mini: !forAnimation,
          })}>
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

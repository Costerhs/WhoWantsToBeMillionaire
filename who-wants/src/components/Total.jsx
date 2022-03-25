import React from 'react';
import { useSelector } from 'react-redux';

function Total() {
  let text = useSelector((state) => state.game);
  let txs;
  if (text.mainNum === 0) {
    txs = 'Oops,try your luck next time ' + '🤭';
  } else if (text.mainNum === 12) {
    txs = 'congratulations you are a millionair' + '🥳🥳🥳🥳';
  } else {
    txs = text.score[12 - text.mainNum] + 'earned';
  }
  return (
    <div className="total">
      <div className="cont_tot">
        <div className="total__img">
          <img className="imgT" src="img/hand.png" alt="" />
        </div>
        <div className="thin">
          <div className="total__text">
            <h3 className="score">Total score:</h3>
            <h1 className="cen">{txs} </h1>
          </div>
          <a href="/start">
            <button className="total_btn">Try again</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Total;

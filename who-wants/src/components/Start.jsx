import React from 'react';
import { NavLink } from 'react-router-dom';
const Start = () => {
  return (
    <div className="main">
      <div className="hidden"></div>
      <div className="main_cont">
        <div className="main__img">
          <img src="/img/hand.png" alt="nice" />
        </div>
        <div className="main__char">
          <h1 className="main__text">Who wants to be a millionaire?</h1>
          <NavLink to={'/game'}>
            <button className="main__btn">Start</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Start;

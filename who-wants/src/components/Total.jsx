import React from 'react';
import { NavLink } from 'react-router-dom';

function Total() {
  return (
    <div className="total">
      <div className="cont_tot">
        <div className="total__img">
          <img className="imgT" src="img/hand.png" alt="" />
        </div>
        <div className="thin">
          <div className="total__text">
            <h3 className="score">Total score:</h3>
            <h1 className="cen">$8,000 earned</h1>
          </div>
          <NavLink to={'/start'}>
            <button className="total_btn">Try again</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Total;

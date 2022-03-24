import classNames from 'classnames';
import React from 'react';

const Price = ({ num, forClass, ind }) => {
  let cls = 11 - forClass;
  let norm;
  if (cls < ind) {
    norm = 'disabledPrice';
  } else if (cls === ind) {
    norm = 'win';
  }
  return (
    <div className={classNames('scores', norm)}>
      <div className="pS">${num}</div>
    </div>
  );
};

export default Price;

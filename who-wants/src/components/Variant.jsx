import classNames from 'classnames';
import React from 'react';

function Variant({ variant, answer, forAnimation, Click, id, classForRes }) {
  let cl = classForRes;
  const Clickes = () => {
    Click(id);
  };
  return (
    <div className={classNames('quest q1', cl)} onClick={Clickes}>
      <p className="variant">{variant}</p>
      <p
        className={classNames({
          q_p: forAnimation,
        })}>
        {answer}
      </p>
    </div>
  );
}

export default Variant;
/*"quest q1"*/

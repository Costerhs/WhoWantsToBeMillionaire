import classNames from 'classnames';
import React from 'react';
import falseBack from './../assets/img/false.png';

function Variant({ variant, answer, Click, backTrue, backFalse, classForRes }) {
  let cl = classForRes;

  return (
    <div className={classNames('quest q1', cl)} onClick={Click}>
      <p className="variant">{variant}</p>
      <p className="q_p">{answer}</p>
    </div>
  );
}

export default Variant;
/*"quest q1"*/

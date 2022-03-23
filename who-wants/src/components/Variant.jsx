import React from 'react';

function Variant({ variant, answer, Click }) {
  return (
    <div className="quest q1" onClick={Click}>
      <p className="variant">{variant}</p>
      <p className="q_p">{answer}</p>
    </div>
  );
}

export default Variant;

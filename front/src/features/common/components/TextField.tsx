import React from 'react';

export const TextField = ({ input, setInput }) => {
  const updateInput = (e) => setInput(e.target.value);
  return <input className="ptn-input" value={input} type="text" onInput={updateInput} />;
};

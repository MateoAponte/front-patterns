import React from 'react';
import { INPUT_TYPES } from '../constants/TextFields.ts';

interface TextFieldModel {
  input: string;
  setInput: Function;
  type?: INPUT_TYPES;
  id: string;
  placeholder?: string;
  style?: React.CSSProperties;
}

export const TextField: React.FC<TextFieldModel> = ({
  input,
  setInput,
  placeholder,
  type = INPUT_TYPES.TEXT,
  id,
  style,
}) => {
  const updateInput = (e) => setInput(e.target.value);
  return (
    <input
      className="ptn-input"
      value={input}
      placeholder={placeholder}
      type={INPUT_TYPES[type]}
      id={id}
      onInput={updateInput}
      style={style}
    />
  );
};

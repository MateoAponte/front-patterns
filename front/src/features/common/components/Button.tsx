import React from 'react';

type TypeButton = 'small' | 'normal' | 'large' | '';

interface ButtonModel {
  children: React.ReactNode;
  onClick: () => void;
  type?: TypeButton;
}

export const PTButton: React.FC<ButtonModel> = ({ children, onClick, type }) => {
  const getType = type && 'ptn-button--' + type;
  return (
    <button className={`ptn-button ${getType}`} onClick={() => onClick()}>
      {children}
    </button>
  );
};

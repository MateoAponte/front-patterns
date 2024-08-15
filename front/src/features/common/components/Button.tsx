import React from 'react';

type TypeButton = 'small' | 'normal' | 'large' | '';

type ColorButton = 'red' | 'green' | 'blue';

interface ButtonModel {
  children: React.ReactNode;
  onClick: () => void;
  type?: TypeButton;
  text?: string;
  color?: ColorButton;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
}

export const PTButton: React.FC<ButtonModel> = ({
  children,
  onClick,
  type,
  text,
  color,
  style,
  icon,
}) => {
  const getType = type && ` ptn-button--${type}`;
  const getColor = color && ` ptn-button--${color}`;
  const getIcon = icon && <span className="ptn-button__icon">{icon}</span>;
  return (
    <button
      className={`ptn-button ${getType}${getColor}`}
      style={style}
      onClick={() => onClick()}
    >
      {getIcon}
      {text}
      {children}
    </button>
  );
};

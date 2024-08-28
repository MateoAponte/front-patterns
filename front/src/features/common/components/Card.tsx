import React from 'react';

export interface CardModel {
  children: React.ReactNode;
  id?: string;
}

export const CardHeader = ({ children }) => {
  return <div className="card__header">{children}</div>;
};
export const CardContent = ({ children }) => {
  return <div className="card__content">{children}</div>;
};
export const CardFooter = ({ children }) => {
  return <div className="card__footer">{children}</div>;
};

export const Card: React.FC<CardModel> = ({ children, id }) => {
  return (
    <>
      <div className="card" id={id}>
        {children}
      </div>
    </>
  );
};

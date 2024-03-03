import React from 'react';

export const CardHeader = ({ children }) => {
  return <div className="card__header">{children}</div>;
};
export const CardContent = ({ children }) => {
  return <div className="card__content">{children}</div>;
};
export const CardFooter = ({ children }) => {
  return <div className="card__footer">{children}</div>;
};

export const Card = ({ children }) => {
  return (
    <>
      <div className="card">{children}</div>
    </>
  );
};

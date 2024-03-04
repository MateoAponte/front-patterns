import React from 'react';
import { ShapeBase } from './ShapeBase.tsx';

export const SquareShape: React.FC = () => {
  const clicked = () => {
    alert('A Square');
  };
  return <ShapeBase name="Cuadrado" type="SQUARE" onClick={clicked} />;
};
export const TriangleShape: React.FC = () => {
  const clicked = () => {
    alert('Ph, a Triangle!!');
  };
  return <ShapeBase name="Triangulo" type="TRIANGLE" onClick={clicked} />;
};
export const CircleFigure: React.FC = () => {
  const clicked = () => {
    alert('Is a Circle!!!');
  };
  return <ShapeBase name="Circulo" type="CIRCLE" onClick={clicked} />;
};

interface ShapeFactory {
  createShape(): React.ReactNode;
}

export const CircleFactory = (): ShapeFactory => {
  return {
    createShape: () => <CircleFigure />,
  };
};
export const SquareFactory = (): ShapeFactory => {
  return {
    createShape: () => <SquareShape />,
  };
};
export const TriangleFactory = (): ShapeFactory => {
  return {
    createShape: () => <TriangleShape />,
  };
};

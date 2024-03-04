import { SquareFactory, CircleFactory, TriangleFactory } from './FactoryMethod.tsx';

export enum DishEnum {
  SQUARE = 'SQUARE',
  TRIANGLE = 'TRIANGLE',
  CIRCLE = 'CIRCLE',
}
export type DishType = 'SQUARE' | 'TRIANGLE' | 'CIRCLE';

export const createFactory = (type: DishType): (() => React.ReactNode) => {
  const factories = {
    CIRCLE: CircleFactory(),
    SQUARE: SquareFactory(),
    TRIANGLE: TriangleFactory(),
  };
  const factory = factories[type];
  return factory.createShape;
};

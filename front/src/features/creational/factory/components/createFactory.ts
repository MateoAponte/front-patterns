import { HamburguerFactory, PizzaFactory, SpaghettiFactory } from './FactoryMethod.tsx';

export enum DishEnum {
  PIZZA = 'PIZZA',
  HAMBURGUER = 'HAMBURGUER',
  SPAGHETTI = 'SPAGHETTI',
}
export type DishType = 'PIZZA' | 'HAMBURGUER' | 'SPAGHETTI';

export const createFactory = (type: DishType): (() => React.ReactNode) => {
  const factories = {
    PIZZA: PizzaFactory(),
    HAMBURGUER: HamburguerFactory(),
    SPAGHETTI: SpaghettiFactory(),
  };
  const factory = factories[type];
  return factory.makeDish;
};

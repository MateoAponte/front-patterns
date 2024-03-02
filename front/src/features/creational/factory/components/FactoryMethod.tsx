import React from 'react';
import { DishBase } from './DishBase.tsx';

export const HamburgerDish: React.FC = () => {
  const ingredients: Array<String> = ['Bread', 'Meat', 'Ketchup', 'Cheese', 'Tomato'];
  const clicked = () => {
    alert('Is a Hamburguer');
  };
  return <DishBase name="Hamburguesa" ingredients={ingredients} difficulty="Hard" onClick={clicked} />;
};
export const SpaghettiDish: React.FC = () => {
  const ingredients: Array<String> = ['Spaghetti', 'Milk', 'Cheese', 'Some sauce', 'Some meat'];
  const clicked = () => {
    alert('Jmm Spaghetti');
  };
  return <DishBase name="Spaghetti" ingredients={ingredients} difficulty="Easy" onClick={clicked} />;
};
export const PizzaDish: React.FC = () => {
  const ingredients: Array<String> = ['Cheese', 'Tomato', 'Cheese', 'Bulk', 'Peperoni', 'Salami'];
  const clicked = () => {
    alert('Is Pizza!');
  };
  return <DishBase name="Pizza" ingredients={ingredients} difficulty="Hard" onClick={clicked} />;
};

interface DishFactory {
  makeDish(): React.ReactNode;
}

export const PizzaFactory = (): DishFactory => {
  return {
    makeDish: () => <PizzaDish />,
  };
};
export const HamburguerFactory = (): DishFactory => {
  return {
    makeDish: () => <HamburgerDish />,
  };
};
export const SpaghettiFactory = (): DishFactory => {
  return {
    makeDish: () => <SpaghettiDish />,
  };
};

import React from 'react';
import { ChildrenInterface } from '../../../../features/common/interfaces/ChildrenInterface';
import { DishDifficult } from '../types/DishDifficult';

interface DishModel extends ChildrenInterface {
  name: String;
  ingredients: Array<String>;
  difficulty: DishDifficult;
  clicked: () => void;
}

export const Dish: React.FC<DishModel> = ({ name, ingredients, difficulty, clicked }) => {
  return (
    <>
      <h3>{name}</h3>
      <ul>
        {ingredients.map((ingredient: String) => (
          <li>{ingredient}</li>
        ))}
      </ul>
      <span>
        <strong>Difficult: {difficulty}</strong>
      </span>
      <button onClick={() => clicked}>Show</button>
    </>
  );
};

export const HamburgerDish: React.FC = () => {
  const ingredients: Array<String> = ['Bread', 'Meat', 'Ketchup', 'Cheese', 'Tomato'];
  const clicked = () => {
    alert('Is a Hamburguer');
  };
  return <Dish name="Hamburguesa" ingredients={ingredients} difficulty="Hard" clicked={clicked} />;
};
export const SpaghettiDish: React.FC = () => {
  const ingredients: Array<String> = ['Spaghetti', 'Milk', 'Cheese', 'Some sauce', 'Some meat'];
  const clicked = () => {
    alert('Jmm Spaghetti');
  };
  return <Dish name="Spaghetti" ingredients={ingredients} difficulty="Easy" clicked={clicked} />;
};
export const PizzaDish: React.FC = () => {
  const ingredients: Array<String> = ['Cheese', 'Tomato', 'Cheese', 'Bulk', 'Peperoni', 'Salami'];
  const clicked = () => {
    alert('Is Pizza!');
  };
  return <Dish name="Pizza" ingredients={ingredients} difficulty="Hard" clicked={clicked} />;
};

interface DishFactory {
  makeDish: () => React.FC;
}

export const PizzaFactory = (): DishFactory => {
  return {
    makeDish: () => PizzaDish,
  };
};
export const HamburguerFactory = (): DishFactory => {
  return {
    makeDish: () => HamburgerDish,
  };
};
export const SpaghettiFactory = (): DishFactory => {
  return {
    makeDish: () => SpaghettiDish,
  };
};

export enum DishEnum {
  PIZZA = 'PIZZA',
  HAMBURGUER = 'HAMBURGUER',
  SPAGHETTI = 'SPAGHETTI',
}
export type DishType = 'PIZZA' | 'HAMBURGUER' | 'SPAGHETTI';

export const useCreateFactory = (type: DishType): React.FC => {
  const factories = {
    PIZZA: PizzaFactory(),
    HAMBURGUER: HamburguerFactory(),
    SPAGHETTI: SpaghettiFactory(),
  };
  const factory = factories[type];

  const Dish: React.FC = factory.makeDish();
  return Dish;
};

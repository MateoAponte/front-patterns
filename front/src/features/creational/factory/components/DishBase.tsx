import React from 'react';
import { ChildrenInterface } from '../../../common/interfaces/ChildrenInterface';
import { DishDifficult } from '../types/DishDifficult';

interface DishModel extends ChildrenInterface {
  name: String;
  ingredients: Array<String>;
  difficulty: DishDifficult;
  onClick: () => void;
}

export const DishBase: React.FC<DishModel> = ({ name, ingredients, difficulty, onClick }) => {
  return (
    <>
      <section className="card">
        <div className="card__header">
          <h3>{name}</h3>
        </div>
        <div className="card__content">
          <ul>
            {ingredients.map((ingredient: String, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <span>
            <strong>Difficult: {difficulty}</strong>
          </span>
        </div>
        <button className="pattern__button" onClick={() => onClick()}>
          Show
        </button>
      </section>
    </>
  );
};

import React from 'react';
import { ChildrenInterface } from '../../../common/interfaces/ChildrenInterface';
import { Card, CardContent, CardFooter, CardHeader } from '../../../common/components/Card.tsx';
import { DishDifficult } from '../types/DishDifficult';
import { PTButton } from '../../../common/components/Button.tsx';
import { Text } from '../../../common/components/Text.tsx';

interface DishModel extends ChildrenInterface {
  name: String;
  ingredients: Array<String>;
  difficulty: DishDifficult;
  onClick: () => void;
}

export const DishBase: React.FC<DishModel> = ({ name, ingredients, difficulty, onClick }) => {
  return (
    <>
      <Card>
        <CardHeader>
          <Text text={name} type="heading" modifier="bolder" />
        </CardHeader>
        <CardContent>
          <ul>
            {ingredients.map((ingredient: String, index) => (
              <Text key={index} text={ingredient} type="list" />
            ))}
          </ul>
          <Text text={`Difficult: ${difficulty}`} type="common" modifier="bolder" />
        </CardContent>
        <CardFooter>
          <PTButton type="large" onClick={() => onClick()}>
            <Text text="Do something" type="common" modifier="bolder" />
          </PTButton>
        </CardFooter>
      </Card>
    </>
  );
};

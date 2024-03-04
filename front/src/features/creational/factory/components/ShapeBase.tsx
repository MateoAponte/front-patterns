import React from 'react';
import { ChildrenInterface } from '../../../common/interfaces/ChildrenInterface';
import { Card, CardContent, CardFooter, CardHeader } from '../../../common/components/Card.tsx';
import { DishDifficult } from '../types/DishDifficult';
import { PTButton } from '../../../common/components/Button.tsx';
import { Text } from '../../../common/components/Text.tsx';
import { DishType } from './createFactory.ts';

interface ShapeModel extends ChildrenInterface {
  name: String;
  type: DishType;
  onClick: () => void;
}

export const ShapeBase: React.FC<ShapeModel> = ({ name, type, onClick }) => {
  const getShape = type.toLowerCase();
  return (
    <>
      <Card>
        <CardHeader>
          <Text text={name} type="heading" modifier="bolder" />
        </CardHeader>
        <CardContent>
          <div className="ptn-canvas">
            <div className={`ptn-shape ptn-shape__${getShape}`}></div>
            <PTButton type="small" onClick={() => onClick()}>
              <Text text="Do something" type="common" modifier="bolder" />
            </PTButton>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

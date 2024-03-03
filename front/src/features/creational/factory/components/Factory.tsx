import React, { useState } from 'react';
import { PTSection } from '../../../common/components/PTSection.tsx';
import { createFactory } from './createFactory.ts';
import { Column } from '../../../common/components/Column.tsx';
import { PTButton } from '../../../common/components/Button.tsx';
import { Text } from '../../../common/components/Text.tsx';
import { PTRow } from '../../../common/components/PTRow.tsx';

interface ColumnCreation {
  title: String;
  createEl: () => React.ReactNode;
}

export const ColumnRestaurant: React.FC<ColumnCreation> = ({ title, createEl }) => {
  const [components, setComponents] = useState(Array<React.ReactNode>);
  const addComponent = () => {
    const newComponent = createEl();
    setComponents((prevComponents) => [...prevComponents, newComponent]);
  };
  return (
    <Column>
      <h1 className="column__title">{title}</h1>
      <PTButton onClick={() => addComponent()} type="large">
        <Text text="Crear" type="common" modifier="bolder" />
      </PTButton>
      <div className="column__content">{components}</div>
    </Column>
  );
};

export const Factory: React.FC = () => {
  return (
    <>
      <PTSection title={'Factory Method'}>
        <PTRow perRow="3-item">
          <ColumnRestaurant title="Pizza" createEl={createFactory('PIZZA')}></ColumnRestaurant>
          <ColumnRestaurant title="Hamburguer" createEl={createFactory('HAMBURGUER')}></ColumnRestaurant>
          <ColumnRestaurant title="Spaghetti" createEl={createFactory('SPAGHETTI')}></ColumnRestaurant>
        </PTRow>
      </PTSection>
    </>
  );
};

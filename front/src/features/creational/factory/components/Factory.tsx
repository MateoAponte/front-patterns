import React, { useState } from 'react';
import { createFactory } from '../helpers/createFactory.ts';
import { Column } from '../../../common/components/Column.tsx';
import { PTButton } from '../../../common/components/Button.tsx';
import { Text } from '../../../common/components/Text.tsx';
import { PTRow } from '../../../common/components/PTRow.tsx';
import { PatternLayout } from '../../../common/layouts/PatternLayout.tsx';
import { mainText, pros, cons, uses, examples, applications, helper } from '../contants/text.tsx';

interface ColumnCreation {
  title: String;
  createEl: () => React.ReactNode;
}

const ColumnElement: React.FC<ColumnCreation> = ({ title, createEl }) => {
  const [components, setComponents] = useState(Array<React.ReactNode>);
  const addComponent = () => {
    const newComponent = createEl();
    setComponents((prevComponents) => [...prevComponents, newComponent]);
  };
  return (
    <Column>
      <Text type="heading" heading="h4" modifier="bold" tag="span" spaced="spaced-2" text={title} />
      <PTButton onClick={() => addComponent()} type="large">
        <Text text="Crear" type="common" modifier="bold" />
      </PTButton>
      <div className="column__content">{components}</div>
    </Column>
  );
};

export const Factory: React.FC = () => {
  return (
    <>
      <PatternLayout mainText={mainText} pros={pros} cons={cons} uses={uses} examples={examples} applications={applications} helper={helper} title="Factory Method">
        <PTRow perRow="3-item">
          <ColumnElement title="Circulo" createEl={createFactory('CIRCLE')}></ColumnElement>
          <ColumnElement title="Cuadrado" createEl={createFactory('SQUARE')}></ColumnElement>
          <ColumnElement title="Triangulo" createEl={createFactory('TRIANGLE')}></ColumnElement>
        </PTRow>
      </PatternLayout>
    </>
  );
};

import React, { useState } from 'react';
import { Section } from '../../../common/components/Section.tsx';
import { createFactory } from './Restaurante.tsx';

interface ColumnCreation {
  title: String;
  creationEl: () => React.ReactNode;
}

export const Column: React.FC<ColumnCreation> = ({ title, creationEl }) => {
  const [components, setComponents] = useState(Array<React.ReactNode>);
  const addComponent = () => {
    console.log('Do something');
    const copyArr = [...components];
    copyArr.push(creationEl());
    setComponents(copyArr);
  };
  return (
    <section className="column">
      <h1 className="column__title">{title}</h1>
      <button className="pattern__button column__button" onClick={() => addComponent()}>
        Crear :D
      </button>
      <div className="column__content">{components.map((Component: React.ReactNode) => Component)}</div>
    </section>
  );
};

export const FactoryMethod: React.FC = () => {
  return (
    <>
      <Section title={'Factory Method'}>
        <Column title="Pizza" creationEl={createFactory('PIZZA')}></Column>
        <Column title="Hamburguer" creationEl={createFactory('HAMBURGUER')}></Column>
        <Column title="Spaghetti" creationEl={createFactory('SPAGHETTI')}></Column>
      </Section>
    </>
  );
};

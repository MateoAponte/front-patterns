import React, { useState } from 'react';
import { Section } from '../../../common/components/Section.tsx';
import { createFactory } from './createFactory.ts';

interface ColumnCreation {
  title: String;
  createEl: () => React.ReactNode;
}

export const Column: React.FC<ColumnCreation> = ({ title, createEl }) => {
  const [components, setComponents] = useState(Array<React.ReactNode>);
  const addComponent = () => {
    const newComponent = createEl();
    setComponents((prevComponents) => [...prevComponents, newComponent]);
  };
  return (
    <section className="column">
      <h1 className="column__title">{title}</h1>
      <button className="pattern__button column__button" onClick={() => addComponent()}>
        Crear :D
      </button>
      <div className="column__content">{components}</div>
    </section>
  );
};

export const FactoryMethod: React.FC = () => {
  return (
    <>
      <Section title={'Factory Method'}>
        <Column title="Pizza" createEl={createFactory('PIZZA')}></Column>
        <Column title="Hamburguer" createEl={createFactory('HAMBURGUER')}></Column>
        <Column title="Spaghetti" createEl={createFactory('SPAGHETTI')}></Column>
      </Section>
    </>
  );
};

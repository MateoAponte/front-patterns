import React from 'react';
import { Section } from '../../../common/components/Section.tsx';
import { useCreateFactory } from './Restaurante.tsx';

export const FactoryMethod: React.FC = () => {
  const PizzaComponent = useCreateFactory('PIZZA');
  const HamburguerComponent = useCreateFactory('HAMBURGUER');
  const SpaghettiComponent = useCreateFactory('SPAGHETTI');

  return (
    <>
      <Section title={'Factory Method'}>
        <PizzaComponent />
        <HamburguerComponent />
        <SpaghettiComponent />
      </Section>
    </>
  );
};

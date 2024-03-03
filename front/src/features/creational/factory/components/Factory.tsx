import React, { useState } from 'react';
import { PTSection } from '../../../common/components/PTSection.tsx';
import { createFactory } from './createFactory.ts';
import { Column } from '../../../common/components/Column.tsx';
import { PTButton } from '../../../common/components/Button.tsx';
import { Text } from '../../../common/components/Text.tsx';
import { PTRow } from '../../../common/components/PTRow.tsx';
import MermaidReact from 'mermaid-react';
import { Divider } from '../../../common/components/Divider.tsx';

const factory = `
flowchart TB
  A[App]
  A -. Use .-> B[Factory]
  BA[FactoryA] -- Inherits --> B
  BB[FactoryB] -- Inherits --> B
  B -. Depends .-> C[Product]
  CA[ProductA] -- Inherits --> C
  CB[ProductA] -- Inherits --> C
  BA -. Depends .-> CA
  BB -. Depends .-> CB
`;
const example = `
flowchart LR
  A[Restaurant]
  A -. Use .-> B[DishesFactory]
  B -. Depends .-> C[Dish]
  BA[BurguerFactory] ---> B
  BB[PizzaFactory] ---> B
  BC[SpaghettiFactory] ---> B
  CA[HamburgerDish] --> C
  CB[PizzaDish] --> C
  CC[SpaghettiDish] --> C
  subgraph Relations
  BA -.-> CA
  BB -.-> CB
  BC -.-> CC
  end
`;

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
      <PTSection title={'Factory Method'} isMainTitle>
        <PTRow perRow="2-item" verticalAligment="center">
          <section>
            <p>
              Este patrón nos permite <Text text="tener una clase centralizada que crea y modifica subclases," type="common" isHighlight tag="span" />{' '}
              definiendo el comportamiento de sus hijas por medio de una extensión de clase base o interfaz, funcionando como una clase abstracta que es
              implementada por sus hijas.
            </p>
            <Text
              text="Su objetivo es proveer una interfaz para crear pbjetos basados en una clase base o interfaz"
              type="common"
              isHighlight
              tag="p"
              spaced="spaced-2"
            />
          </section>
          <MermaidReact id="factory" mmd={factory} />
        </PTRow>
        <PTRow perRow="2-item">
          <PTSection title="Pros" isMainTitle>
            <ul>
              <Text type="list" text="Evitamos acoplamiento entre la implementación y los elementos creadores" tag="li" />
              <Text type="list" text="La creación de elementos sucede en un único punto" tag="li" />
              <Text type="list" text="Agregar nuevos productos no requiere modificar el código, *solo extenderlo*" tag="li" />
            </ul>
          </PTSection>
          <PTSection title="Contras" isMainTitle>
            <ul>
              <Text
                type="list"
                text="El patrón resuelve dos problemas al mismo tiempo, creación y acceso a sus intancias por lo cual Vulnera el principio de Responsabilidad única."
                tag="li"
              />
              <Text type="list" text="La complejidad incrementa en ambientes de múltiples hilos de ejecución." tag="li" />
              <Text type="list" text="Complejidad al realizar pruebas unitarias debido al uso de elementos estáticos." tag="li" />
            </ul>
          </PTSection>
        </PTRow>
        <Divider orientation="horizontal" />
        <PTRow perRow="2-item">
          <PTSection title="¿Cuando usarlo?" isMainTitle>
            <ul>
              <Text type="list" text="Usarlo cuando se necesite un único punto de acceso a recursos compartidos" tag="li" />
              <Text type="list" text="La creación de elementos sucede en un único punto" tag="li" />
              <Text type="list" text="Agregar nuevos productos no requiere modificar el código, *solo extenderlo*" tag="li" />
            </ul>
          </PTSection>
          <PTSection title="Aplicaciones" isMainTitle>
            <ul>
              <Text
                type="list"
                text="El patrón resuelve dos problemas al mismo tiempo, creación y acceso a sus intancias por lo cual Vulnera el principio de Responsabilidad única."
                tag="li"
              />
              <Text type="list" text="La complejidad incrementa en ambientes de múltiples hilos de ejecución." tag="li" />
              <Text type="list" text="Complejidad al realizar pruebas unitarias debido al uso de elementos estáticos." tag="li" />
            </ul>
          </PTSection>
        </PTRow>
        <Divider orientation="horizontal" />
        <PTSection title="Ejemplo" isMainTitle>
          <PTRow perRow="2-item">
            <MermaidReact id="example" mmd={example} />
            <p>asd</p>
          </PTRow>
        </PTSection>
        <PTRow perRow="3-item">
          <ColumnRestaurant title="Pizza" createEl={createFactory('PIZZA')}></ColumnRestaurant>
          <ColumnRestaurant title="Hamburguer" createEl={createFactory('HAMBURGUER')}></ColumnRestaurant>
          <ColumnRestaurant title="Spaghetti" createEl={createFactory('SPAGHETTI')}></ColumnRestaurant>
        </PTRow>
      </PTSection>
    </>
  );
};

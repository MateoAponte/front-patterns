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
  A[Canvas]
  A -. Use .-> B[ShapesFactory]
  B -. Depends .-> C[Shape]
  BA[CircleFactory] ---> B
  BB[SquareFactory] ---> B
  BC[TriangleFactory] ---> B
  CA[CircleShape] --> C
  CB[SquareShape] --> C
  CC[TriangleShape] --> C
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

export const ColumnElement: React.FC<ColumnCreation> = ({ title, createEl }) => {
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
      <PTSection title={'Factory Method'} headingType="header">
        <PTRow perRow="2-item" verticalAligment="center">
          <section>
            <Text text="Este patrón nos permite" type="common">
              <Text text="tener una clase centralizada que crea y modifica subclases," type="common" isHighlight tag="span" />
              <Text
                text="Este patrón nos permite definiendo el comportamiento de sus hijas por medio de una extensión de clase base o interfaz, funcionando como una clase
              abstracta que es implementada por sus hijas."
                type="common"
                tag="span"
              />
            </Text>
            <Text
              text="Su objetivo es proveer una interfaz para crear objetos basados en una clase base o interfaz"
              type="common"
              isHighlight
              tag="p"
              spaced="spaced-2"
            />
          </section>
          <MermaidReact id="factory" mmd={factory} />
        </PTRow>
        <PTRow perRow="2-item">
          <PTSection title="Pros" headingType="subheader">
            <ul>
              <Text type="list" text="Evitamos acoplamiento entre la implementación y los elementos creadores" tag="li" />
              <Text type="list" text="La creación de elementos sucede en un único punto" tag="li" />
              <Text type="list" text="Agregar nuevos productos no requiere modificar el código" tag="li">
                <Text type="common" text="Solo Extenderlo" isHighlight />
              </Text>
            </ul>
          </PTSection>
          <PTSection title="Contras" headingType="subheader">
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
          <PTSection title="¿Cuando usarlo?" headingType="subheader">
            <ul>
              <Text type="list" text="Usarlo cuando se necesite un único punto de acceso a recursos compartidos" tag="li" />
              <Text type="list" text="La creación de elementos sucede en un único punto" tag="li" />
              <Text type="list" text="Agregar nuevos productos no requiere modificar el código, *solo extenderlo*" tag="li" />
            </ul>
          </PTSection>
          <PTSection title="Aplicaciones" headingType="subheader">
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
        <PTSection title="Ejemplo" headingType="subheader">
          <PTRow perRow="2-item">
            <Text type="common" text="En una aplicación tipo Canvas donde el usuario pueden crear diferentes figuras en el panel principal;">
              <Text
                text="Podremos utilizar el Patrón Factory para crear y permitir pintar figuras en el lienzo como Circulos, Triangulos, Cuadrados, etc;"
                isHighlight
                type="common"
                tag="span"
              />
              <Text text=" Dependiendo de la selección del usuario" type="common" tag="span" />
            </Text>
            <MermaidReact id="example" mmd={example} />
          </PTRow>
        </PTSection>
        <PTRow perRow="3-item">
          <ColumnElement title="Circulo" createEl={createFactory('CIRCLE')}></ColumnElement>
          <ColumnElement title="Cuadrado" createEl={createFactory('SQUARE')}></ColumnElement>
          <ColumnElement title="Triangulo" createEl={createFactory('TRIANGLE')}></ColumnElement>
        </PTRow>
      </PTSection>
    </>
  );
};

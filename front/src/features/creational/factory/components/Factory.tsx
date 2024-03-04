import React, { useState } from 'react';
import { createFactory } from '../helpers/createFactory.ts';
import { Column } from '../../../common/components/Column.tsx';
import { PTButton } from '../../../common/components/Button.tsx';
import { Text } from '../../../common/components/Text.tsx';
import { PTRow } from '../../../common/components/PTRow.tsx';
import { PatternLayout } from '../../../common/layouts/PatternLayout.tsx';
import { SHAPES, FACTORY } from '../contants/graphs.ts';

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
      <h1 className="column__title">{title}</h1>
      <PTButton onClick={() => addComponent()} type="large">
        <Text text="Crear" type="common" modifier="bolder" />
      </PTButton>
      <div className="column__content">{components}</div>
    </Column>
  );
};

export const Factory: React.FC = () => {
  const mainText = {
    graph: FACTORY,
    text: [
      {
        text: 'Este patrón nos permite',
      },
      {
        text: 'tener una clase centralizada que crea y modifica subclases,',
        isHighlight: true,
      },
      {
        text: 'Este patrón nos permite definiendo el comportamiento de sus hijas por medio de una extensión de clase base o interfaz, funcionando como una clase abstracta que es implementada por sus hijas.',
      },
      {
        text: 'Su objetivo es proveer una interfaz para crear objetos basados en una clase base o interfaz',
        isHighlight: true,
      },
    ],
  };
  const pros = [
    <Text type="list" text="Evitamos acoplamiento entre la implementación y los elementos creadores" tag="li" />,
    <Text type="list" text="La creación de elementos sucede en un único punto" tag="li" />,
    <Text type="list" text="Agregar nuevos productos no requiere modificar el código" tag="li">
      <Text type="common" text="Solo Extenderlo" isHighlight />
    </Text>,
  ];
  const cons = [
    <Text
      type="list"
      text="El patrón resuelve dos problemas al mismo tiempo, creación y acceso a sus intancias por lo cual Vulnera el principio de Responsabilidad única."
      tag="li"
    />,
    <Text type="list" text="La complejidad incrementa en ambientes de múltiples hilos de ejecución." tag="li" />,
    <Text type="list" text="Complejidad al realizar pruebas unitarias debido al uso de elementos estáticos." tag="li" />,
  ];
  const uses = [
    <Text type="list" text="El patrón Factory te permite desacoplar la creación de objetos de su implementación" tag="li" />,
    <Text type="list" text="Con el patrón Factory, puedes centralizar toda la lógica de creación de objetos en una sola clase o función" tag="li" />,
    <Text
      type="list"
      text="Permite añadir nuevos tipos de objetos o cambiar la implementación de los objetos existentes sin afectar el código que los utiliza"
      tag="li"
    />,
  ];
  const applications = {
    graph: SHAPES,
    text: [
      {
        text: 'Podremos utilizar el Patrón Factory para crear y permitir pintar figuras en el lienzo como Circulos, Triangulos, Cuadrados, etc;',
        isHighlight: true,
      },
      {
        text: 'Dependiendo de la selección del usuario se renderizará un elemento determinado en base a una clase central',
      },
    ],
  };
  const examples = [
    <Text type="list" text="Creación de componentes dinámicos en una interfaz de usuario (Variaciones de un componente)" tag="li" />,
    <Text type="list" text="Consumo de API externas para obtener datos (Manejar las solicitudes de API de manera más eficiente)" tag="li" />,
    <Text type="list" text="Aplicación de análisis de datos con gráficos (Según una serie de datos variar de gráficos)" tag="li" />,
  ];

  return (
    <>
      <PatternLayout mainText={mainText} pros={pros} cons={cons} uses={uses} examples={examples} applications={applications} title="Factory Method">
        <PTRow perRow="3-item">
          <ColumnElement title="Circulo" createEl={createFactory('CIRCLE')}></ColumnElement>
          <ColumnElement title="Cuadrado" createEl={createFactory('SQUARE')}></ColumnElement>
          <ColumnElement title="Triangulo" createEl={createFactory('TRIANGLE')}></ColumnElement>
        </PTRow>
      </PatternLayout>
    </>
  );
};

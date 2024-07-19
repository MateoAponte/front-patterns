import React from 'react';
import { SHAPES, FACTORY } from './graphs.ts';
import { Text } from '../../../common/components/Text.tsx';

export const mainText = {
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

export const pros = [
  <Text type="list" text="Evitamos acoplamiento entre la implementación y los elementos creadores" tag="li" />,
  <Text type="list" text="La creación de elementos sucede en un único punto" tag="li" />,
  <Text type="list" text="Agregar nuevos productos no requiere modificar el código" tag="li">
    <Text type="common" text="Solo Extenderlo" isHighlight />
  </Text>,
];
export const cons = [
  <Text
    type="list"
    text="El patrón resuelve dos problemas al mismo tiempo, creación y acceso a sus intancias por lo cual Vulnera el principio de Responsabilidad única."
    tag="li"
  />,
  <Text type="list" text="La complejidad incrementa en ambientes de múltiples hilos de ejecución." tag="li" />,
  <Text type="list" text="Complejidad al realizar pruebas unitarias debido al uso de elementos estáticos." tag="li" />,
];
export const uses = [
  <Text type="list" text="El patrón Factory te permite desacoplar la creación de objetos de su implementación" tag="li" />,
  <Text type="list" text="Con el patrón Factory, puedes centralizar toda la lógica de creación de objetos en una sola clase o función" tag="li" />,
  <Text
    type="list"
    text="Permite añadir nuevos tipos de objetos o cambiar la implementación de los objetos existentes sin afectar el código que los utiliza"
    tag="li"
  />,
];
export const applications = {
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
export const examples = [
  <Text type="list" text="Creación de componentes dinámicos en una interfaz de usuario (Variaciones de un componente)" tag="li" />,
  <Text type="list" text="Consumo de API externas para obtener datos (Manejar las solicitudes de API de manera más eficiente)" tag="li" />,
  <Text type="list" text="Aplicación de análisis de datos con gráficos (Según una serie de datos variar de gráficos)" tag="li" />,
];
export const helper = "A pattern that give a interface to create objects by a superclase, while the subclases can modify the objects that it's created.";

export default {};
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
  <Text
    type="list"
    text="Evitamos acoplamiento entre la implementación y los elementos creadores"
    tag="li"
  />,
  <Text
    type="list"
    text="La creación de elementos sucede en un único punto"
    tag="li"
  />,
  <Text
    type="list"
    text="Agregar nuevos productos no requiere modificar el código"
    tag="li"
  >
    <Text type="common" text="Solo Extenderlo" isHighlight />
  </Text>,
];
export const cons = [
  <Text
    type="list"
    text="El patrón resuelve dos problemas al mismo tiempo, creación y acceso a sus intancias por lo cual Vulnera el principio de Responsabilidad única."
    tag="li"
  />,
  <Text
    type="list"
    text="La complejidad incrementa en ambientes de múltiples hilos de ejecución."
    tag="li"
  />,
  <Text
    type="list"
    text="Complejidad al realizar pruebas unitarias debido al uso de elementos estáticos."
    tag="li"
  />,
];
export const uses = [
  <Text
    type="list"
    text="El patrón Factory te permite desacoplar la creación de objetos de su implementación"
    tag="li"
  />,
  <Text
    type="list"
    text="Con el patrón Factory, puedes centralizar toda la lógica de creación de objetos en una sola clase o función"
    tag="li"
  />,
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
  <Text
    type="list"
    text="Creación de componentes dinámicos en una interfaz de usuario (Variaciones de un componente)"
    tag="li"
  />,
  <Text
    type="list"
    text="Consumo de API externas para obtener datos (Manejar las solicitudes de API de manera más eficiente)"
    tag="li"
  />,
  <Text
    type="list"
    text="Aplicación de análisis de datos con gráficos (Según una serie de datos variar de gráficos)"
    tag="li"
  />,
];
export const helper =
  "A pattern that give an interface to create objects by a superclase, while the subclases can modify the objects that it's created.";

export const code = [
  `// Interface Pet to any Animal that will be created in the factories
  abstract class Pet {
    abstract doAnySound();
  }

  class Dog extends Pet {
    doAnySound(): void {
        console.log('Guaf Guaf!');
    }
  }

  class Cat extends Pet {
    doAnySound(): void {
      console.log('Purrrr!');
    }
  }`,
  `// Interface 'PetFactory' to all the factories that will be return the same Class
  abstract class PetFactory {
    abstract addPet();
  }

  class DogFactory extends PetFactory {
    createPet(): Dog {
      return new Dog();
    }
  }

  class CatFactory extends PetFactory {
    createPet(): Cat {
      return new Cat();
    }
  }`,
  `// Function will create a factory by a param
  const appFactory = (factory: PetFactory) => {
    const pet: Pet = factory.createPet();
    pet.doAnySound(); // Any Sound
  }`,
  `// Function that asigns a factory by Type and return the Factory Type
  const createFactory = (type: FactoryType) => {
    const factories = {
      [FactoryType.CAT]: CatFactory,
      [FactoryType.DOG]: DogFactory,
    }
    const Factory = factories[type];
    return new Factory();
  }

  appFactory(createFactory(FactoryType.CAT)); // Purrrr!
  appFactory(createFactory(FactoryType.DOG)); // Guaf Guaf!
  `,
];

export const issue = [
  <Text
    type="list"
    text="When you created an app, it's very common develop only"
  >
    <Text type="common" text="thinking in the actual feature" isHighlight />
    <Text type="common" text="but doesn't in the future. That generates" />
    <Text type="common" text="acopled problems." isHighlight />
  </Text>,
  <Text
    type="list"
    text="Think, you are creating an app to veterinary, and you need to create a system to manage pets, today the requierement it's only to dogs, but in the future you need to implement's the same software to Cat's. "
  >
    <Text type="common" text="¿What do you going to do?" isHighlight />
  </Text>,
];

export const solution = [
  <Text type="list" text="This pattern allow the possibility to create">
    <Text type="common" text="Animals Class" isCode />
    <Text type="common" text="by a" />
    <Text type="common" text="Creator Super-Class" isCode />
    <Text
      type="common"
      text="the reason: Have a centralizated creator of elements with the same purpose."
    />
  </Text>,
  <Text type="list" text="The ">
    <Text type="common" text="Dog Class" isCode />
    <Text type="common" text="will be saved as" />
    <Text type="common" text="Pet" isCode />
    <Text type="common" text="in the veterinary, and the" />
    <Text type="common" text="Cat Class" isCode />
    <Text type="common" text="have a similar interaction, those have some differences, the Dog don't purr, so the implementation of the" />
    <Text type="common" text="DoingASound()" isCode />
    <Text type="common" text="method" isHighlight />
    <Text
      type="common"
      text="will be different for the Cat and the Dog."
    />
  </Text>,
  <Text
    type="list"
    text="Think, you are creating an app to veterinary, and you need to create a system to manage pets,
    today the requierement it's only to dogs, but in the future you need to implement's the same software to Cat's.
    *¿What do you going to do?*"
    tag="li"
  />,
];

export const usageTips = [
  <Text type="list" text="">
    <Text type="common" text="Uncertainty and Scalable Software:" isBolder />
    <Text type="common" text="Use the Factory Method" />
    <Text
      type="common"
      text="when you don’t know beforehand the exact types and dependencies of the objects"
      isHighlight
    />
    <Text type="common" text="your code should work with." />
  </Text>,
  <Text type="list" text="">
    <Text type="common" text="Extend a Element:" isBolder />
      <Text
        type="common"
        text="Use the Factory Method when you want to provide users of your library or framework with a way to"
      />
      <Text type="common" text="extend its internal components." isHighlight />
  </Text>,
  <Text type="list" text="">
    <Text type="common" text="Reuse an Element for Memory:" isBolder />
    <Text type="common" text="Use the Factory Method when you want to " />
    <Text type="common" text="save system resources by reusing" isHighlight />
    <Text
      type="common"
      text="existing objects instead of rebuilding them each time. "
    />
  </Text>
];

export default {};

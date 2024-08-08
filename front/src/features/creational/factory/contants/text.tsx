import React from 'react';
import { SHAPES, FACTORY } from './graphs.ts';
import { Text } from '../../../common/components/Text.tsx';

export const mainText = {
  graph: FACTORY,
  text: [
    {
      text: 'This pattern allows us to ',
    },
    {
      text: 'have a main class that create and modify sub-classes ',
      isHighlight: true,
    },
    {
      text: "This pattern allows us to define the behavior of it's subclasses through an extension of a main class or interface, functioning as an abstract class that is implemented by it's subclasses. ",
    },
    {
      text: "It's objective is to provide an interface to create objects based from a main class or interface",
      isHighlight: true,
    },
  ],
};

export const pros = [
  <Text
    type="list"
    text="Unable the possibility to coupled the implementation between the created elements"
    tag="li"
  />,
  <Text
    type="list"
    text="The element creation occurs in a single point"
    tag="li"
  />,
  <Text
    type="list"
    text="Add new products don't require modify a lot of code"
    tag="li"
  >
    <Text type="common" text="Only Extend it" isHighlight />
  </Text>,
];
export const cons = [
  <Text
    type="list"
    text="The pattern resolve two problems at the same time, creation and access to it's instances, so it breaks the principle of Single Responsibility."
    tag="li"
  />,
  <Text
    type="list"
    text="The complexity increases on environments of multiple threads."
    tag="li"
  />,
  <Text
    type="list"
    text="Complexity when performing unit tests due to the use of static elements."
    tag="li"
  />,
];
export const uses = [
  <Text
    type="list"
    text="The factory pattern allow decoupling object creation from implementation"
    tag="li"
  />,
  <Text
    type="list"
    text="Using the Factory Pattern, you can concentrate all the object creation logic in a single Class or function."
    tag="li"
  />,
  <Text
    type="list"
    text="It Allow you to add new object types or change the implementation of existing objects without modifying the used code that uses them."
    tag="li"
  />,
];
export const applications = {
  graph: SHAPES,
  text: [
    {
      text: 'We will use the Factory Pattern to create shapes on a canvas, such as Circles, Triangles, Squares, an others; ',
      isHighlight: true,
    },
    {
      text: "Depending of the user's selection will rendered an element from a main class", 
    },
  ],
};
export const examples = [
  <Text
    type="list"
    text="Dynamic component creation in the UI (Variations of the same component)"
    tag="li"
  />,
  <Text
    type="list"
    text="Fetch an API to get some data (Manage the API requests more efficiently)"
    tag="li"
  />,
  <Text
    type="list"
    text="Graphic analysis of data (Depending on the data, the graphs will be different)"
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
    text="When you created an app, it's very common develop only "
  >
    <Text type="common" text="thinking in the actual feature " isHighlight />
    <Text type="common" text="but doesn't in the future. That generates " />
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
  <Text type="list" text="This pattern allow the possibility to create ">
    <Text type="common" text="Animals Class " isCode />
    <Text type="common" text="by a " />
    <Text type="common" text="Creator Super-Class " isCode />
    <Text
      type="common"
      text="the reason: Have a centralizated creator of elements with the same purpose."
    />
  </Text>,
  <Text type="list" text="The ">
    <Text type="common" text="Dog Class" isCode />
    <Text type="common" text="will be saved as " />
    <Text type="common" text="Pet" isCode />
    <Text type="common" text="in the veterinary, and the " />
    <Text type="common" text="Cat Class" isCode />
    <Text
      type="common"
      text="have a similar interaction, those have some differences, the Dog don't purr, so the implementation of the "
    />
    <Text type="common" text="DoingASound()" isCode />
    <Text type="common" text="method" isHighlight />
    <Text type="common" text="will be different for the Cat and the Dog." />
  </Text>,
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
  </Text>,
];

export default {};

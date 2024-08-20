import React from 'react';
import { Text } from '../../../common/components/Text.tsx';
import { PROTOTYPE, TEMPLATES } from './graph.ts';

export const applications = {
  graph: TEMPLATES,
  text: [
    {
      text: 'In this case we gonna to mix the ',
    },
    {
      text: 'Prototype Pattern and Observer Pattern. ',
      isCode: true,
    },
    {
      text: 'The main elements are the ',
    },
    {
      text: 'A (Form Controller Component)',
      isCode: true,
    },
    {
      text: 'and ',
    },
    {
      text: 'B (Form Render Component)',
      isCode: true,
    },
    {
      text: '',
      isBlock: true,
    },
    {
      text: 'B (Form Render Component)',
      isCode: true,
    },
    {
      text: 'are subscribe to ',
    },
    {
      text: 'O (Observer)',
      isCode: true,
    },
    {
      text: 'to notify without unnecessary process even time that a template is cloned and created to been manage by ',
    },
    {
      text: 'C (Template Manager)',
      isCode: true,
    },
    {
      text: 'that manages all the ',
    },
    {
      text: 'D (Templates Class)',
      isCode: true,
    },
    {
      text: 'and all the new clones. ',
    },
    {
      text: '',
      isBlock: true,
    },
    {
      text: 'Each ',
    },
    {
      text: 'D (Templates Class)',
      isCode: true,
    },
    {
      text: 'Implements the  ',
    },
    {
      text: 'I (Clone Interface)',
      isCode: true,
    },
    {
      text: 'for this reason the class defines the clone behavior, where ',
    },
    {
      text: 'the clone process is simple and fast .',
      isHighlight: true,
    },
  ],
};
export const code = [
  `
  // Create the Cloneable Interface that will be implemented by the All classes
  interface Cloneable {
    clone(): Cloneable;
  }
  `,
  `
  // Create a Class that will implement the Cloneable Interface
  class PTDocument implements Cloneable {
    title: string;
    content: string;
    author: string;
    creationDate: Date;

    constructor(
      title: string,
      content: string,
      author: string,
      creationDate: Date
    ) {
      this.title = title;
      this.content = content;
      this.author = author;
      this.creationDate = creationDate;
    }

    // Método para clonar el documento
    clone(): PTDocument {
      return new PTDocument(
        this.title,
        this.content,
        this.author,
        new Date(this.creationDate)
      );
    }

    // Método para mostrar el content del documento (solo para visualización)
    showDocument(): void {
      console.log('Title: this.title');
      console.log('Content: this.content');
      console.log('Author: this.author');
      console.log('Creation Date: this.creationDate.toDateString()');
    }
  }
  `,
  `
  // Create a new Class
  const originalDocument = new PTDocument(
    'PTDocument Original',
    'Este es el content del documento original.',
    'Juan Pérez',
    new Date()
  );
  // Clone the Original Class and config only the properties that will be necessary
  const clonedDocument = originalDocument.clone();
  clonedDocument.title = 'PTDocument Clonado';
  clonedDocument.author = 'Ana López';
  `,
  `
  // Print the Original and Cloned Documents to check that doesn't have any memory leaks
  console.log('Original:');
  originalDocument.showDocument();

  console.log('Cloned:');
  clonedDocument.showDocument();
  `,
];
export const cons = [
  <Text
    type="common"
    text="You will increase the complexity of the code cause this pattern requires to create a lot of classes and constructors."
    tag="li"
  />,
  <Text type="common" text="Copy objects with " tag="li">
    <Text text="circular references" isHighlight type="common" />
    <Text text="will cause memory leaks." type="common" />
  </Text>,
];
export const examples = [
  <Text
    text="Creation and customization of heavy components, like Widgets, Charts, Tables, etc."
    type="list"
    tag="li"
  />,
  <Text
    text="Creation of Web templates that shared the same structure and the same behavior"
    type="list"
    tag="li"
  />,
  <Text
    text="Excellent option to create styled components library"
    type="list"
    tag="li"
  />,
];
export const helper = "Let's create new objects in base of an existing object";
export const issue = [
  <Text
    type="list"
    text="You need to create a copy of an Object with the same properties, but with different characteristics "
    tag="li"
  >
    <Text type="common" text="and prevents the memory leaks" isHighlight />
  </Text>,
  <Text
    type="list"
    text="When you copy an object you need to access to the private properties or the constructor"
    tag="li"
  ></Text>,
  <Text type="list" text="With JS have a deep problem " tag="li">
    <Text type="common" text="about the Memory Heap References " isHighlight />
    <Text
      type="common"
      text="and the conventional languages need to write a lot of code to avoid this problem."
    />
  </Text>,
  <Text type="list" text="In the veterinary case " tag="li">
    <Text
      type="common"
      text="you need to registry a lot of patients, but all of them have the same characteristics, some properties such "
    />
    <Text type="common" text="name, age, sex, medical history, etc." isCode />
    <Text type="common" text="¿How will do you do that?" isHighlight />
  </Text>,
];
export const mainText = {
  graph: PROTOTYPE,
  text: [
    {
      text: 'Can create new objects by the copy of an existing object. The principal class will implements an ',
    },
    {
      text: 'Clonable interface that defines a clone method ',
      isHighlight: true,
    },
    {
      text: 'that returns a new Object with the same properties as the original object ',
    },
    {
      text: 'differentiating the memory space from the original object. ',
      isHighlight: true,
    },
  ],
};
export const pros = [
  <Text type="list" text="The cloning process is " tag="li">
    <Text type="common" text="simple and fast" isHighlight />
  </Text>,
  <Text type="list" text="An alternative to the inheritance" tag="li" />,
  <Text
    type="list"
    text="Can clone Objects without uncoupled to their "
    tag="li"
  >
    <Text type="common" text="Concrete Classes" isCode />
  </Text>,
];
export const solution = [
  <Text type="list" text="This pattern suggests that you shared an " tag="li">
    <Text type="common" text="Clonning Interface" isCode />
    <Text type="common" text="that provided an unique " />
    <Text type="common" text="Clone Method" isCode />
    <Text
      type="common"
      text="this one will be similar in each implementation"
    />
  </Text>,
  <Text
    type="list"
    text="The use is simple, when the object is already copied only miss change the properties "
    tag="li"
  />,
  <Text
    type="list"
    text="In the Vet example, this pattern allow you create new Patients fast and easy, without overload the system creating a lot of "
    tag="li"
  >
    <Text type="common" text="Patients" isCode />
  </Text>,
];
export const usageTips = [
  <Text type="list" text="" tag="li">
    <Text type="common" text="Deep Clone: " modifier="bold" />
    <Text
      type="common"
      text="Ensure to clone all the objects and sub instances that the Object has"
    />
  </Text>,
  <Text type="list" text="" tag="li">
    <Text type="common" text="Dynamic Objects: " modifier="bold" />
    <Text
      type="common"
      text="This pattern is excellent to flows that needs an interactive UI"
    />
  </Text>,
  <Text type="list" text="" tag="li">
    <Text type="common" text="Save Resources: " modifier="bold" />
    <Text
      type="common"
      text="Check if the clone process is faster than the original one. If not, is better create a new object"
    />
  </Text>,
  <Text type="list" text="" tag="li">
    <Text type="common" text="Clone Interface: " modifier="bold" />
    <Text
      type="common"
      text="All the implementations will used the same interface, to do that all the classes have the same clone behavior"
    />
  </Text>,
];
export const uses = [
  <Text type="list" text="When you need to create " tag="li">
    <Text type="common" text="complex objects" isHighlight />
  </Text>,
  <Text
    type="list"
    text="Repetitive creation tasks that only needs to change "
    tag="li"
  >
    <Text type="common" text="some properties. " isHighlight />
    <Text type="common" text="Allow's reuse initial configs saving resources" />
  </Text>,
  <Text
    type="list"
    text="Reduce the code complexity, increase the maintainability and flexibility"
    tag="li"
  />,
];

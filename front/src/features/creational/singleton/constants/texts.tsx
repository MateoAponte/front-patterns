import React from 'react';
import { REDUX_STORE, SINGLETON } from './graph.ts';
import { Text } from '../../../common/components/Text.tsx';

export const mainText = {
  graph: SINGLETON,
  text: [
    {
      text: 'Pattern that ensures a element can have only one instance and its modification can only be done in one place ',
    },
    {
      text: 'modification can only be done in one place.',
      isHighlight: true,
    },
  ],
};
export const applications = {
  graph: REDUX_STORE,
  text: [
    {
      text: 'An example applicable in Front, can be a notification system. By a centeral component ',
    },
    {
      text: 'managementthe life cycle of all the notifications of the system',
      isHighlight: true,
    },
  ],
};
export const pros = [
  <Text text="Highly control for the access of the system" type="list" />,
  <Text text="Give a global point to interact with the system" type="list" />,
  <Text
    text="Helps to shared resource management preventing a lot of configurations and repetitive code."
    type="list"
  />,
];
export const uses = [
  <Text
    text="Used when you need a single point of access to shared resources but don't need synchronized access."
    type="list"
  />,
  <Text
    text="Need a strict control of the access to the system at global level."
    type="list"
  />,
];
export const examples = [
  <Text
    text="Globally State Management, like Stores when even store is responsible for the state of self one."
    type="list"
  />,
  <Text
    text="Connection, network pools or service layers providing a shared resource on various parts of the application."
    type="list"
  />,
  <Text
    text="A loggin system is an excelent idea to implement this pattern, allowing to share the same instance of the logger."
    type="list"
  />,
];
export const cons = [
  <Text
    text="The pattern solves two problems at the same time, creation and access to its instances, so it"
    type="list"
  >
    <Text
      type="common"
      text="vulnerable the principle of Responsibility Unique."
      isHighlight
    />
  </Text>,
  <Text
    text="Since have a shared instance, difficult the process of testing and debugging."
    type="list"
  />,
  <Text text="Could have " type="list">
    <Text type="common" text="synchronization problems " isHighlight />
    <Text
      type="common"
      text=" when the system is under heavy load. and performance issues."
    />
  </Text>,
];
export const helper =
  "A pattern that give an interface to create objects by a superclase, while the subclases can modify the objects that it's created.";

export const code = [
  `// Interface to notification system that advices a new patient of the veterinary
  class Pet {
    private id: number;
    private name: string;
    private date: string;

    public getName(): string {
      return this.name;
    }
    public getDate(): number {
      return this.date;
    }
    public getId(): number {
      return this.id;
    }
  }`,
  `
  // Class that management the notifications
class NotificationSystem {
  private static instance: NotificationSystem;
  private pets: Array<Pet>;

  private constructor(pets: Array<Pet>) {
    this.pets = pets;
  }

  static add(item: Pet, pos: number): void {
    if (this.instance.pets.length <= 0) {
      this.instance.pets.push(item);
    } else {
      this.instance.pets.splice(pos, 0, item);
    }
  }
  static deleteById(id: Number): void {
    if (id) {
      const index: Number = this.pets.findIndex((item: Pet) => item.getId() === id);
      this.pets.slice(index, 1);
    }
  }
  static getInstance(): NotificationSystem {
    return this.instance;
  }
  static createInstance(pets: Array<Pet>) {
    if (!NotificationSystem.instance) {
      NotificationSystem.instance = new NotificationSystem(pets);
    } else {
      console.console.error('Instance is already created');
    }
    return NotificationSystem.instance;
  }
}`,
  `// Function that implement the NotificationSystem and interact with the app
const veterinaryApp = () => {
  const shopping = NotificationSystem.createInstance([]);
  NotificationSystem.add(
    {
      id: 0,
      name: 'Luna the Pitbull',
      date: '07/31/2024',
    },
    0,
  );
  NotificationSystem.add(
    {
      id: 1,
      name: 'Destroyer the Shitzu',
      date: '07/15/2024',
    },
    1,
  );
  console.log(NotificationSystem.getInstance());
};
veterinaryApp();
`,
];

export const issue = [
  <Text
    type="list"
    text="When the app have a lot of entry points to modify the same element "
  >
    <Text
      type="common"
      text="difficult the debugging and encrease the system complexity "
      isHighlight
    />
  </Text>,
  <Text
    type="list"
    text="You need to read, modify and create a store Veterinary Managment, but you need to share the same Pet's information for each file that used that "
  >
    <Text type="common" text="¿What do you going to do?" isHighlight />
  </Text>,
];

export const solution = [
  <Text type="list" text="This pattern disallow the possibility to create ">
    <Text type="common" text="Pet Store Class" isCode />
    <Text type="common" text="in all the files using the " />
    <Text type="common" text="new" isCode />
    <Text type="common" text="statement to share the same entry point." />
  </Text>,
  <Text type="list" text="The ">
    <Text type="common" text="Pet Store Class" isCode />
    <Text
      type="common"
      text="will manage all the pets information, so, if the system need to create a "
    />
    <Text type="common" text="new Pet() " isCode />
    <Text
      type="common"
      text="this method will shared this new Pet with all the system"
    />
  </Text>,
];

export const usageTips = [
  <Text type="list" text="">
    <Text type="common" text="Clearly and limited purpose:" isBolder />
    <Text
      type="common"
      text="It's necessary understand the limitation and the responsibility of this "
    />
    <Text
      type="common"
      text="to prevents that becomes in a element with multiple responsibilities."
      isHighlight
    />
  </Text>,
  <Text type="list" text="">
    <Text type="common" text="Be clear where is used:" isBolder />
    <Text
      type="common"
      text="Since provide a global access point, it's necessary to be clear where is used to prevent the side effects."
    />
  </Text>,
  <Text type="list" text="">
    <Text type="common" text="Created only when is needed:" isBolder />
    <Text
      type="common"
      text="By the nature of the Pattern, is recommended it initialization "
    />
    <Text type="common" text="only when will be used." isHighlight />
  </Text>,
];

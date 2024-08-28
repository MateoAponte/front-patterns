import React from 'react';
import { ABSTRACT, EXAMPLE } from './graph.ts';
import { Text } from '../../../common/components/Text.tsx';

export const mainText = {
  graph: ABSTRACT,
  text: [
    {
      text: 'This pattern is useful when you need to ',
    },
    {
      text: 'create a family objects ',
      isHighlight: true,
    },
    {
      text: 'giving an interface to create the related objects. ',
    },
    {
      text: 'making independent ',
    },
    {
      text: 'the creation system and each product of their family. ',
      isHighlight: true,
    },
  ],
};
export const applications = {
  graph: EXAMPLE,
  text: [
    {
      text: 'In this case we will created a system that perform like a factory of ',
    },
    {
      text: 'View Components ',
      isCode: true,
    },
    {
      text: 'creating a Header, Footer, Sidebar depending of the selection with a determine Theme Color ',
    },
    {
      text: 'that are determinate by the Variants and the Component Families',
    },
  ],
};
export const pros = [
  <Text
    type="list"
    text="Can had the certainty that all the products that will produced are compatible between their "
    tag="li"
  >
    <Text type="common" text="Factory Interface " isCode />
  </Text>,
  <Text type="common" text="">
    <Text
      type="common"
      text="Use the Single Responsibility Principle "
      isHighlight
    />
    <Text
      type="common"
      text=" when we move the creation code to a single place "
    />
  </Text>,
  <Text type="common" text="">
    <Text type="common" text="Open/Closed Principle " isHighlight />
    <Text
      type="common"
      text="can add new products without modifying the code "
    />
  </Text>,
];
export const uses = [
  <Text type="list" text="To create a family of related objects " tag="li" />,
  <Text
    type="list"
    text="When the system needs to create object variants."
    tag="li"
  />,
  <Text
    type="list"
    text="To decouple the family object creation of the business logic."
    tag="li"
    isHighlight
  />,
];
export const examples = [
  <Text
    type="list"
    text="The Abstract Factory pattern is useful in the case to create some elements that will changed between Operative Systems "
    tag="li"
  />,
  <Text
    type="list"
    text="The same case is applied when need change between family of Themes."
    tag="li"
  />,
  <Text
    type="list"
    text="When need to create Complex pages templates."
    tag="li"
  />,
];
export const cons = [
  <Text
    type="list"
    text="The code can scale in difficulty and complexity when are added a lot of interfaces and classes. "
    tag="li"
  />,
];
export const helper =
  'A pattern that gives us a way to produce entire families or factories of related objects without specifying their concrete class.';

export const code = [
  `
  // Set the Classes of all the Variants
  class CPU {
    private series: String;
    public setSeries(serie: String): void {
      this.series = serie;
      console.log('Series has setted as: this.series');
    }
    public getSeries(): String {
      return this.series
    }
  }

  class Memory {
    private capacityInGB: Number;
    public setCapacityInGB(capacityInGB: Number): void {
      this.capacityInGB = capacityInGB;
      console.log('capacityInGB has setted as: this.capacityInGB');
    }
    public getCapacityInGB(): Number {
      return this.capacityInGB
    }
  }

  class Display {
    private resolution: String;
    public setResolution(resolution: Number): void {
      this.resolution = resolution;
      console.log('Resolution has setted as: this.resolution');
    }
    public getResolution(): Number {
      return this.resolution
    }
  }`,
  `
  // Enum and determine the interface to all the Families
  enum DevicesNames {
    PHONE = 'Phone',
    LAPTOP = 'Laptop',
    TABLET = 'Tablet',
  }
  abstract class ProductFactory {
    cpu: CPU;
    memory: Memory;
    display: Display;
    type: String;
    constructor(type: String) {
      this.type = type;
    }
    public abstract createCPU(): CPU;
    public abstract createMemory(): Memory;
    public abstract createDisplay(): Display;
    showComponents() {
      return console.log('this.type Has: \n Components has: this.cpu.getSeries() - CPU, this.memory.getCapacityInGB()} - Memory, this.display.getResolution() - Resolution');
    }
  }`,
  `
  // Create the Product Factories and Families
  class PhoneFactory extends ProductFactory {
    constructor(type: String) {
      super(type);
    }
    createCPU(): CPU {
      this.cpu = new CPU();
      return  this.cpu
    }
    createMemory(): Memory {
      this.memory = new Memory();
      return this.memory
    }
    createDisplay(): Display {
      this.display = new Display();
      return this.display
    }
  }

  class LaptopFactory extends ProductFactory {
    constructor(type: String) {
      super(type);
    }
    createCPU(): CPU {
      this.cpu = new CPU();
      return  this.cpu
    }
    createMemory(): Memory {
      this.memory = new Memory();
      return this.memory
    }
    createDisplay(): Display {
      this.display = new Display();
      return this.display
    }
  }

  class TabletFactory extends ProductFactory {
    constructor(type: String) {
      super(type);
    }
    createCPU(): CPU {
      this.cpu = new CPU();
      return  this.cpu
    }
    createMemory(): Memory {
      this.memory = new Memory();
      return this.memory
    }
    createDisplay(): Display {
      this.display = new Display();
      return this.display
    }
  }`,
  `
  // Create the Product Factories and determine the characteristics of each one
  const appDevices = (factory: ProductFactory) => {
    const cpu = factory.createCPU();
    const memory = factory.createMemory();
    const display = factory.createDisplay();

    cpu.setSeries('CPU');
    memory.setCapacityInGB(1000);
    display.setResolution(1920);
    factory.showComponents();
  };
  `,
  `
  // Enum and determine all the possible factories to build each Family and Characteristics
  enum DevicesFactories {
    [DevicesNames.PHONE] = PhoneFactory;
    [DevicesNames.LAPTOP] = LaptopFactory;
    [DevicesNames.TABLET] = TabletFactory;
  }

  const buildDevices = (type: String) => {
    const Factory = DevicesFactories[type];
    return new Factory(type);
  }

  appDevices(buildDevices(DevicesNames.PHONE))
  appDevices(buildDevices(DevicesNames.LAPTOP))
  appDevices(buildDevices(DevicesNames.TABLET))
`,
];

export const issue = [
  <Text
    type="list"
    text="Your code is composed by some classes that are related "
  >
    <Text type="common" text="like some furniture " isHighlight />
    <Text type="common" text="each of these had some variants such as, " />
    <Text type="common" text="Modern, " isCode />
    <Text type="common" text="Victorian, " isCode />
    <Text type="common" text="and " />
    <Text type="common" text="ArtDeco " isCode />
    <Text type="common" text="in this way can create similar elements but  " />
    <Text type="common" text="different family" isHighlight />
  </Text>,
  <Text type="list" text="In the veterinarian case we can have ">
    <Text type="common" text="treatments management system " isHighlight />
    <Text
      type="common"
      text="that have variants by animal type. Each animal will receive a different treatment "
    />
    <Text type="common" text="¿How will do you do that?" isHighlight />
  </Text>,
];

export const solution = [
  <Text type="list" text="First of all, we need to create some " tag="li">
    <Text type="common" text="Factory Interfaces " isCode />
    <Text
      type="common"
      text="for each product that belongs a different family. "
    />
    <Text type="common" text="Each of them implements a " />
    <Text type="common" text="Family Interface " isCode />
    <Text
      type="common"
      text="that provides the methods the common structure for the variant"
    />
  </Text>,
  <Text type="list" text="Coming back to the veterinarian case, " tag="li">
    <Text
      type="common"
      text="We have different treatments for each animal type, "
    />
    <Text type="common" text="to do this the " />
    <Text type="common" text="Animal Factories" isCode />
    <Text type="common" text="Will implement other interfaces by each " />
    <Text type="common" text="Treatment Interface" isCode />
  </Text>,
];

export const usageTips = [
  <Text
    type="list"
    text="Study and have clear all the relationships between the objects that will be created."
    tag="li"
  />,
  <Text
    type="list"
    text="Keeps the code Fabrics simples, easy and cohesive."
    tag="li"
    isHighlight
  />,
  <Text type="list" text="Prevents the code duplication." tag="li" />,
  <Text type="list" text="Prevents the code overhead complexity." tag="li" />,
];

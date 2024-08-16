import React from 'react';
import { Text } from '../../../common/components/Text.tsx';
import { BUILDER } from './graph.ts';

export const mainText = {
  graph: BUILDER,
  text: [
    {
      text: "Let's you construct complex objects by using a ",
    },
    {
      text: 'step-by-step process ',
      isHighlight: true,
    },
    {
      text: 'this allows to produce different types of the same object ',
    },
    {
      text: 'using the same code. ',
      isHighlight: true,
    },
  ],
};

export const issue = [
  <Text
    type="list"
    text="You need to create a lot of objects with very complex properties and all of them are similar, but have some different characteristics between them."
    tag="li"
  />,
  <Text type="list" text="Using a conventional class you need to " tag="li">
    <Text
      type="common"
      text="create a constructor that will accept a lot of parameters."
      isHighlight
    />
  </Text>,
  <Text
    type="list"
    text="In the veterinary case, imagine that you have a system that assigns a pet a serie of procedures "
  >
    <Text type="common" text="¿How will do you do that?" isHighlight />
  </Text>,
];

export const pros = [
  <Text type="list" text="Respect the " tag="li">
    <Text type="common" text="Single Responsibility Principle" isHighlight />
    <Text
      type="common"
      text=". You can isolate the complex construction code from the business logic."
    />
  </Text>,
  <Text
    type="list"
    text="You can reuse the same construction code to add some steps from the element representations"
    tag="li"
  />,
  <Text
    type="list"
    text="The step-by-step process give to the code scalability and maintainability"
    tag="li"
  />,
];
export const cons = [
  <Text
    type="common"
    text="You will increase the complexity of the code cause this pattern requires to create a lot of classes and constructors."
    tag="li"
  />,
];
export const uses = [
  <Text
    type="common"
    text="When you need to create a complex feature but search "
    tag="li"
  >
    <Text
      type="common"
      text="scalability, readability and maintainability"
      isHighlight
    />
  </Text>,
  <Text
    type="common"
    text="Strict control about the elements creation"
    tag="li"
  />,
  <Text
    type="common"
    text="Reuse and reinvent some similar configurations for a result"
    tag="li"
  />,
];
export const examples = [
  <Text
    type="list"
    text="Building configurable and Complex UI Components like Graphs, Charts, Tables, etc."
    tag="li"
  />,
  <Text type="list" text="Managing Complex Component State" tag="li" />,
  <Text
    type="list"
    text="Having a Complex UI that can be customized the elements like an Editor or a Form"
    tag="li"
  />,
];
export const applications = {
  graph: BUILDER,
  text: [
    {
      text: 'In this example we are going to mix three patterns ',
    },
    {
      text: 'The Builder Method,  Observer Pattern and Factory Method. ',
      isHighlight: true,
    },
    {
      text: 'The main Elements are the ',
    },
    {
      text: 'P (Form Controllers Components)',
      isCode: true,
    },
    {
      text: 'and ',
    },
    {
      text: 'Q (Form Render Components)',
      isCode: true,
    },
    {
      text: 'each one is subscribed to Observer Method to notify the Building of a new Form Element. ',
    },
    {
      text: '',
      isBlock: true,
    },
    {
      text: 'P (Form Controller Component)',
      isCode: true,
    },
    {
      text: 'execute the ',
    },
    {
      text: 'B (Form Management)',
      isCode: true,
    },
    {
      text: 'helper that initializes ',
    },
    {
      text: 'C (Form Director)',
      isCode: true,
    },
    {
      text: 'and manages ',
    },
    {
      text: 'E (Form Elements)',
      isCode: true,
    },
    {
      text: '',
      isBlock: true,
    },
    {
      text: 'C (Form Director)',
      isCode: true,
    },
    {
      text: 'determines the element that the factory will build and set step-by-step the values of the elements that will be created. ',
    },
    {
      text: '',
      isBlock: true,
    },
    {
      text: 'All the elements that will be created are saved in the ',
    },
    {
      text: 'B (Form Management)',
      isCode: true,
    },
    {
      text: 'Helper. To finish all the elements will be rendered by ',
    },
    {
      text: 'Q (Form Render Component)',
      isCode: true,
    },
    {
      text: 'that will be notified even time the elements are created. ',
    },
  ],
};
export const helper =
  'An pattern to create complex objects by using a step-by-step process.';
export const code = [
  `
  // Provide the interface that will be implemented by the Builders and the Director
  interface CarProductionLine {
    setAirBags(airbags: Number): CarProductionLine;
    setColor(color: String): CarProductionLine;
    setEdition(edition: String): CarProductionLine;
    resetProductionLine(): void;
  }
  `,
  `
  // Create the Builders and configure all the Methods implementing the interface
  type CarCatalog = 'mastodon' | 'rhino';
  type ConstructorParams = { model: CarCatalog };
  class HatchbackProductionLine implements CarProductionLine {
    private hatchbackCar: Car;
    private internalModel: CarCatalog;

    constructor({ model }: ConstructorParams) {
      this.setInternalModel(model);
      this.resetProductionLine();
    }
    setAirBags(howMany: number): SedanProductionLine {
      console.log(this.hatchbackCar);
      this.hatchbackCar.airBags = howMany;
      return this;
    }
    setColor(color: String): SedanProductionLine {
      this.hatchbackCar.color = color;
      return this;
    }
    setEdition(edition: String): SedanProductionLine {
      this.hatchbackCar.edition = edition;
      return this;
    }
    resetProductionLine(): void {
      this.hatchbackCar = this.internalModel === 'mastodon' ? new MastodonCar() : new RhinoCar();
    }
    build(): Car {
      this.setModel();
      const hatchbackCar = this.hatchbackCar;
      this.resetProductionLine();
      return hatchbackCar;
    }
    setModel(): void {
      this.hatchbackCar.model = 'hatchback';
    }
    setInternalModel(model: CarCatalog): void {
      this.internalModel = model;
    }
  }
  class SedanProductionLine implements CarProductionLine {
    private sedanCar: Car;
    private internalModel: CarCatalog;

    constructor({ model }: ConstructorParams) {
      this.setInternalModel(model);
      this.resetProductionLine();
    }
    setAirBags(howMany: number): SedanProductionLine {
      this.sedanCar.airBags = howMany;
      return this;
    }
    setColor(color: String): SedanProductionLine {
      this.sedanCar.color = color;
      return this;
    }
    setEdition(edition: String): SedanProductionLine {
      this.sedanCar.edition = edition;
      return this;
    }
    resetProductionLine(): void {
      this.sedanCar = this.internalModel === 'mastodon' ? new MastodonCar() : new RhinoCar();
      console.log(this.internalModel);
    }
    build(): Car {
      this.setModel();
      const sedanCar = this.sedanCar;
      this.resetProductionLine();
      return sedanCar;
    }
    setModel(): void {
      this.sedanCar.model = 'sedan';
    }
    setInternalModel(model: CarCatalog): void {
      this.internalModel = model;
    }
  }
  `,
  `
  // Create a class that will be extender from the specific Cars Models
  type AvailibleColors = 'black' | 'red' | 'blue';
  class Car {
    private _edition: String;
    private _model: String;
    private _airBags: Number;
    private _color: AvailibleColors = 'black';
    constructor() {
      this._edition = '';
      this._model = '';
      this._airBags = 2;
      this._color = 'black';
    }
    set edition(edition: String) {
      this._edition = edition;
    }
    set model(model: String) {
      this._model = model;
    }
    set airBags(howMany: Number) {
      this._airBags = howMany;
    }
    set color(color: String) {
      this._color = color;
    }
  }

  class RhinoCar extends Car {
    constructor() {
      super();
    }
  }
  class MastodonCar extends Car {
    constructor() {
      super();
    }
  }
  `,
  `
  // Create the director and all the methods that will combine the properties of the Builders
  class Director {
    public productionLine: CarProductionLine;
    setProductionLine(productionLine: CarProductionLine) {
      this.productionLine = productionLine;
    }

    buildCvtEdition(): void {
      this.productionLine.setAirBags(4).setColor('blue').setEdition('CVT');
    }
    buildSignatureEdition(): void {
      this.productionLine.setAirBags(8).setColor('red').setEdition('Signature');
    }
    buildSportEdition(): void {
      console.log(this.productionLine);
      this.productionLine.setAirBags(1).setColor('blue').setEdition('Sport');
    }
  }

  const appBuilder = (director: Director) => {
    // Set the Builders and define the model that will be created
    const mastodonSedanProductionLine = new SedanProductionLine({ model: 'mastodon' });
    const rhinoHatchbackProductionLine = new HatchbackProductionLine({ model: 'rhino' });

    // Define the Class that the Director will configure and Build the CVT Edition
    director.setProductionLine(mastodonSedanProductionLine);
    director.buildCvtEdition();
    const mastodonSedanCvt = mastodonSedanProductionLine.build();
    console.log(mastodonSedanCvt);

    // Build the Signature Edition of the Mastodon Sedan
    director.buildSignatureEdition();
    const mastodonSedanSignature = mastodonSedanProductionLine.build();
    console.log(mastodonSedanSignature);

    // Define the Class that the Director will configure and Build the Sport Edition
    director.setProductionLine(rhinoHatchbackProductionLine);
    director.buildSportEdition();
    const rhinoHatchbackSport = rhinoHatchbackProductionLine.build();
    console.log(rhinoHatchbackSport);
  };

  // Create and execute the Director
  appBuilder(new Director());
  `,
];
export const solution = [
  <Text
    type="list"
    text="This pattern suggests that you extract the object construction code and move it separating objects called ."
    tag="li"
  >
    <Text type="common" text="Builders" isCode />
    <Text type="common" text=". Where which of them implements a " />
    <Text type="common" text="Builder Interface " isCode />
    <Text
      type="common"
      text="That determine all the possible combinations of the objects that can be created by "
    />
    <Text type="common" text="Methods" isCode />
  </Text>,
  <Text
    type="list"
    text="To prevent the creation of a lot of constructors and classes, this pattern suggests create a "
    tag="li"
  >
    <Text type="common" text="Director" isCode />
    <Text
      type="common"
      text="This class is responsible for orchestrating the use of the different builders and return the finalized object"
      isHighlight
    />
  </Text>,
  <Text
    type="list"
    text="In the Vet example, we have a system of default procedures such the "
    tag="li"
  >
    <Text type="common" text="Director Class" isCode />
    <Text type="common" text=" and this will received the " />
    <Text type="common" text="Pet Type Builder" isCode />
    <Text
      type="common"
      text="To assign which procedures will be executed and return a list with all the procedures that are required."
    />
  </Text>,
];
export const usageTips = [
  <Text
    type="list"
    text="Make sure that you can clearly define the common construction steps "
    tag="li"
  />,
  <Text
    type="list"
    text="Make a easily implementation of the Method Chaining"
    tag="li"
  />,
  <Text
    type="list"
    text="Make all the Builders Reusable to prevents coupling"
    tag="li"
  />,
  <Text
    type="list"
    text="Prevent invalid states, make sure to return and reset the Director every time you Build a new Element"
    tag="li"
  />,
];

interface CarProductionLine {
  setAirBags(airbags: Number): CarProductionLine;
  setColor(color: String): CarProductionLine;
  setEdition(edition: String): CarProductionLine;
  resetProductionLine(): void;
}

type CarCatalog = 'mastodon' | 'rhino';
type ConstructorParams = { model: CarCatalog };
class HatchbackProductionLine implements productionLine {
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

type AvailibleColors = 'black' | 'red' | 'blue';
class Car {
  private _edition: String;
  private _model: String;
  private _airBags: Number;
  private _color: AvailibleColors = 'black';
  constructor({ edition, model, airBags, color }) {
    this._edition = edition || 'Sedan';
    this._model = model || 'CVT';
    this._airBags = airBags || 2;
    this._color = color || 'red';
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
  abstract clone(): void;
}

class RhinoCar extends Car {
  constructor(carToClone) {
    super({
      edition: carToClone?._edition,
      color: carToClone?._color,
      model: carToClone?._model,
      airBags: carToClone?._airBags,
    });
  }

  clone() {
    return new RhinoCar(this);
  }
}
class MastodonCar extends Car {
  constructor(carToClone) {
    super({
      edition: carToClone?._edition,
      color: carToClone?._color,
      model: carToClone?._model,
      airBags: carToClone?._airBags,
    });
  }

  clone() {
    return new MastodonCar(this);
  }
}

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
  const mastodonSedanProductionLine = new SedanProductionLine({ model: 'mastodon' });

  director.setProductionLine(mastodonSedanProductionLine);
  director.buildCvtEdition();
  const mastodonSedanCvt = mastodonSedanProductionLine.build();
  console.log(mastodonSedanCvt);
  const mastodonSedanCvtClone = mastodonSedanCvt.clone();
  console.log(mastodonSedanCvtClone);

  director.buildSignatureEdition();
  const mastodonSedanSignature = mastodonSedanProductionLine.build();
  console.log(mastodonSedanSignature);
};

appBuilder(new Director());

// Ejemplo

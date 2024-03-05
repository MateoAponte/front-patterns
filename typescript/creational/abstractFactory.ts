// Definición de las Clases principales (Familias) y su contratoo
interface Car {
  useGPS(): void;
}
class MastodonCar implements Car {}
class RhinoCar implements Car {}

// Definición y comportamiento de los modelos derivadas de las Clases principales
enum CarsModelName {
  SEDAN = 'Sedan',
  HATCHBACK = 'Hatchback',
}
class MastodonSedanCar extends MastodonCar {
  useGPS() {
    console.log(`${CarsModelName.SEDAN} Model Mastodon has GPS`);
  }
}
class MastodonHatchbackCar extends MastodonCar {
  useGPS() {
    console.log(`${CarsModelName.HATCHBACK} Model Mastodon has GPS`);
  }
}
class RhinoSedanCar extends RhinoCar {
  useGPS() {
    console.log(`${CarsModelName.SEDAN} Model Rhino has GPS`);
  }
}
class RhinoHatchbackCar extends RhinoCar {
  public useGPS() {
    console.log(`${CarsModelName.HATCHBACK} Model Rhino has GPS`);
  }
}

// Creación de una clase Abstracta para definir el comportamiento de las demás Factories por familia
interface CarAbstractFactory {
  createMastodon(): MastodonCar;
  createRhino(): RhinoCar;
}

// Creación de las Factories finales que retornaran las familias existentes por modelo
class SedanCarFactory implements CarAbstractFactory {
  public createMastodon() {
    return new MastodonSedanCar();
  }
  public createRhino() {
    return new RhinoSedanCar();
  }
}
class HatchbackCarFactory implements CarAbstractFactory {
  public createMastodon() {
    return new MastodonHatchbackCar();
  }
  public createRhino() {
    return new RhinoHatchbackCar();
  }
}

// Creación de función para mostrar los carros por Familia
const appCarFactory = (factory) => {
  const mastodon = factory.createMastodon();
  const rhino = factory.createRhino();

  mastodon.useGPS();
  rhino.useGPS();
};

// Diccionario de Modelos relacionados a la factory de Modelos
enum Factories {
  [CarsModelName.SEDAN] = SedanCarFactory,
  [CarsModelName.HATCHBACK] = HatchbackCarFactory,
}
const createFactory = (type: String) => {
  const Factory = Factories[type];
  return new Factory();
};

appCarFactory(createFactory(CarsModelName.SEDAN));
appCarFactory(createFactory(CarsModelName.HATCHBACK));

// Ejemplo

class CPU {
  private series: String;
  public setSeries(serie: String): void {
    this.series = serie;
    console.log(`Series has setted as: ${this.series}`);
  }
  public getSeries(): String {
    return this.series
  }
}
class Memory {
  private capacityInGB: Number;
  public setCapacityInGB(capacityInGB: Number): void {
    this.capacityInGB = capacityInGB;
    console.log(`capacityInGB has setted as: ${this.capacityInGB}`);
  }
  public getCapacityInGB(): Number {
    return this.capacityInGB
  }
}
class Display {
  private resolution: String;
  public setResolution(resolution: Number): void {
    this.resolution = resolution;
    console.log(`Resolution has setted as: ${this.resolution}`);
  }
  public getResolution(): Number {
    return this.resolution
  }
}

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
    return console.log(`${this.type} Has: \n Components has: ${this.cpu.getSeries()} - CPU, ${this.memory.getCapacityInGB()} - Memory, ${this.display.getResolution()} - Resolution`);
  }
}
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
}

const appDevices = (factory: ProductFactory) => {
  const cpu = factory.createCPU();
  const memory = factory.createMemory();
  const display = factory.createDisplay();

  cpu.setSeries('CPU');
  memory.setCapacityInGB(1000);
  display.setResolution(1920);
  factory.showComponents();
};

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

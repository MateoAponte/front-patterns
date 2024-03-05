class BaseCar {
  abstract showCost(): void {}
}
class MastodonCar extends BaseCar {
  showCost(): void {
    console.log('Mastodon Car Cost: 1.900.000 COL');
  }
}
class RhinoCar extends BaseCar {
  showCost(): void {
    console.log('Rhino Car Cost: 2.900.000 COL');
  }
}

class CarFactory() {
  abstract makeCar(): void {}
}
class MastodonCarFactory extends CarFactory {
  makeCar(): MastodonCar {
    return new MastodonCar();
  }
}
class RhinoCarFactory extends CarFactory {
  makeCar(): RhinoCar {
    return new RhinoCar();
  }
}
const appFactory = (factory: CarFactory) => {
  const car: BaseCar = factory.makeCar();
  car.showCost();
}

enum FactoryType {
  MASTODON = MastodonCarFactory,
  RHINO = RhinoCarFactory,
}
const createFactory = (type: FactoryType) => {
  const factories = {
    [FactoryType.MASTODON]: MastodonCarFactory,
    [FactoryType.RHINO]: RhinoCarFactory;
  }
  const Factory = factories[type];
  return new Factory();
}

appFactory(createFactory(FactoryType.MASTODON));
appFactory(createFactory(FactoryType.RHINO));

// Example

class HttpFactory() {
  abstract createAdapter(): void {}
}
type AdaptersType = 'Express' | 'NestJs';
abstract class HttpAdapter {
  private type: String;
  constructor(type: AdaptersType) {}
  public abstract put(): void;
  public abstract delete(): void;
  public abstract get(): void;
  public abstract post(): void;
}
class NestJsHttpAdapter extends HttpAdapter {
  constructor(type: AdaptersType) {
    super();
    this.type = type;
  }
  put() {
    console.log(`Doing put in ${this.type} Adapter`);
  }
  delete() {
    console.log(`Doing delete in ${this.type} Adapter`);
  }
  get() {
    console.log(`Doing get in ${this.type} Adapter`);
  }
  post() {
    console.log(`Doing post in ${this.type} Adapter`);
  }
}
class ExpressJsHttpAdapter extends HttpAdapter {
  constructor(type: AdaptersType) {
    super();
    this.type = type;
  }
  put() {
    console.log(`Doing put in ${this.type} Adapter`);
  }
  delete() {
    console.log(`Doing delete in ${this.type} Adapter`);
  }
  get() {
    console.log(`Doing get in ${this.type} Adapter`);
  }
  post() {
    console.log(`Doing post in ${this.type} Adapter`);
  }
}
class NestJsFactory extends HttpFactory {
  createAdapter() {
    return new NestJsHttpAdapter(AdaptersName.NESTJS);
  }
}
class ExpressJsFactory extends HttpFactory {
  createAdapter() {
    return new ExpressJsHttpAdapter(AdaptersName.EXPRESS);
  }
}
enum AdaptersName {
  EXPRESS = 'Express',
  NESTJS = 'NestJs',
}
enum AdapterDictionary {
  [AdaptersName.EXPRESS] = NestJsFactory,
  [AdaptersName.NESTJS] = ExpressJsFactory,
}

const triggerAdapters = (adapter: HttpFactory) => {
  const localHttpAdapter = adapter.createAdapter();
  localHttpAdapter.get();
  localHttpAdapter.put();
  localHttpAdapter.delete();
  localHttpAdapter.post();
}
const createAdapter = (type: String) => {
  const newAdapter = AdapterDictionary[type];
  return new newAdapter();
}
triggerAdapters(createAdapter(AdaptersName.EXPRESS))
triggerAdapters(createAdapter(AdaptersName.NESTJS))

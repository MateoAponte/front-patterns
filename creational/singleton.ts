/* Singleton */
class Singleton {
  private static instance: Singleton;
  private version: string;

  private constructor(version) {
    this.version = version;
  }

  static getInstance(version: string): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton(version);
    }
    return Singleton.instance;
  }
}

const appSingleton = () => {
  const singletonPattern1 = Singleton.getInstance('version-1');
  const singletonPattern2 = Singleton.getInstance('version-2');

  const singletonPattern3 = new Singleton();

  console.log(singletonPattern1, singletonPattern2);
};

appSingleton();

// Example
class Product {
  private id: number;
  private name: string;
  private cost: number;

  public getName(): string {
    return this.name;
  }
  public getCost(): number {
    return this.cost;
  }
  public getId(): number {
    return this.id;
  }
}

class ShoppingCar {
  private static instance: ShoppingCar;
  private products: Array<Product>;

  private constructor(products: Array<Product>) {
    this.products = products;
  }

  static add(item: Product, pos: number): void {
    if (this.instance.products.length <= 0) {
      this.instance.products.push(item);
    } else {
      this.instance.products.splice(pos, 0, item);
    }
  }
  static deleteById(id: Number): void {
    if (id) {
      const index: Number = this.products.findIndex((item: Product) => item.getId() === id);
      this.products.slice(index, 1);
    }
  }
  static getInstance(): ShoppingCar {
    return this.instance;
  }
  static createInstance(products: Array<Product>) {
    if (!ShoppingCar.instance) {
      ShoppingCar.instance = new ShoppingCar(products);
    } else {
      console.console.error('Instance is already created');
    }
    return ShoppingCar.instance;
  }
}

const appShopping = () => {
  const shopping = ShoppingCar.createInstance([]);
  ShoppingCar.add(
    {
      id: 0,
      name: 'Shirt',
      cost: 45000,
    },
    0,
  );
  ShoppingCar.add(
    {
      id: 1,
      name: 'Hat',
      cost: 25000,
    },
    1,
  );
  console.log(ShoppingCar.getInstance());
};
appShopping();

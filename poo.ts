abstract class Animal {
  public abstract move();
}

class Dog extends Animal {
  private breed: String = '';
  private weight: Number = 0;
  private age: Number = 0;
  private size: Number = 0;

  constructor(breed: String, weight: Number, age: Number, size: Number) {
    super();
    this.breed = breed;
    this.weight = weight;
    this.age = age;
    this.size = size;
  }

  public move(): void {
    console.log('Move in four paws');
  }
  public barck(): void {
    console.log('Woof!');
  }
  public eat(): void {
    console.log('Eat!');
  }
  public run(): void {
    console.log('Run!');
  }
  public sleep(): void {
    console.log('Sleep!');
  }

  public getName(): String {
    return this.breed;
  }
  public getBreed(): String {
    return this.breed.toUpperCase();
  }
  public getAge(): Number {
    return this.age;
  }
  public getSize(): Number {
    return this.size;
  }
}

const dog = new Dog('Chihuahua', 152, 5, 55);
dog.move();

class Motor {
  static init() {
    console.log('Motor makes sounds');
  }
}

class Train extends Motor {}

Train.init();

type KeyboardTypes = 'Logitech' | 'Corsair' | 'Microsoft';

interface KeyboardInt {
  keysNumber: Number;
  brand: String;
  color: String;
  type: KeyboardTypes;
}

class Keyboard implements KeyboardInt {
  public keysNumber: Number;
  public brand: String;
  public color: String;
  public type: KeyboardTypes;
  constructor(keysNumber: Number, brand: String, color: String, type: KeyboardTypes) {
    this.keysNumber = keysNumber;
    this.brand = brand;
    this.color = color;
    this.type = type;
  }
}
let keyboard = new Keyboard(115, 'Logitech', 'black', 'Logitech');

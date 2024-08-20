class Observer {
  private _observers: Array<Function>;

  constructor() {
    this._observers = [];
  }

  subscribe(observer: Function): void {
    this._observers.push(observer);
  }

  unsubscribe(index): void {
    this._observers = this._observers.splice(index, 1);
  }

  notifyObservers() {
    this._observers.forEach((observer) => observer());
  }
}

export default new Observer();

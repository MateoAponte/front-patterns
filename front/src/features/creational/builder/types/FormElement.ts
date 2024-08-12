// Clase base para elementos de formulario
export class FormElement {
  private _name: String;
  private _type: String;
  private _options: any;
  constructor({ name, type }) {
    this._name = name;
    this._type = type;
    this._options = {};
  }
  set name(name: String) {
    this._name = name;
  }
  set type(type: String) {
    this._type = type;
  }
  set options(options: any) {
    this._options = options;
  }
}

// Elementos de Formulario
export class Input extends FormElement {
  constructor({ name, type }) {
    super({ name, type });
  }
}
export class Button extends FormElement {
  constructor({ name, type }) {
    super({ name, type });
  }
}
export class TextArea extends FormElement {
  constructor({ name, type }) {
    super({ name, type });
  }
}

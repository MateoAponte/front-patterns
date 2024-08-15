import { FormElementType } from '../constants/FormTypes';

export interface FormElementOptions {
  color: string;
  width: string;
  padding: string;
  name: string;
}

// Clase base para elementos de formulario
export class FormElement {
  public _id: String;
  private _name: String;
  public _type: FormElementType;
  public _options: FormElementOptions;
  constructor({ name, type }) {
    this._name = name;
    this._type = type;
    this._options = { color: '', width: '10px', padding: '0px', name: '' };
    this._id = `${type}_${name}_${Math.floor(
      Math.random() * (1000 - 1 + 1) + 1
    )}`;
  }
  set name(name: String) {
    this._name = name;
  }
  set type(type: FormElementType) {
    this._type = type;
  }
  set options(options: FormElementOptions) {
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

import { FormFactory } from './FormFactory';

// Director de creacion de formularios
export class FormDirector {
  private _form: FormFactory;

  public setElementType({ form }) {
    this._form = form;
  }

  setDefaultInput(name: String): void {
    this._form.setColor('black').setWidth(100).setPadding(5).setName(name);
  }
  setDefaultButton(name: String): void {
    this._form.setColor('black').setWidth(100).setPadding(5).setName(name);
  }
  setDefaultTextArea(name: String): void {
    this._form.setColor('black').setWidth(100).setPadding(5).setName(name);
  }

  setColor(color: String): void {
    this._form.setColor(color);
  }
  setWidth(width: Number): void {
    this._form.setWidth(width);
  }
  setPadding(padding: Number): void {
    this._form.setPadding(padding);
  }
}

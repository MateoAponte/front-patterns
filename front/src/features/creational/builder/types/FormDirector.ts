import { FormFactory } from './FormFactory';

// Director de creacion de formularios
export class FormDirector {
  private _form: FormFactory;

  setElementType({ form }) {
    this._form = form;
  }

  setDefaultInput = () => {
    this._form
      .setColor('black')
      .setWidth('100px')
      .setPadding('5px')
      .setName('Ingrese un texto');
  };
  setDefaultButton = () => {
    this._form
      .setColor('black')
      .setWidth('100px')
      .setPadding('3px 5px')
      .setName('Botón');
  };
  setDefaultTextArea = () => {
    this._form
      .setColor('black')
      .setWidth('100px')
      .setPadding('5px')
      .setName('Ingrese un texto');
  };

  setColor = (color: string) => {
    this._form.setColor(color);
  };
  setWidth = (width: string) => {
    this._form.setWidth(width);
  };
  setPadding = (padding: string) => {
    this._form.setPadding(padding);
  };
  setName = (name: string) => {
    this._form.setName(name);
  };
}

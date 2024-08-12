import { FormElement } from '../types/FormElement';
import { FormFactory } from '../types/FormFactory';
import { FormDirector } from '../types/FormDirector';
import { FormElementType } from '../constants/FormTypes';

export class FormManagement {
  private _form: Array<FormElement>;
  private _formFactory: FormFactory;
  private _formDirector: FormDirector;

  constructor() {
    this._form = [];
    this._formDirector = new FormDirector();
  }

  setFactoryType(name: String, type: FormElementType): void {
    this._formFactory = new FormFactory(name, type);
    this._formDirector.setElementType({ form: this._formFactory });
  }
  customizeForm(color: String, width: Number, padding: Number): void {
    this._formDirector.setColor(color);
    this._formDirector.setWidth(width);
    this._formDirector.setPadding(padding);
  }

  getElementToBuild(type: FormElementType) {
    switch (type) {
      case FormElementType.INPUT:
        return this._formDirector.setDefaultInput;
      case FormElementType.BUTTON:
        return this._formDirector.setDefaultButton;
      case FormElementType.TEXTAREA:
        return this._formDirector.setDefaultTextArea;
      default:
        return this._formDirector.setDefaultInput;
    }
  }

  addElement(name: String, type: FormElementType): void {
    const elementToConfigure = this.getElementToBuild(type);
    elementToConfigure(name);
    const input = this._formFactory.build();
    this._form.push(input);
  }

  removeElement(index: number): void {
    this._form.splice(index, 1);
  }

  moveElement(from: number, to: number): void {
    const element = this._form[from];
    this._form.splice(from, 1);
    this._form.splice(to, 0, element);
  }
  // updateElement(index: number, name: String, type: FormElementType, options: any): void {
  //   const elementToConfigure = this.getElementToBuild(type);
  //   elementToConfigure(name);

  //   this._form[index] = this._formFactory.build();
  // }
}

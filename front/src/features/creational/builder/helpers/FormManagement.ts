import { FormElement, FormElementOptions } from '../types/FormElement.ts';
import { FormFactory } from '../types/FormFactory.ts';
import { FormDirector } from '../types/FormDirector.ts';
import { FormElementType } from '../constants/FormTypes.ts';

class FormManagement {
  private _form: Array<FormElement>;
  private _formFactory: FormFactory;
  private _formDirector: FormDirector;

  private _name: String;
  private _type: FormElementType;

  constructor() {
    this._form = [];
    this._formDirector = new FormDirector();
  }

  setFactoryType(name: String, type: FormElementType): void {
    this._formFactory = new FormFactory(name, type);

    this._formDirector.setElementType({ form: this._formFactory });
    this._name = name;
    this._type = type;
  }
  customizeForm({ color, width, padding, name }): void {
    this._formDirector.setColor(color);
    this._formDirector.setWidth(width);
    this._formDirector.setPadding(padding);
    this._formDirector.setName(name);
  }

  getElementToBuild() {
    switch (this._type) {
      case FormElementType.INPUT:
        return this._formDirector.setDefaultInput;
      case FormElementType.BUTTON:
        return this._formDirector.setDefaultButton;
      case FormElementType.TEXT_AREA:
        return this._formDirector.setDefaultTextArea;
      default:
        return this._formDirector.setDefaultInput;
    }
  }

  addElement(isCustomized?: boolean, options?: FormElementOptions): void {
    if (!isCustomized) {
      const elementToConfigure = this.getElementToBuild();
      elementToConfigure();
    } else {
      if (options) this.customizeForm(options);
    }

    const element = this._formFactory.build();
    this._form.push(element);
  }

  removeElement(index: number): void {
    this._form.splice(index, 1);
  }

  moveElement(from: number, to: number): void {
    const element = this._form[from];
    this._form.splice(from, 1);
    this._form.splice(to, 0, element);
  }

  getElements(): Array<FormElement> {
    return this._form;
  }
}

export default new FormManagement();

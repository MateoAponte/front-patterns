import { FormElementType } from '../constants/FormTypes.ts';
import { Button, FormElement, Input, TextArea } from './FormElement.ts';

// Interface para el Factory
export interface FormElementFactory {
  setColor(color: string): FormElementFactory;
  setWidth(width: string): FormElementFactory;
  setPadding(padding: string): FormElementFactory;
  setName(name: string): FormElementFactory;
}

// Creador de elementos de formulario
export class FormFactory implements FormElementFactory {
  private formElement: FormElement;
  private formElementName: String;

  constructor(name: String, type: FormElementType) {
    this.formElementName = name;
    console.log(FormElementType[type]);

    this.setFormType(FormElementType[type]);
  }

  private setFormType(type: FormElementType): void {
    switch (type) {
      case FormElementType.INPUT:
        this.formElement = new Input({ type, name: this.formElementName });
        break;
      case FormElementType.BUTTON:
        this.formElement = new Button({ type, name: this.formElementName });
        break;
      case FormElementType.TEXT_AREA:
        this.formElement = new TextArea({ type, name: this.formElementName });
        break;
      default:
        break;
    }
  }

  public setColor = (color: string): FormFactory => {
    this.formElement._options.color = color;
    return this;
  };
  public setWidth = (width: string): FormFactory => {
    this.formElement._options.width = width;
    return this;
  };
  public setPadding = (padding: string): FormFactory => {
    this.formElement._options.padding = padding;
    return this;
  };
  public setName = (name: string): FormFactory => {
    this.formElement.name = name;
    this.formElement._options.name = name;
    return this;
  };

  public build(): FormElement {
    return this.formElement;
  }
}

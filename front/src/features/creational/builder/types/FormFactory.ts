import { FormElementType } from '../constants/FormTypes';
import { Button, FormElement, Input, TextArea } from './FormElement';

// Interface para el Factory
export interface FormElementFactory {
  setColor(color: String): FormElementFactory;
  setWidth(width: Number): FormElementFactory;
  setPadding(padding: Number): FormElementFactory;
  setName(name: String): FormElementFactory;
}

// Creador de elementos de formulario
export class FormFactory implements FormElementFactory {
  private formElement: FormElement;
  private formElementName: String;

  constructor(name: String, type: FormElementType) {
    this.formElementName = name;
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
      case FormElementType.TEXTAREA:
        this.formElement = new TextArea({ type, name: this.formElementName });
        break;
      default:
        break;
    }
  }

  public setColor(color: String): FormFactory {
    this.formElement.options.color = color;
    return this;
  }
  public setWidth(width: Number): FormFactory {
    this.formElement.options.width = width;
    return this;
  }
  public setPadding(padding: Number): FormFactory {
    this.formElement.options.padding = padding;
    return this;
  }
  public setName(name: String): FormFactory {
    this.formElement.name = name;
    return this;
  }

  public build(): FormElement {
    console.log('BUILDED');
    return this.formElement;
  }
}

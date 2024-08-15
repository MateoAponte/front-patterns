import { PTButton } from '../../../common/components/Button.tsx';
import { TextField } from '../../../common/components/TextField.tsx';
import { FormElementType } from '../constants/FormTypes.ts';
import { FormElement, FormElementOptions } from '../types/FormElement.ts';

export interface Interpreter {
  component: React.FC<any>;
  options: FormElementOptions;
  id: String;
}

const interpreterOptions = (options) => {
  console.log(options);

  return {
    [FormElementType.INPUT]: {
      component: TextField,
      options: {
        placeholder: options.name,
        style: { ...options },
      },
    },
    [FormElementType.BUTTON]: {
      component: PTButton,
      options: {
        text: options.name,
        style: { ...options, color: 'white' },
      },
    },
    [FormElementType.TEXT_AREA]: {
      component: TextField,
      options: {
        placeholder: options.name,
        style: { ...options },
      },
    },
  };
};

export const interpreter = (elements: FormElement[]): Interpreter[] => {
  return elements.map((element) => {
    const getElement = interpreterOptions(element._options)[element._type];
    return {
      component: getElement.component,
      options: { ...element._options, ...getElement?.options },
      id: element._id,
    };
  });
};

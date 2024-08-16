import React from 'react';
import { Divider } from '../../../common/components/Divider.tsx';
import { Text } from '../../../common/components/Text.tsx';
import { Interpreter } from '../helpers/Interpreter.ts';
import { FormElementType } from '../constants/FormTypes.ts';
import { InputContent } from '../constants/Input.ts';

interface BuilderRenderItemModel {
  element: Interpreter;
  setContent: Function;
  content: InputContent;
  index: number;
}

export const BuilderRenderItem: React.FC<BuilderRenderItemModel> = ({
  element,
  setContent,
  content,
  index,
}) => {
  const showValue = (element) => {
    const getElement = { ...element };
    alert(`Valor: ${getElement.options.name}`);
  };

  const isInput = (element) => {
    if (element.type === FormElementType.INPUT) {
      return (
        <div>
          <Text text="Valor: " type="common" tag="span" isBolder>
            <Text
              text={content[element.id].value}
              type="common"
              tag="span"
              isCode
            />
          </Text>
        </div>
      );
    }
  };

  const getIndex = () => {
    return `${index + 1}. `;
  };

  const setValue = (element, evt) => {
    const getContent = { ...content };
    getContent[element.id].value = evt;
    setContent(getContent);
  };

  const getEvent = (element) => {
    if (
      element.type === FormElementType.INPUT ||
      element.type === FormElementType.TEXT_AREA
    ) {
      return {
        setInput: (evt) => setValue(element, evt),
        value: content[element.id].value,
      };
    } else if (element.type === FormElementType.BUTTON) {
      return { onClick: () => showValue(element) };
    }
    return {};
  };

  return (
    <>
      <Text
        isBolder
        tag="h2"
        text={getIndex()}
        type="heading"
        modifier="italic"
      >
        <element.component {...element.options} {...getEvent(element)} />
        {isInput(element)}
      </Text>
      <Divider orientation="horizontal" small />
    </>
  );
};

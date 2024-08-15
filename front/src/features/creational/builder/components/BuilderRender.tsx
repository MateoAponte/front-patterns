import React, { useEffect, useState } from 'react';
import { Column } from '../../../common/components/Column.tsx';
import FormManagement from '../helpers/FormManagement.ts';
import Observer from '../helpers/Observer.ts';
import { Interpreter, interpreter } from '../helpers/Interpreter.ts';
import { Divider } from '../../../common/components/Divider.tsx';
import { FormElementType } from '../constants/FormTypes.ts';

export const BuilderRender: React.FC = () => {
  const [elements, setElements] = useState<Array<Interpreter>>([]);
  const [content, setContent] = useState({});

  const updateContent = (elements) => {
    const getContent = { ...content };
    elements.forEach((element) => {
      getContent[element._id] = { value: '' };
    });
    setContent(getContent);
  };
  const setValue = (element, evt) => {
    const getContent = { ...content };
    getContent[element.id].value = evt;
    setContent(getContent);
  };

  const isInput = (element) => {
    return element._type === FormElementType.INPUT;
  };

  useEffect(() => {
    const handleUpdate = () => {
      updateContent(FormManagement.getElements());
      setElements(interpreter(FormManagement.getElements()));
    };
    Observer.subscribe(handleUpdate);

    return () => {
      Observer.unsubscribe(1);
    };
  }, [elements]);

  return (
    <>
      <Column>
        {elements.map((element) => (
          <>
            <element.component
              {...element.options}
              setInput={(evt) =>
                !isInput && setValue(element, evt.target.value)
              }
            />
            {content[element.id].value}
            <Divider orientation="horizontal" small />
          </>
        ))}
      </Column>
    </>
  );
};

import React, { useEffect, useState } from 'react';
import { Column } from '../../../common/components/Column.tsx';
import FormManagement from '../helpers/FormManagement.ts';
import Observer from '../helpers/Observer.ts';
import { Interpreter, interpreter } from '../helpers/Interpreter.ts';
import { BuilderRenderItem } from './BuilderRenderItem.tsx';
import { InputContent } from '../constants/Input.ts';
import { Divider } from '../../../common/components/Divider.tsx';
import { Text } from '../../../common/components/Text.tsx';

export const BuilderRender: React.FC = () => {
  const [elements, setElements] = useState<Array<Interpreter>>([]);
  const [content, setContent] = useState<InputContent>({
    id: '',
    value: '',
  });

  const updateContent = (elements) => {
    const getContent = { ...content };
    elements.forEach((element) => {
      getContent[element._id] = { value: getContent[element._id]?.value || '' };
    });
    setContent(getContent);
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
        <Text isBolder tag="h3" text="Render" type="heading" />
        <Divider orientation="horizontal" show />
        {elements.map((element, index) => (
          <BuilderRenderItem
            key={element.id}
            element={element}
            setContent={setContent}
            content={content}
            index={index}
          />
        ))}
      </Column>
    </>
  );
};

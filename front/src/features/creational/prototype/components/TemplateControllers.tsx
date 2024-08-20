import React, { useEffect, useState } from 'react';
import { Column } from '../../../common/components/Column.tsx';
import { Text } from '../../../common/components/Text.tsx';
import { TextField } from '../../../common/components/TextField.tsx';
import { Divider } from '../../../common/components/Divider.tsx';
import { PTRow } from '../../../common/components/PTRow.tsx';
import { PTButton } from '../../../common/components/Button.tsx';
import Observer from '../helpers/Observer.ts';
import TemplateManager from '../helpers/TemplateManager.ts';

export const TemplateControllers = () => {
  const [title, setTitle] = useState('');
  const [helper, setHelper] = useState('');
  const [leftContent, setLeftContent] = useState('');
  const [rightContent, setRightContent] = useState('');

  const handleUpdateTemplate = () => {
    TemplateManager.updateTemplate({
      id: Math.floor(Math.random() * (1000 - 1 + 1) + 1).toString(),
      title,
      helper,
      leftContent,
      rightContent,
    });
    Observer.notifyObservers();
  };

  return (
    <PTRow perRow="1-item" className="prototype-controllers" isCenter>
      <Column>
        <Column paddingless>
          <Text
            text="Title"
            type="common"
            tag="label"
            forId="title"
            modifier="bolder"
          />
          <TextField
            input={title}
            setInput={setTitle}
            id="title"
            placeholder="Input a title"
          />
          <Divider orientation="horizontal" small />
        </Column>
        <Column paddingless>
          <Text
            text="Helper text"
            type="common"
            tag="label"
            forId="content"
            modifier="bolder"
          />
          <TextField
            input={helper}
            setInput={setHelper}
            id="content"
            placeholder="Input the helper text"
          />
          <Divider orientation="horizontal" small />
        </Column>
        <PTRow perRow="2-item">
          <Column paddingless>
            <Text
              text="Left content"
              type="common"
              tag="label"
              forId="left-content"
              modifier="bolder"
            />
            <TextField
              input={leftContent}
              setInput={setLeftContent}
              id="left-content"
              placeholder="Input the Left content"
            />
          </Column>
          <Column paddingless>
            <Text
              text="Right content"
              type="common"
              tag="label"
              forId="right-content"
              modifier="bolder"
            />
            <TextField
              input={rightContent}
              setInput={setRightContent}
              id="right-content"
              placeholder="Input the Right content"
            />
          </Column>
        </PTRow>
        <Divider orientation="horizontal" small />
        <Column paddingless>
          <PTButton type="small" onClick={() => handleUpdateTemplate()}>
            <Text text="Generate Template" type="common" tag="span" />
          </PTButton>
        </Column>
      </Column>
    </PTRow>
  );
};

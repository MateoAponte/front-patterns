import React, { useEffect, useState } from 'react';
import { PTSection } from '../../../common/components/PTSection.tsx';
import { PTRow } from '../../../common/components/PTRow.tsx';
import { Column } from '../../../common/components/Column.tsx';
import { Template, TemplateModel } from '../helpers/Template.ts';
import Observer from '../helpers/Observer.ts';
import TemplateManager from '../helpers/TemplateManager.ts';

export const TemplateRender = () => {
  const [content, setContent] = useState<TemplateModel>({
    helper: '',
    id: '',
    leftContent: '',
    rightContent: '',
    title: '',
  });

  useEffect(() => {
    const handleUpdate = () => {
      console.log(TemplateManager.getTemplate());
      setContent(TemplateManager.getTemplate());
    };
    Observer.subscribe(handleUpdate);

    return () => {
      Observer.unsubscribe(0);
    };
  });

  return (
    <>
      <Column>
        <PTSection
          title={content.title}
          helper={content.helper}
          headingType="header"
          bordered
          hasDivider
          showDivider
        >
          <PTRow perRow="2-item">
            <Column paddingless>{content.leftContent}</Column>
            <Column paddingless>{content.rightContent}</Column>
          </PTRow>
        </PTSection>
      </Column>
    </>
  );
};

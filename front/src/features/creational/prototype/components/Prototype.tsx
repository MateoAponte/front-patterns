import React from 'react';
import { PatternLayout } from '../../../common/layouts/PatternLayout.tsx';
import {
  applications,
  code,
  cons,
  examples,
  helper,
  issue,
  mainText,
  pros,
  solution,
  usageTips,
  uses,
} from '../constants/text.tsx';
import { Column } from '../../../common/components/Column.tsx';
import { TemplateControllers } from './TemplateControllers.tsx';
import { TemplateRender } from './TemplateRender.tsx';
import { Text } from '../../../common/components/Text.tsx';
import { Divider } from '../../../common/components/Divider.tsx';

export const Prototype: React.FC = () => {
  return (
    <>
      <PatternLayout
        mainText={mainText}
        pros={pros}
        cons={cons}
        uses={uses}
        examples={examples}
        applications={applications}
        helper={helper}
        code={code}
        issue={issue}
        solution={solution}
        usageTips={usageTips}
        title="Prototype Method"
      >
        <Column paddingless>
          <div className="prototype-container">
            <Text text="Template Generator" type="heading" tag="h1" />
            <Divider orientation="horizontal" show />
            <TemplateRender />
            <Divider orientation="horizontal" />
            <TemplateControllers />
          </div>
        </Column>
      </PatternLayout>
    </>
  );
};

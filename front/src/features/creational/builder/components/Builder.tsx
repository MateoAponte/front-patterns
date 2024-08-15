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
import { PTRow } from '../../../common/components/PTRow.tsx';
import { BuilderControls } from './BuilderControls.tsx';
import { BuilderRender } from './BuilderRender.tsx';

export const Builder: React.FC = () => {
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
        title="Builder Method"
      >
        <PTRow perRow="2-item">
          <BuilderRender />
          <BuilderControls />
        </PTRow>
        <h1>Example</h1>
      </PatternLayout>
    </>
  );
};

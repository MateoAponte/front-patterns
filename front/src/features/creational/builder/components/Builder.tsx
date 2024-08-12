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
        <h1>Example</h1>
      </PatternLayout>
    </>
  );
};

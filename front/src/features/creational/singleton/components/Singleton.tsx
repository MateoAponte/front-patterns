import React, { useEffect } from 'react';
import { PatternLayout } from '../../../common/layouts/PatternLayout.tsx';
import { PTRow } from '../../../common/components/PTRow.tsx';
import { Column } from '../../../common/components/Column.tsx';
import { Divider } from '../../../common/components/Divider.tsx';
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
} from '../constants/texts.tsx';
import { NotificationContainer } from './NotificationContainer.tsx';
import { NotificationButton } from './NotificationButton.tsx';
import { NotificationDisplay } from './NotificationDisplay.tsx';

export const Singleton: React.FC = () => {
  useEffect(() => {
    console.log('Singleton');
  }, []);

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
        title="Singleton Method"
      >
        <PTRow perRow="2-item">
          <Column>
            <NotificationContainer />
          </Column>
          <Column>
            <NotificationDisplay />
            <NotificationButton />
          </Column>
        </PTRow>
      </PatternLayout>
    </>
  );
};

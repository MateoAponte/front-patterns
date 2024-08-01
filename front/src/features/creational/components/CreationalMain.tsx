import React from 'react';
import { getType } from '../../common/router/RouterInfo.ts';
import { PatternPanel } from '../../common/layouts/PatternPanel.tsx';

const descriptionTest =
  'The creational Patterns are all that give techniques to create multiple objects or some instances by only one costructor point';

export const CreationalMain: React.FC = () => {
  const creationalRoutes = getType('creational');

  return (
    <>
      <PatternPanel
        description={descriptionTest}
        creationalRoutes={creationalRoutes}
      />
    </>
  );
};

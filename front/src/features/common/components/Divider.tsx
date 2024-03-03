import React from 'react';

type Orientation = 'horizontal' | 'vertical' | '';

interface DividerModel {
  orientation: Orientation;
}

export const Divider: React.FC<DividerModel> = ({ orientation }) => {
  const orientationClass = orientation ? 'ptn--orientation' : '';
  return (
    <>
      <hr className={`ptn-divider ${orientationClass}`} />
    </>
  );
};

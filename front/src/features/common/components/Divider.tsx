import React from 'react';

type Orientation = 'horizontal' | 'vertical' | '';

interface DividerModel {
  orientation: Orientation;
  show?: Boolean;
}

export const Divider: React.FC<DividerModel> = ({ orientation, show }) => {
  const orientationClass = orientation ? 'ptn-divider--' + orientation : '';
  const showClass = !show ? 'ptn-divider--hide' : '';
  return (
    <>
      <hr className={`ptn-divider ${orientationClass} ${showClass}`} />
    </>
  );
};

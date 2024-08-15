import React from 'react';

type Orientation = 'horizontal' | 'vertical' | '';

interface DividerModel {
  orientation: Orientation;
  show?: Boolean;
  small?: Boolean;
}

export const Divider: React.FC<DividerModel> = ({
  orientation,
  show,
  small,
}) => {
  const orientationClass = orientation ? `ptn-divider--${orientation} ` : '';
  const showClass = !show ? 'ptn-divider--hide ' : '';
  const isSmall = small ? 'ptn-divider--small ' : '';
  return (
    <>
      <hr className={`ptn-divider ${orientationClass}${showClass}${isSmall}`} />
    </>
  );
};

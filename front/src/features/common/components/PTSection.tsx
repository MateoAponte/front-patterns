import React from 'react';
import { Text } from './Text.tsx';
import { Divider } from './Divider.tsx';

type HeadingType = 'header' | 'subheader';

interface PanelModel {
  children: React.ReactNode;
  title: String;
  description?: String;
  headingType?: HeadingType;
  hasDivider?: Boolean;
}

export const PTSection: React.FC<PanelModel> = ({ children, title, description, headingType, hasDivider }) => {
  const getHeadingType = !!headingType ? `ptn-section__${headingType}` : '';
  const isSubtitle = headingType === 'subheader';
  return (
    <div className="ptn-section">
      <div className={getHeadingType}>
        <Text text={title} type="heading" spaced="spaced-1" heading="h3" modifier={isSubtitle ? 'bold' : 'bolder'} />
      </div>
      {description && <Text text={description} type="common" spaced="spaced-3" />}
      {!!getHeadingType && hasDivider && <Divider orientation="horizontal" />}
      <div className="ptn-section__content">{children}</div>
    </div>
  );
};

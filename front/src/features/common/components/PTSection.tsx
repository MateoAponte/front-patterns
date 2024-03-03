import React from 'react';
import { Text } from './Text.tsx';
import { Divider } from './Divider.tsx';

interface PanelModel {
  children: React.ReactNode;
  title: String;
  description?: String;
  isMainTitle?: Boolean;
}

export const PTSection: React.FC<PanelModel> = ({ children, title, description, isMainTitle }) => {
  return (
    <div className="ptn-section">
      <div className={isMainTitle && 'ptn-section__header'}>
        <Text text={title} type="heading" spaced="spaced-1" heading="h3" modifier="bolder" />
      </div>
      {description && <Text text={description} type="common" spaced="spaced-3" />}
      {!isMainTitle && <Divider orientation="horizontal" />}
      <div className="ptn-section__content">{children}</div>
    </div>
  );
};

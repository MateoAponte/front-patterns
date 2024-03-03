import React from 'react';
import { Text } from '../components/Text.tsx';
import { Divider } from '../components/Divider.tsx';

interface PanelModel {
  children: React.ReactNode;
  title: String;
  description?: String;
}

export const PTSection: React.FC<PanelModel> = ({ children, title, description }) => {
  return (
    <div className="ptn-panel">
      <Text text={title} type="heading" spaced="spaced-1" heading="h3" modifier="bolder" />
      {description && <Text text={description} type="common" spaced="spaced-3" />}
      <Divider orientation="horizontal" />
      <div className="ptn-panel__content">{children}</div>
    </div>
  );
};

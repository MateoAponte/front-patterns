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
  showDivider?: Boolean;
  helper?: String;
  icon?: React.ReactNode;
  maxHeight?: string;
  overflow?: Boolean;
  bordered?: Boolean;
  id?: string;
  isPatternLayout?: boolean;
}

export const PTSection: React.FC<PanelModel> = ({
  children,
  title,
  description,
  headingType,
  hasDivider,
  showDivider,
  helper,
  icon,
  bordered,
  maxHeight = '',
  overflow,
  id,
  isPatternLayout,
}) => {
  const getHeadingType = !!headingType ? `ptn-section__${headingType}` : '';
  const isSubtitle = headingType === 'subheader';
  const hasOverflow = overflow ? `ptn-section--overflow ` : '';
  const hasBorder = bordered ? `ptn-section--bordered ` : '';
  const hasPatternLayout = isPatternLayout ? `ptn-section--top-adjust` : '';
  const hasHelper = !!helper ? (
    <div
      className={`ptn-section__helper ${
        showDivider && 'ptn-section__helper--marginless'
      }`}
    >
      <Text text={helper || ''} type="helper" spaced="spaced-1" heading="h5" />
    </div>
  ) : (
    <></>
  );
  return (
    <div
      className={`ptn-section ${hasOverflow}${hasBorder}${hasPatternLayout}`}
      style={{ maxHeight: maxHeight }}
    >
      <div className={getHeadingType}>
        {icon}
        <Text
          text={title}
          type="heading"
          spaced="spaced-1"
          tag={isSubtitle ? 'h3' : 'h1'}
          heading="h1"
          modifier={isSubtitle ? 'bold' : 'bolder'}
          isHighlight
          id={id}
        />
      </div>
      {hasHelper}
      {/* {description && (
        <Text text={description} type="common" spaced="spaced-3" />
      )} */}
      {!!getHeadingType && hasDivider && (
        <Divider orientation="horizontal" show={showDivider} />
      )}
      <div className="ptn-section__content">{children}</div>
    </div>
  );
};

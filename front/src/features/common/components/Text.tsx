import React from 'react';

type TextType = 'heading' | 'helper' | 'common' | 'list' | '';
type TextModifier = 'bold' | 'bolder' | 'italic' | 'subline' | 'strikethrough' | '';
type TextSpaced = 'spaced-1' | 'spaced-2' | 'spaced-3' | 'spaced-4' | 'spaced-5' | '';
type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TextModel {
  text: String;
  type: TextType;
  modifier?: TextModifier;
  spaced?: TextSpaced;
  heading?: Headings;
  isHighlight?: Boolean;
  tag?: String;
  children?: React.ReactNode;
}

export const Text: React.FC<TextModel> = ({ text, type, modifier, spaced, heading, isHighlight, tag, children }) => {
  const getType = type ? 'ptn-text--' + type : '';
  const getModifier = modifier ? 'ptn-text--' + modifier : '';
  const getSpaced = spaced ? 'ptn-text--' + spaced : '';
  const getHeading = heading ? 'ptn-text--' + heading : '';
  const getHighlight = isHighlight ? 'ptn-text--highlight' : '';
  const CustomTag = `${tag}` as keyof JSX.IntrinsicElements;
  return (
    <CustomTag className={`ptn-text ${getType} ${getModifier} ${getSpaced} ${getHeading} ${getHighlight}`}>
      {text} {children}
    </CustomTag>
  );
};

Text.defaultProps = {
  tag: 'span',
};

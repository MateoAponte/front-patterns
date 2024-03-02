import React from 'react';

type TextType = 'heading' | 'helper' | 'common' | 'list' | '';
type TextModifier = 'bolder' | 'italic' | 'subline' | 'strikethrough' | '';
type TextSpaced = 'spaced-1' | 'spaced-2' | 'spaced-3' | 'spaced-4' | 'spaced-5' | '';
type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TextModel {
  text: String;
  type: TextType;
  modifier?: TextModifier;
  spaced?: TextSpaced;
  heading?: Headings;
}

export const Text: React.FC<TextModel> = ({ text, type, modifier, spaced, heading }) => {
  const getType = type ? 'ptn-text--' + type : '';
  const getModifier = modifier ? 'ptn-text--' + modifier : '';
  const getSpaced = spaced ? 'ptn-text--' + spaced : '';
  const getHeading = heading ? 'ptn-text--' + heading : '';
  return <p className={`ptn-text ${getType} ${getModifier} ${getSpaced} ${getHeading}`}>{text}</p>;
};

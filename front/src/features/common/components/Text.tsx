import React from 'react';

type TextType = 'heading' | 'helper' | 'common' | 'list' | '';
type TextModifier =
  | 'bold'
  | 'bolder'
  | 'italic'
  | 'subline'
  | 'strikethrough'
  | '';
type TextSpaced =
  | 'spaced-1'
  | 'spaced-2'
  | 'spaced-3'
  | 'spaced-4'
  | 'spaced-5'
  | '';
type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TextModel {
  text: String;
  type: TextType;
  modifier?: TextModifier;
  spaced?: TextSpaced;
  heading?: Headings;
  isHighlight?: Boolean;
  isCode?: Boolean;
  isBolder?: Boolean;
  isBlock?: Boolean;
  isLink?: Boolean;
  href?: string;
  id?: string;
  tag?: String;
  children?: React.ReactNode;
  forId?: string;
}

export const Text: React.FC<TextModel> = ({
  text,
  type,
  modifier,
  spaced,
  heading,
  isCode,
  isBolder,
  isHighlight,
  isLink,
  href,
  id,
  isBlock,
  tag,
  forId,
  children,
}) => {
  const getType = type ? `ptn-text--${type} ` : '';
  const getModifier = modifier ? `ptn-text--${modifier} ` : '';
  const getSpaced = spaced ? `ptn-text--${spaced} ` : '';
  const getHeading = heading ? `ptn-text--${heading} ` : '';
  const getHighlight = isHighlight ? 'ptn-text--highlight ' : '';
  const getLink = isLink ? 'ptn-text--link ' : '';
  const getCode = isCode ? 'ptn-text--code ' : '';
  const getBolder = isBolder ? 'ptn-text--bolder ' : '';
  const CustomTag = `${tag}` as keyof JSX.IntrinsicElements;
  const getBlock = isBlock ? 'ptn-text--block ' : '';
  const getForId = forId ? { htmlFor: forId } : {};

  const getHref = isLink ? { href: href } : {};

  return (
    <CustomTag
      className={`ptn-text ${getType}${getModifier}${getSpaced}${getHeading}${getHighlight}${getCode}${getBolder}${getBlock}${getLink}`}
      {...getForId}
      {...getHref}
      id={id}
    >
      {text}
      {children}
    </CustomTag>
  );
};

Text.defaultProps = {
  tag: 'span',
};

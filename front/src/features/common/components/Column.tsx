import React from 'react';

interface ColumnInterface {
  children: React.ReactNode;
  paddingless?: boolean;
}

export const Column: React.FC<ColumnInterface> = ({
  children,
  paddingless,
}) => {
  const hasPadding = paddingless ? ' column--paddingless ' : '';
  return <section className={`column${hasPadding}`}>{children}</section>;
};

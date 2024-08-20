import React from 'react';

type PerRow = '4-item' | '2-item' | '6-item' | '3-item' | '1-item';
type VerticalAligment = 'start' | 'end' | 'center';

interface RowModel {
  children: React.ReactNode;
  perRow: PerRow;
  verticalAligment?: VerticalAligment;
  className?: string;
  isCenter?: boolean;
}

export const PTRow: React.FC<RowModel> = ({
  children,
  perRow,
  verticalAligment,
  className = '',
  isCenter,
}) => {
  const getPerRow = perRow ? `ptn-row--${perRow} ` : '';
  const getCenteredContent = isCenter ? `ptn-row--centered ` : '';
  const getVerticalCenter = verticalAligment
    ? `ptn-row--${verticalAligment} `
    : '';
  return (
    <>
      <section
        className={`ptn-row ${className} ${getPerRow}${getVerticalCenter}${getCenteredContent}`}
      >
        {children}
      </section>
    </>
  );
};

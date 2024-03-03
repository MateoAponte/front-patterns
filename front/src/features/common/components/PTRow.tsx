import React from 'react';

type PerRow = '4-item' | '2-item' | '6-item' | '3-item';
type VerticalAligment = 'start' | 'end' | 'center';

interface RowModel {
  children: React.ReactNode;
  perRow: PerRow;
  verticalAligment?: VerticalAligment;
}

export const PTRow: React.FC<RowModel> = ({ children, perRow, verticalAligment }) => {
  const getPerRow = perRow ? 'ptn-row--' + perRow : '';
  const getVerticalCenter = verticalAligment ? 'ptn-row--' + verticalAligment : '';
  return (
    <>
      <section className={`ptn-row ${getPerRow} ${getVerticalCenter}`}>{children}</section>
    </>
  );
};

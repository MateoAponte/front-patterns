import React from 'react';

type PerRow = '4-item' | '2-item' | '6-item' | '3-item';

interface RowModel {
  children: React.ReactNode;
  perRow: PerRow;
}

export const PTRow: React.FC<RowModel> = ({ children, perRow }) => {
  const getPerRow = perRow ? 'ptn-row--' + perRow : '';
  return (
    <>
      <section className={`ptn-row ${getPerRow}`}>{children}</section>
    </>
  );
};

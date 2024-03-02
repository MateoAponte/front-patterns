import React from 'react';
import { Text } from './Text.tsx';

interface SectionProps {
  title: String;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <>
      <section className="section-patterns">
        <h1 className="section-patterns__title">
          <Text text={title} type="heading" modifier="bolder" spaced="spaced-1" heading="h1" />
        </h1>
        <hr className="section-patterns__divider" />
        <h3 className="section-patterns__example">
          <Text text="Example" type="heading" modifier="bolder" spaced="spaced-3" heading="h3" />
        </h3>
        <div className="section-patterns__content">{children}</div>
      </section>
    </>
  );
};

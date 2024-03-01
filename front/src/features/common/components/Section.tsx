import React from 'react';

interface SectionProps {
  title: String;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <>
      <section className="section-patterns">
        <h1 className="section-patterns__title">{title}</h1>
        <hr className="section-patterns__divider" />
        <h3 className="section-patterns__example">Example:</h3>
        <div className="section-patterns__content">{children}</div>
      </section>
    </>
  );
};

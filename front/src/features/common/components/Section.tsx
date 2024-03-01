import React from 'react';

interface SectionProps {
  title: String;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section>
      <h1>{title}</h1>
      <hr />
      <div>
        <h3>Example:</h3>
        {children}
      </div>
    </section>
  );
};

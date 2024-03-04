import React from 'react';
import { PTSection } from '../../common/components/PTSection.tsx';
import { PTRow } from '../../common/components/PTRow.tsx';
import MermaidReact from 'mermaid-react';
import { Divider } from '../../common/components/Divider.tsx';
import { Text } from '../components/Text.tsx';
import { ChildrenInterface } from '../interfaces/ChildrenInterface';
import { TextInterface } from '../interfaces/TextInterface';

interface GraphDescription {
  text: Array<TextInterface>;
  graph: string;
}

interface PatternLayoutModel extends ChildrenInterface {
  title: String;
  mainText: GraphDescription;
  pros: Array<React.ReactNode>;
  cons: Array<React.ReactNode>;
  uses: Array<React.ReactNode>;
  examples: Array<React.ReactNode>;
  applications: GraphDescription;
}

const List = ({ list }) => {
  return <ul>{list.map((item: React.ReactNode) => item)}</ul>;
};

const TextParsed = ({ text }) => {
  return (
    <>
      {text.map((item: TextInterface) => (
        <Text isHighlight={item.isHighlight} text={item.text} spaced={text.spaced} type="common" />
      ))}
    </>
  );
};

export const PatternLayout: React.FC<PatternLayoutModel> = ({ title, children, applications, cons, examples, mainText, pros, uses }) => {
  let randomId = `id-ptn-${Math.floor(Math.random() * 100 + 1)}`;
  return (
    <>
      <PTSection title={title} headingType="header">
        <PTRow perRow="2-item" verticalAligment="center">
          <div>
            <TextParsed text={mainText.text} />
          </div>
          <MermaidReact id="factory" mmd={mainText.graph} />
        </PTRow>
        <Divider orientation="horizontal" />
        <PTRow perRow="2-item">
          <PTSection title="Pros" headingType="subheader">
            <List list={pros} />
          </PTSection>
          <PTSection title="Contras" headingType="subheader">
            <List list={cons} />
          </PTSection>
        </PTRow>
        <Divider orientation="horizontal" />
        <PTRow perRow="2-item">
          <PTSection title="¿Cuando usarlo?" headingType="subheader">
            <List list={uses} />
          </PTSection>
          <PTSection title="Aplicaciones" headingType="subheader">
            <List list={examples} />
          </PTSection>
        </PTRow>
        <PTSection title="Ejemplo" headingType="subheader">
          <PTRow perRow="2-item" verticalAligment="start">
            <div>
              <TextParsed text={applications.text} />
            </div>
            <MermaidReact id={randomId} mmd={applications.graph} />
          </PTRow>
        </PTSection>
        {children}
      </PTSection>
    </>
  );
};

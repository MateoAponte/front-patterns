import React from 'react';
import { PTSection } from '../../common/components/PTSection.tsx';
import { PTRow } from '../../common/components/PTRow.tsx';
import MermaidReact from 'mermaid-react';
import { Divider } from '../../common/components/Divider.tsx';
import { Text } from '../components/Text.tsx';
import { ChildrenInterface } from '../interfaces/ChildrenInterface';
import { TextInterface } from '../interfaces/TextInterface';
import { Card } from '../components/Card.tsx';
import { Column } from '../components/Column.tsx';

import { FiInfo } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa6";
import { FaFlagCheckered } from "react-icons/fa6";
import { FaRegFileCode } from "react-icons/fa6";
import { PTCode } from '../components/Code.tsx';

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
  helper?: string;
  code?: string[];
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

export const PatternLayout: React.FC<PatternLayoutModel> = ({ title, children, applications, cons, examples, mainText, pros, uses, helper, code = [] }) => {
  let randomId = `id-ptn-${Math.floor(Math.random() * 100 + 1)}`;

  return (
    <>
      <PTSection title={title} helper={helper} headingType="header">
          <Card>
            <Column >
              <PTSection title="¿Qué es?" headingType="subheader" icon={<FiInfo />}>
                  <div>
                    <TextParsed text={mainText.text} />
                  </div>
                  <div className='ptn-centered'>
                    <MermaidReact id="factory" mmd={mainText.graph} />
                  </div>
              </PTSection>
            </Column>
          </Card>
        <Divider orientation="horizontal" show={false} />
        <Card>
          <PTRow perRow="2-item">
            <PTSection title="Pros" headingType="subheader" icon={<FaCheck />}>
              <List list={pros} />
            </PTSection>
            <PTSection title="Contras" headingType="subheader" icon={<FaTimes />}>
              <List list={cons} />
            </PTSection>
          </PTRow>
        </Card>
        <Divider orientation="horizontal" show={false} />
        <Card>
          <PTRow perRow="2-item">
            <PTSection title="¿Cuando usarlo?" headingType="subheader" icon={<FaClipboardList /> }>
              <List list={uses} />
            </PTSection>
            <PTSection title="Aplicaciones" headingType="subheader" icon={<FaFlagCheckered  /> }>
              <List list={examples} />
            </PTSection>
          </PTRow>
        </Card>
        <Divider orientation="horizontal" show={false} />
        <Card>
          <PTSection title="Código" headingType="subheader" icon={<FaRegFileCode /> } maxHeight='550px' overflow >
            <PTCode code={code} />
          </PTSection>
        </Card>
        <Divider orientation="horizontal" show={false} />
        <Card>
          <PTSection title="Ejemplo" headingType="subheader" icon={<FaRegFileCode /> }>
            <PTRow perRow="2-item" verticalAligment="start">
              <div>
                <TextParsed text={applications.text} />
              </div>
              <MermaidReact id={randomId} mmd={applications.graph} />
            </PTRow>
          </PTSection>
          {children}
        </Card>
      </PTSection>
    </>
  );
};

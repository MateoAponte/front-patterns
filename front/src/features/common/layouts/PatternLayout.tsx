import React from 'react';
import { PTSection } from '../../common/components/PTSection.tsx';
import { PTRow } from '../../common/components/PTRow.tsx';
import MermaidReact from 'mermaid-react';
import { Divider } from '../../common/components/Divider.tsx';
import { Text } from '../components/Text.tsx';
import { ChildrenInterface } from '../interfaces/ChildrenInterface.ts';
import { TextInterface } from '../interfaces/TextInterface.ts';
import { Card } from '../components/Card.tsx';
import { Column } from '../components/Column.tsx';

import { MdReportProblem } from 'react-icons/md';
import { FiInfo } from 'react-icons/fi';
import { FaCheck, FaTools } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { FaClipboardList } from 'react-icons/fa6';
import { FaFlagCheckered } from 'react-icons/fa6';
import { FaRegFileCode } from 'react-icons/fa6';
import { MdTipsAndUpdates } from 'react-icons/md';
import { CodePreview } from '../components/CodePreview.tsx';
import { CONTENT_LINKS } from '../constants/LayoutContent.ts';

interface GraphDescription {
  text: Array<TextInterface>;
  graph: string;
}

interface PatternLayoutModel extends ChildrenInterface {
  title: String;
  mainText: GraphDescription;
  pros: Array<React.ReactNode>;
  issue: Array<React.ReactNode>;
  solution: Array<React.ReactNode>;
  cons: Array<React.ReactNode>;
  uses: Array<React.ReactNode>;
  examples: Array<React.ReactNode>;
  usageTips: Array<React.ReactNode>;
  applications: GraphDescription;
  exampleRow: boolean;
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
        <Text
          isHighlight={item.isHighlight}
          isCode={item.isCode}
          isBlock={item.isBlock}
          text={item.text}
          spaced={text.spaced}
          type="common"
        />
      ))}
    </>
  );
};

export const PatternLayout: React.FC<PatternLayoutModel> = ({
  title,
  children,
  applications,
  cons,
  examples,
  mainText,
  pros,
  uses,
  helper,
  code = [],
  issue,
  solution,
  usageTips,
  exampleRow = true,
}) => {
  let randomId = `id-ptn-${Math.floor(Math.random() * 100 + 1)}`;
  let graphicExample = <MermaidReact id={randomId} mmd={applications.graph} />;

  return (
    <>
      <div className="ptn-content-table">
        <div className="ptn-content-table__caps">
          <Text tag="h2" text="Content" type="heading" />
          {CONTENT_LINKS.map((item: string) => (
            <div className="ptn-content-table__item">
              <Text
                tag="a"
                href={`#${item.replace(/\s/g, '-').toLowerCase()}`}
                isLink
                text={item}
                type="list"
              />
            </div>
          ))}
        </div>
      </div>
      <PTSection title={title} helper={helper} headingType="header" isPatternLayout>
        <Card id="what-is">
          <Column>
            <PTSection
              title="What is?"
              headingType="subheader"
              icon={<FiInfo />}
            >
              <div>
                <TextParsed text={mainText.text} />
              </div>
              <div className="ptn-centered">
                <MermaidReact id="factory" mmd={mainText.graph} />
              </div>
            </PTSection>
          </Column>
        </Card>
        <Divider orientation="horizontal" show={false} />
        <Card id="the-issue">
          <Column>
            <PTSection
              title="The issue"
              headingType="subheader"
              icon={<MdReportProblem />}
            >
              <List list={issue} />
            </PTSection>
          </Column>
        </Card>
        <Divider orientation="horizontal" show={false} />
        <Card id="how-to-solve">
          <Column>
            <PTSection
              title="How to solve?"
              headingType="subheader"
              icon={<FaTools />}
            >
              <List list={solution} />
            </PTSection>
          </Column>
        </Card>
        <Divider orientation="horizontal" show={false} />
        <Card id="pros">
          <PTRow perRow="2-item">
            <PTSection title="Pros" headingType="subheader" icon={<FaCheck />}>
              <List list={pros} />
            </PTSection>
            <PTSection title="Cons" headingType="subheader" icon={<FaTimes />}>
              <List list={cons} />
            </PTSection>
          </PTRow>
        </Card>
        <Divider orientation="horizontal" show={false} />
        <Card id="when-to-use">
          <PTRow perRow="2-item">
            <PTSection
              title="When to use?"
              headingType="subheader"
              icon={<FaClipboardList />}
            >
              <List list={uses} />
            </PTSection>
            <PTSection
              title="Uses"
              headingType="subheader"
              icon={<FaFlagCheckered />}
            >
              <List list={examples} />
            </PTSection>
          </PTRow>
        </Card>
        <Divider orientation="horizontal" show={false} />
        <Card id="code">
          <PTSection
            title="Code"
            headingType="subheader"
            icon={<FaRegFileCode />}
            maxHeight="550px"
            overflow
          >
            <CodePreview code={code} />
          </PTSection>
        </Card>
        <Divider orientation="horizontal" show={false} />
        <Card id="usage-tips">
          <Column>
            <PTSection
              title="Usage tips"
              headingType="subheader"
              icon={<MdTipsAndUpdates />}
            >
              <List list={usageTips} />
            </PTSection>
          </Column>
        </Card>
        <Divider orientation="horizontal" show={false} />
        <Card id="example">
          <PTSection
            title="Example"
            headingType="subheader"
            icon={<FaRegFileCode />}
          >
            <PTRow
              perRow={!exampleRow ? '1-item' : '2-item'}
              verticalAligment="start"
              isCenter={false}
            >
              <div>
                <TextParsed text={applications.text} />
              </div>
              {exampleRow && graphicExample}
            </PTRow>
            {!exampleRow && graphicExample}
          </PTSection>
          <Divider orientation="horizontal" />
          {children}
        </Card>
      </PTSection>
    </>
  );
};

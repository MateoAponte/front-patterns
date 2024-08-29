import React from 'react';
import { PTSection } from '../../../features/common/components/PTSection.tsx';
import { Text } from '../../../features/common/components/Text.tsx';
import { Column } from '../../../features/common/components/Column.tsx';
import { PTRow } from '../../common/components/PTRow.tsx';
import {
  Card,
  CardContent,
  CardHeader,
} from '../../common/components/Card.tsx';
import { Footer } from '../../common/layouts/Footer.tsx';
import { PTButton } from '../../common/components/Button.tsx';

import { FaFileCode } from 'react-icons/fa6';
import { WhichStudyList } from '../../common/constants/WhichStudy.ts';
import { TiUserAdd } from 'react-icons/ti';

export const Home: React.FC = () => {
  return (
    <>
      <div className="home">
        <div className="home__section">
          <div className="home__section-backdrop"></div>
          <div className="home__section-image"></div>
          <div className="home__section-content">
            <Text
              text="Mastering the Art of Software Development"
              type="heading"
              tag="h1"
              isBlock
            />
            <Text
              text="Transform your coding practices with expert guides on design patterns and principles. Build better, faster, and smarter applications."
              type="heading"
              isBlock
            />
            <PTButton type="small" onClick={() => {}} icon={<FaFileCode />}>
              Get Started
            </PTButton>
          </div>
        </div>
        <Column>
          <PTSection
            className="home__section--top-spacing"
            title="Which content do you want to learn?"
            headingType="subheader"
          >
            <PTRow perRow="3-item">
              {WhichStudyList.map((item) => (
                <Card>
                  <CardHeader>
                    <item.icon />
                  </CardHeader>
                  <CardContent>
                    <Text text={item.title} type="heading" isBolder />
                    <Text text={item.description} type="common" />
                  </CardContent>
                </Card>
              ))}
            </PTRow>
          </PTSection>
        </Column>
        <Column>
          <PTSection
            className="home__section home__section--top-spacing"
            title="Join Our Program"
            headingType="header"
          >
            <Text
              text="Become a part of the DevLaunch family and take your skills to the next level. Sign up for exclusive resources and opportunities."
              type="heading"
            />
            <div>
              <PTButton type="small" onClick={() => {}} icon={<TiUserAdd />}>
                Register
              </PTButton>
            </div>
          </PTSection>
        </Column>
      </div>
      <Footer />
    </>
  );
};

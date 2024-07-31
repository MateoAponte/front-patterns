import React from 'react';
import { PTSection } from '../../common/components/PTSection.tsx';
import { Link } from 'react-router-dom';
import { PTRow } from '../../common/components/PTRow.tsx';
import { getType } from '../../common/router/RouterInfo.ts';
import { RoutesModel } from '../../common/interfaces/RoutesInterfaces.ts';
import {
  Card,
  CardContent,
  CardHeader,
} from '../../common/components/Card.tsx';
import { PATTERN_PRESENTATION } from '../contants/patternPresentation.ts';
import { PatternPresentationInterface } from '../../common/interfaces/PatternPresentation.ts';
import { TfiLayoutWidthDefaultAlt } from 'react-icons/tfi';

const descriptionTest =
  'The creational Patterns are all that give techniques to create multiple objects or some instances by only one costructor point';

export const CreationalMain: React.FC = () => {
  const creationalRoutes = getType('creational');
  const getUpper = (title: String) =>
    title.charAt(0).toUpperCase() + title.slice(1);

  const getIconByPath = (path: string): PatternPresentationInterface => {
    const getIcon = PATTERN_PRESENTATION.find(
      (pattern) => path.toLowerCase().indexOf(pattern.name.toLowerCase()) !== -1
    ) || { name: 'Non Route', icon: TfiLayoutWidthDefaultAlt, description: '' };
    return getIcon;
  };

  return (
    <>
      <PTSection title="Patrones creacionales" description={descriptionTest}>
        <PTRow className="pattern-content" perRow="3-item">
          {creationalRoutes.map((item: RoutesModel, index) => (
            <Link to={item.path}>
              <Card key={index}>
                <CardHeader>
                  <span className="card__icon">
                    {React.createElement(getIconByPath(item.path).icon)}
                  </span>
                  <span className="card__label">{getUpper(item.path)}</span>
                </CardHeader>
                <CardContent>
                  <span className="card__description">
                    {getIconByPath(item.path).description}
                  </span>
                  {/* <span className="card__link"></span> */}
                </CardContent>
              </Card>
            </Link>
          ))}
        </PTRow>
      </PTSection>
    </>
  );
};

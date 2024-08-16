import React from 'react';
import { Link } from 'react-router-dom';
import { PTRow } from '../components/PTRow.tsx';
import { PTSection } from '../components/PTSection.tsx';
import { Card, CardContent, CardHeader } from '../components/Card.tsx';
import { PatternPanelInterface } from '../interfaces/PatternPanelInterface';
import { RoutesModel } from '../interfaces/RoutesInterfaces';
import { PATTERN_PRESENTATION } from '../../creational/contants/patternPresentation.ts';

import { TfiLayoutWidthDefaultAlt } from 'react-icons/tfi';
import { PatternPresentationInterface } from '../interfaces/PatternPresentation';

export const PatternPanel: React.FC<PatternPanelInterface> = ({
  description,
  creationalRoutes,
}) => {
  const getUpper = (title: String) =>
    title.charAt(0).toUpperCase() + title.slice(1);

  const getIconByPath = (path: string): PatternPresentationInterface => {
    const getIcon = PATTERN_PRESENTATION.find(
      (pattern) => path.toLowerCase().indexOf(pattern.name.toLowerCase()) !== -1
    ) || {
      name: 'Non Route',
      icon: TfiLayoutWidthDefaultAlt,
      description: '',
    };
    return getIcon;
  };

  return (
    <PTSection
      title="Patrones creacionales"
      helper={description}
      headingType="header"
    >
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
  );
};

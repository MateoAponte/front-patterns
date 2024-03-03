import React from 'react';
import { PTSection } from '../../common/layouts/PTSection.tsx';
import { Link } from 'react-router-dom';
import { PTRow } from '../../common/components/PTRow.tsx';
import { RoutesModel, getType } from '../../common/router/RouterInfo.ts';
import { Card, CardContent, CardHeader } from '../../common/components/Card.tsx';

export const CreationalMain: React.FC = () => {
  const creationalRoutes = getType('creational');
  const getUpper = (title: String) => title.charAt(0).toUpperCase() + title.slice(1);

  return (
    <>
      <PTSection title="Patrones creacionales" description="Some">
        <PTRow perRow="3-item">
          {creationalRoutes.map((item: RoutesModel, index) => (
            <Card key={index}>
              <CardHeader>{getUpper(item.path)}</CardHeader>
              <CardContent>
                <Link to={item.path}>{item.path}</Link>
              </CardContent>
            </Card>
          ))}
        </PTRow>
      </PTSection>
    </>
  );
};

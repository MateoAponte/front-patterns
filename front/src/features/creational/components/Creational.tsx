import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { RoutesModel, getType } from '../../common/router/RouterInfo.ts';

export const Creational: React.FC = () => {
  const creationalRoutes = getType('creational');
  console.log(creationalRoutes);

  return (
    <>
      {creationalRoutes.map((item: RoutesModel, index) => (
        <Link to={item.path} key={index}>
          {item.path}
        </Link>
      ))}
      <Outlet />
    </>
  );
};

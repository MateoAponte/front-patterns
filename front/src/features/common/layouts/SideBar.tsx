import { NavLink } from 'react-router-dom';
import { ROUTES, RoutesDictionary, RoutesModel } from '../../../features/common/router/RouterInfo.ts';
import React from 'react';
import { Text } from '../components/Text.tsx';

const mainRoutes = ROUTES.filter((item: RoutesModel) => item.path !== '/');
export const SideBar = () => {
  return (
    <>
      <nav className="ptn-sidebar">
        <Text text="Patterns" type="heading" modifier="bolder" spaced="spaced-1" />
        {mainRoutes.map((item, index) => (
          <NavLink className="ptn-sidebar__item" key={index} to={item.path}>
            {RoutesDictionary[item.path]}
          </NavLink>
        ))}
      </nav>
    </>
  );
};

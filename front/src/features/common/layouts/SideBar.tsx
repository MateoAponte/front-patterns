import { NavLink } from 'react-router-dom';
import {
  ROUTES,
  RoutesDictionary,
  RoutesModel,
} from '../../../features/common/router/RouterInfo.ts';
import React from 'react';
import { Text } from '../components/Text.tsx';
import Logo from '../../../assets/images/logo.svg';

const mainRoutes = ROUTES.filter((item: RoutesModel) => item.path !== '/');
export const SideBar = () => {
  return (
    <>
      <nav className="ptn-sidebar">
        <div className="ptn-sidebar__logo">
          <img className="ptn-sidebar__logo-image" src={Logo} alt="logo" />
          <Text
            text="Dev Learns"
            type="heading"
            modifier="bold"
            spaced="spaced-1"
            tag="h1"
          />
        </div>
        {mainRoutes.map((item, index) => (
          <NavLink className="ptn-sidebar__item" key={index} to={item.path}>
            {RoutesDictionary[item.path]}
          </NavLink>
        ))}
      </nav>
    </>
  );
};

import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Text } from '../components/Text.tsx';
import { getRedirectPath } from '../../common/router/RouterInfo.ts';
import { Divider } from '../components/Divider.tsx';

export const BreadCrumb: React.FC = () => {
  const location = useLocation();
  if (location.pathname === '/') return null;
  const paths = location.pathname.split('/');

  if (paths.length === 0) return null;
  let pathsRedirect = paths.map((path) => {
    const pathInfo = getRedirectPath(path);
    if (pathInfo.alias === 'index')
      return {
        name: 'Patrones',
        redirect: '/',
      };
    return {
      name: pathInfo.alias,
      redirect: pathInfo.path,
    };
  });
  pathsRedirect = pathsRedirect.filter(
    (item, index, self) =>
      index === self.findIndex((obj) => obj.name === item.name)
  );

  return (
    <section className="ptn-breadcrumb">
      {pathsRedirect.map((path, index) => {
        const getPathName = path.name === '' ? 'Home' : path.name;
        const separator = index !== pathsRedirect.length - 1 ? ' > ' : '';
        return (
          <span key={index}>
            <NavLink to={path.redirect || '/'}>
              <Text
                text={getPathName}
                type="helper"
                spaced="spaced-1"
                tag="span"
                modifier="italic"
              />
            </NavLink>
            <Text
              text={separator}
              type="helper"
              spaced="spaced-1"
              tag="span"
              modifier="italic"
            />
          </span>
        );
      })}
      <Divider orientation="horizontal" show />
    </section>
  );
};

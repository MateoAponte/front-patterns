import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Text } from '../components/Text.tsx';
import { getRedirectPath } from '../../common/router/RouterInfo.ts';
import { Divider } from '../components/Divider.tsx';

export const BreadCrumb: React.FC = () => {
  const location = useLocation();
  const paths = location.pathname.split('/');
  const pathsRedirect = paths.map((path) => {
    const pathInfo = getRedirectPath(path);
    return {
      name: pathInfo.alias,
      redirect: pathInfo.path,
    };
  });

  return (
    <section className="ptn-breadcrumb">
      {pathsRedirect.map((path, index) => {
        const getPathName = path.name === '' ? 'Home' : path.name;
        const separator = index !== pathsRedirect.length - 1 ? ' > ' : '';
        return (
          <>
            <NavLink to={path.redirect || '/'}>
              <Text text={getPathName} type="helper" spaced="spaced-1" tag="span" modifier="italic" />
            </NavLink>
            <Text text={separator} type="helper" spaced="spaced-1" tag="span" modifier="italic" />
          </>
        );
      })}
      <Divider orientation="horizontal" />
    </section>
  );
};

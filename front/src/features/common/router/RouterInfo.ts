import { Creational } from '../../creational/components/Creational.tsx';
import { Home } from '../../home/components/Home.tsx';
import { Factory } from '../../creational/factory/components/Factory.tsx';
import { CreationalMain } from '../../creational/components/CreationalMain.tsx';
import { Singleton } from '../../creational/singleton/components/Singleton.tsx';

export interface RoutesModel {
  path: string;
  alias: string;
  nested?: RoutesModel[];
  component?: React.FC;
}

export const ROUTES: Array<RoutesModel> = [
  {
    path: 'creational',
    alias: 'Patrones creacionales',
    component: Creational,
    nested: [
      {
        path: '',
        alias: 'Patrones',
        component: CreationalMain,
      },
      {
        path: 'factory',
        alias: 'Factory Method',
        component: Factory,
      },
      {
        path: 'abstract',
        alias: 'Abstract Factory',
        component: Factory,
      },
      {
        path: 'singleton',
        alias: 'Singleton',
        component: Singleton,
      },
      {
        path: 'prototype',
        alias: 'Prototype',
        component: Factory,
      },
      {
        path: 'builder',
        alias: 'Builder',
        component: Factory,
      },
    ],
  },
  {
    path: '/',
    alias: 'Home',
    component: Home,
  },
];

export enum RoutesDictionary {
  creational = 'Patrones creacionales',
  structural = 'Patrones Estructurales',
  comportalmental = 'Patrones Comportamentales',
}

export const getType = (type: string): Array<RoutesModel> => {
  const routes = ROUTES.filter((route: RoutesModel) => route.path.indexOf(type) !== -1)[0].nested || [];
  return routes.filter((items: RoutesModel) => !!items.path);
};

const findPath = (path: String, routes: Array<RoutesModel>) => {
  for (let i = 0; i <= routes.length - 1; i++) {
    let route = routes[i];
    if (route.path === path) return { path: `/${path}`, alias: route.alias };
    if (route.nested) {
      const nestedRoute = route.nested.find((nested) => nested.path === path);
      if (nestedRoute) {
        return {
          path: `/${route.path}/${path}`,
          alias: nestedRoute.alias,
        };
      } else {
        const recursiveResult = findPath(path, route.nested);
        if (recursiveResult) {
          return { path: `/${route.path}${recursiveResult}`, alias: recursiveResult.alias };
        }
      }
    }
  }
  return null;
};
export const getRedirectPath = (path: string) => {
  return findPath(path, ROUTES);
};

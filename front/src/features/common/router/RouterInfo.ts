import { Creational } from '../../creational/components/Creational.tsx';
import { Home } from '../../home/components/Home.tsx';
import { Factory } from '../../creational/factory/components/Factory.tsx';
import { CreationalMain } from '../../creational/components/CreationalMain.tsx';
import { Singleton } from '../../creational/singleton/components/Singleton.tsx';

export interface RoutesModel {
  path: string;
  nested?: RoutesModel[];
  component?: React.FC;
}

export const ROUTES: Array<RoutesModel> = [
  {
    path: 'creational',
    component: Creational,
    nested: [
      {
        path: '',
        component: CreationalMain,
      },
      {
        path: 'factory',
        component: Factory,
      },
      {
        path: 'abstract',
        component: Factory,
      },
      {
        path: 'singleton',
        component: Singleton,
      },
      {
        path: 'prototype',
        component: Factory,
      },
      {
        path: 'builder',
        component: Factory,
      },
    ],
  },
  {
    path: '/',
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
    if (route.path === path) return `/${path}`;
    if (route.nested) {
      const nestedRoute = route.nested.find((nested) => nested.path === path);

      if (nestedRoute) {
        return `/${route.path}/${path}`;
      } else {
        const recursiveResult = findPath(path, route.nested);
        if (recursiveResult) {
          return `/${route.path}${recursiveResult}`;
        }
      }
    }
  }
  return null;
};
export const getRedirectPath = (path: string) => {
  return findPath(path, ROUTES);
};
console.log(getRedirectPath('creational'));

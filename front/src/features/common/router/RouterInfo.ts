import { Creational } from '../../creational/components/Creational.tsx';
import { Home } from '../../home/components/Home.tsx';
import { Factory } from '../../creational/factory/components/Factory.tsx';
import { CreationalMain } from '../../creational/components/CreationalMain.tsx';

export interface RoutesModel {
  path: string;
  nested?: RoutesModel[];
  component: React.FC;
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
    ],
  },
  {
    path: '/',
    component: Home,
  },
];

export const getType = (type: string): Array<RoutesModel> => {
  return ROUTES.filter((route: RoutesModel) => route.path.indexOf(type) !== -1)[0].nested || [];
};

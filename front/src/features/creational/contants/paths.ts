import { RoutesModel } from '../../common/interfaces/RoutesInterfaces';
import { CreationalMain } from '../components/CreationalMain.tsx';
import { Factory } from '../factory/components/Factory.tsx';
import { Singleton } from '../singleton/components/Singleton.tsx';

export const CreationalPaths: RoutesModel[] = [
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
];

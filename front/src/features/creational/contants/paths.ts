import { RoutesModel } from '../../common/interfaces/RoutesInterfaces';
import { CreationalMain } from '../components/CreationalMain.tsx';

import { Builder } from '../builder/components/Builder.tsx';
import { Factory } from '../factory/components/Factory.tsx';
import { Singleton } from '../singleton/components/Singleton.tsx';
import { Prototype } from '../prototype/components/Prototype.tsx';
import { Abstract } from '../abstract/components/Abstract.tsx';

export const CreationalPaths: RoutesModel[] = [
  {
    path: '',
    alias: 'index',
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
    component: Abstract,
  },
  {
    path: 'singleton',
    alias: 'Singleton',
    component: Singleton,
  },
  {
    path: 'prototype',
    alias: 'Prototype',
    component: Prototype,
  },
  {
    path: 'builder',
    alias: 'Builder',
    component: Builder,
  },
];

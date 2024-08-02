import { PatternPresentationInterface } from '../../common/interfaces/PatternPresentation';
import { MdFactory } from 'react-icons/md';
import { HiBuildingOffice2 } from 'react-icons/hi2';
import { RiFileCopy2Fill } from 'react-icons/ri';
import { MdConstruction } from 'react-icons/md';
import { GiPodium } from 'react-icons/gi';

export const PATTERN_PRESENTATION: PatternPresentationInterface[] = [
  {
    name: 'factory',
    icon: MdFactory,
    description:
      'Pattern to create multiple elements by using only one point where all of that have the purpose but different implementations',
  },
  {
    name: 'abstract',
    icon: HiBuildingOffice2,
    description:
      'In similar way to the factory pattern, provides a way to create multiple factories that are related of elements with different purposes',  
  },
  {
    name: 'builder',
    icon: MdConstruction,
    description: "It's a pattern that is used to create elements by using a step-by-step process",
  },
  {
    name: 'prototype',
    icon: RiFileCopy2Fill,
    description: 'The principal idea of the prototype pattern is to use a copy of an existing object tomodify and create a new object',
  },
  {
    name: 'singleton',
    icon: GiPodium,
    description: 'Allows to have only one instance of a class across the application instead of creating a new instance every time',
  },
];

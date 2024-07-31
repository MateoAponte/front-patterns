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
      'Pattern ot create multiple elements that have the purpose but different implementations',
  },
  {
    name: 'abstract',
    icon: HiBuildingOffice2,
    description:
      'Pattern ot create multiple elements that have the purpose but different implementations',
  },
  {
    name: 'builder',
    icon: MdConstruction,
    description: 'Lorem Ipsum',
  },
  {
    name: 'prototype',
    icon: RiFileCopy2Fill,
    description: 'Lorem Ipsum',
  },
  {
    name: 'singleton',
    icon: GiPodium,
    description: 'Lorem Ipsum',
  },
];

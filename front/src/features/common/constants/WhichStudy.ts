import { AiOutlineThunderbolt } from 'react-icons/ai';
import { FaCode } from 'react-icons/fa6';
import { FiLayers } from 'react-icons/fi';
import { IconType } from 'react-icons/lib';
import { MdWeb } from 'react-icons/md';
import { RiTestTubeFill } from 'react-icons/ri';
import { IoTrailSign } from 'react-icons/io5';

interface WhichStudy {
  title: string;
  description: string;
  icon: IconType;
}

export const WhichStudyList: WhichStudy[] = [
  {
    title: 'Best practices',
    description:
      'Learn industry-proven techniques and best practices to write clean, efficient, and maintainable code.',
    icon: FaCode,
  },
  {
    title: 'Design Patterns',
    description:
      'Explore time-tested design patterns that help you solve common software architecture challenges effectively.',
    icon: FiLayers,
  },
  {
    title: 'Testing',
    description:
      'Discover the principles of effective testing, including unit tests, integration tests, and best practices for test automation.',
    icon: RiTestTubeFill,
  },
  {
    title: 'Front in Deep',
    description:
      'Dive deep into front-end technologies, from frameworks to performance optimization, and build robust, responsive interfaces.',
    icon: MdWeb,
  },
  {
    title: 'SOLID Principles',
    description:
      'Master the SOLID principles to ensure your software is scalable, robust, and easy to maintain.',
    icon: AiOutlineThunderbolt,
  },
  {
    title: 'Develop Guidelines',
    description:
      'Establish strong development guidelines that streamline workflows and enhance collaboration across teams.',
    icon: IoTrailSign,
  },
];

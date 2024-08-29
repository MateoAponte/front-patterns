import React from 'react';
import { Text } from '../components/Text.tsx';

export const Footer = () => {
  return (
    <footer className="footer">
      <Text text="Copyright © 2024. All rights reserved." type="common" />
      <Text
        text="Made with ❤️ by Mathew Ap"
        type="common"
        isLink
        href="https://github.com/MateoAponte"
        tag="a"
      />
    </footer>
  );
};

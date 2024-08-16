import React, { useEffect, useState } from 'react';
import notificationService from '../helpers/notificationService.ts';
import { countStore } from '../../../common/store/index.ts';
import { Text } from '../../../common/components/Text.tsx';

const id = 1;

export const NotificationDisplay: React.FC = () => {
  const notifications = countStore((state: any) => state.notifications);

  useEffect(() => {
    notificationService.subscribe(() => {}, id);
  }, []);

  return (
    <div className="notification__display">
      <Text tag="span" text="In queue: " type="common" modifier="bolder" />
      <Text tag="span" text={notifications.length} type="heading" isCode />
    </div>
  );
};

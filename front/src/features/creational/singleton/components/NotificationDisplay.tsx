import React, { useEffect, useState } from 'react';
import notificationService from '../helpers/notificationService.ts';
import { countStore } from '../../../common/store/index.ts';

const id = 1;

export const NotificationDisplay: React.FC = () => {
  const notifications = countStore((state: any) => state.notifications);

  useEffect(() => {
    notificationService.subscribe(() => {}, id);
  }, []);

  return <div className="notification__display">{notifications.length}</div>;
};

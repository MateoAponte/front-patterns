import React, { useEffect } from 'react';
import { PTButton } from '../../../common/components/Button.tsx';
import notificationService from '../helpers/notificationService.ts';
import { NotificationStatus } from '../interfaces/notification.ts';

export const NotificationButton: React.FC = () => {
  const addNotification = () => {
    notificationService.addNotification({
      title: 'Notification',
      message: 'This is a notification',
      status: NotificationStatus.SUCCESS,
      time: 5,
    });
  };

  return (
    <PTButton type="large" onClick={() => addNotification()}>
      Add Element
    </PTButton>
  );
};

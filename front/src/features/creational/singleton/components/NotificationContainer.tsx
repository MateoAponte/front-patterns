import React, { useEffect } from 'react';
import notificationService from '../helpers/notificationService.ts';
import { PTBanner } from '../../../common/components/Banner.tsx';
import { TypeActions } from '../../../common/store/types.ts';
import { countStore } from '../../../common/store/index.ts';
import { Notification } from '../interfaces/notification.ts';

const id = 0;
export const NotificationContainer: React.FC = () => {
  const notifications = countStore((state: any) => state.notifications);

  const addNotification = countStore(
    (state: any) => state[TypeActions.ADD_NOTIFICATION]
  );
  const deleteNotification = countStore(
    (state: any) => state[TypeActions.DELETE_NOTIFICATION]
  );

  useEffect(() => {
    const handleNotification = (message: Notification) => {
      addNotification({
        ...message,
        id: Math.floor(Math.random() * (1000 + 1) + 1),
      });
    };

    notificationService.subscribe(handleNotification, id);

    return () => {
      notificationService.unsubscribe(id);
    };
  }, []);

  return (
    <div className="notifications">
      {JSON.stringify(notifications)}
      {notifications.map((notification, index) => (
        <PTBanner
          key={notification.id}
          title={notification.title}
          message={notification.message}
          loader={notification.time}
          status={notification.status}
          hasClose
          hasLoader
          onUpdate={() => deleteNotification(index)}
          onClose={() => deleteNotification(index)}
        />
      ))}
    </div>
  );
};

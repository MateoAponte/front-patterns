export enum NotificationStatus {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
}

export interface Notification {
  id: number;
  title: string;
  status: NotificationStatus;
  message: string;
  time: number;
}

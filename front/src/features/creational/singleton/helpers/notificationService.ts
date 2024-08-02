import { Notification } from '../interfaces/notification.ts';

interface Subscription {
  id: number;
  subscription: Function;
}

class NotificationService {
  private static instance: NotificationService;
  private subscribers: Array<Subscription>;

  constructor() {
    if (NotificationService.instance) {
      return NotificationService.instance;
    }

    this.subscribers = [];
    NotificationService.instance = this;
  }

  // Subscribe to notification updates
  subscribe(subscription, id) {
    this.subscribers.push({ id, subscription });
  }

  // Notify all subscribers of a new notification
  notify(message: Notification) {
    console.log(this.subscribers);
    this.subscribers.forEach((item) => item.subscription(message));
  }
  unsubscribe(index) {
    this.subscribers.splice(index, 1);
  }

  addNotification(message: Notification) {
    this.notify(message);
  }
}

// Export a single instance
const notificationService = new NotificationService();
export default notificationService;

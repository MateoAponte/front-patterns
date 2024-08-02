import { Notification } from '../../creational/singleton/interfaces/notification';

export interface StateInterface {
  notifications: Array<Notification>;
  pattern: String;
}
export interface ActionsInterface {
  INCREMENT_COUNTER: (by: number) => void;
  DECREMENT_COUNTER: (by: number) => void;
}

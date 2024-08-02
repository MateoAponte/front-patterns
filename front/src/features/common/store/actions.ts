import { TypeActions } from './types.ts';

export const actions = (set, get) => ({
  [TypeActions.ADD_NOTIFICATION]: (value: Notification) => {
    set((state) => ({
      notifications: [...state.notifications, value],
    }));
  },
  [TypeActions.DELETE_NOTIFICATION]: (index: number) =>
    set((state) => {
      const { notifications } = get();
      const copyNotif = [...notifications];
      copyNotif.splice(index, 1);
      console.log(copyNotif);

      return {
        notifications: copyNotif,
      };
    }),
});

import { TypeActions } from './types.ts';

export const actions = (set) => ({
  [TypeActions.INCREMENT_COUNTER]: () => set((state) => ({ counter: state.counter + 1 })),
  [TypeActions.DECREMENT_COUNTER]: () => set((state) => ({ counter: state.counter - 1 })),
  [TypeActions.UPDATE_COUNTER]: (number: Number) => set(() => ({ counter: number })),
  [TypeActions.UPDATE_PATTERN]: (value: String) => set(() => ({ pattern: value })),
});

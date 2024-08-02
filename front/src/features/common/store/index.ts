import { create } from 'zustand';
import {
  ActionsInterface,
  StateInterface,
} from '../interfaces/StoreInterface.ts';

import { state as StoreState } from './state.ts';
import { actions } from './actions.ts';

export const countStore = create((set, get) => ({
  ...StoreState,
  ...actions(set, get),
}));

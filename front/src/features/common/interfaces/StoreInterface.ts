export interface StateInterface {
  counter: number;
  pattern: String;
}
export interface ActionsInterface {
  INCREMENT_COUNTER: (by: number) => void;
  DECREMENT_COUNTER: (by: number) => void;
}

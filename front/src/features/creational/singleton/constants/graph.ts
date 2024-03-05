export const SINGLETON = `
flowchart LR
  A[App]
  A -- Use --> B[Singleton Instance]
  B -- Depends --> C[Singleton Class]
`;

export const REDUX_STORE = `
flowchart LR
  A[App]
  A -. Use .-> B[Redux Hooks]
  B -. Depends .-> C[Redux Store]
`;

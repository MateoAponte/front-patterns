export const SINGLETON = `
flowchart TB
  A[App]
  A -- Interacts --> B[Singleton Instance]
  B -- Depends --> C[Singleton Class]
`;

export const REDUX_STORE = `
flowchart TB
  B[Notification System]
  C[Button] -. Subscribe .-> B
  D[Notification Container] -. Subscribe .-> B
  E[Icon] -. Subscribe .-> B
  C -- Execute --> B
  B -- Notify ---> D
  B -- Notify ---> E
`;

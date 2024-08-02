export const SINGLETON = `
flowchart TB
  A[App]
  A -- Interacts --> B[Singleton Instance]
  B -- Depends --> C[Singleton Class]
`;

export const REDUX_STORE = `
flowchart TB
  A[App]
  A -- Use --> B[Notification System]
  B -. Management .-> C[Notification A]
  B -. Management .-> D[Notification B]
  C -- Interact by --> E[User]
  D -- Interact by --> E[User] 
`;

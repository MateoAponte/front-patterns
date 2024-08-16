export const BUILDER_EXAMPLE = `
flowchart BT
  B[B. Form Management]
  B -- Initialize --> C[C. Form Director]
  D[D. Form Factory]
  C -- Call Specialize Factory --> D
  D -. Use & Build .-> E[E. Form Element]
  B -. Manage .-> E
  P[P. Controllers] -- Call --> B
  F[F. Interpreter]
  O[O. Observer]
  O -- Subscribe --> Q
  O -- Subscribe --> P
  Q[Q. Render]
  Q -. Call ..-> F
  F -. Returns ..-> Q
  Q -. Shows .-> E
`;

export const BUILDER = `
flowchart TB
  A[App]
  A -. Use .-> B[Director]
  C[Builder Interface]
  D[Builder Form]
  B -- Executed --> D
  B -. Implements .-> C
  D -. Implements .-> C
  D -- Build --> F[Custom Form]
  D -- Return --> G[Form Component]
  F -- Is --> G
`;

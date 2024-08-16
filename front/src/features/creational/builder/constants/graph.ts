export const BUILDER = `
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

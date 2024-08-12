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

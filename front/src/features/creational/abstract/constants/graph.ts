export const ABSTRACT = `
flowchart LR
  A[App]
  B[Concrete Factory A1]
  C[Concrete Factory B1]
  D[Interface A]
  E[Interface B]
  F[Interface Factory]

  B -- Build ---> A1[Product A1]
  B -- Build ---> B1[Product B1]
  A1 -- Implements  --> D
  B1 -- Implements  --> E

  C -- Build ---> A2[Product A2]
  C -- Build ---> B2[Product B2]
  A2 -- Implements  --> D
  B2 -- Implements  --> E

  B -- Implements ---> F
  A -- Use --> F
`;

export const EXAMPLE = `
flowchart TB
  A[App]
  B[Concrete Factory A1]
  C[Concrete Factory B1]
  D[Concrete Factory C1]
  E[Interface A]
  F[Interface B]
  G[Interface C]
  H[Interface Factory]

  B -- Build ---> A1[Product A1]
  C -- Build ---> A2[Product A2]
  D -- Build ---> A3[Product A3]

  B -- Build ---> B1[Product B1]
  C -- Build ---> C2[Product B2]
  D -- Build ---> B3[Product B3]
  
  B -- Build ---> C1[Product C1]
  C -- Build ---> B2[Product C2]
  D -- Build ---> C3[Product C3]

  A1 -- Implements  --> E
  B1 -- Implements  --> F
  C1 -- Implements  --> G
  
  A2 -- Implements  --> E
  B2 -- Implements  --> F
  C2 -- Implements  --> G
  
  A3 -- Implements  --> E
  B3 -- Implements  --> F
  C3 -- Implements  --> G

  B -- Implements ---> H
  C -- Implements ---> H
  D -- Implements ---> H
  A -- Use --> H
`;

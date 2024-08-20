export const PROTOTYPE = `
flowchart LR
  A[App]
  A -- Use --> B[Prototype Class]
  C[Clonable Interface]
  B -. Implements .-> C
  B -- Clone ---> D[New Object]
`;

export const TEMPLATES = `
flowchart BT
  A[A. Controller] 
  B[B. Render] 
  A -- Call --> C[C. Template Mananager]
  D[D. Template]  
  C -. Manage .-> D
  D -. Implements .-> I[I. Clone Interface]
  I -- Clone --> N[N. New Template]
  B -. Shows .-> D
  O[O. Observer]
  O -- Subscribe --> A
  O -- Subscribe --> B
`;

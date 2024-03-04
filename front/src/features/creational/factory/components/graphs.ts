export const factory = `
flowchart TB
  A[App]
  A -. Use .-> B[Factory]
  BA[FactoryA] -- Inherits --> B
  BB[FactoryB] -- Inherits --> B
  B -. Depends .-> C[Product]
  CA[ProductA] -- Inherits --> C
  CB[ProductA] -- Inherits --> C
  BA -. Depends .-> CA
  BB -. Depends .-> CB
`;
export const example = `
flowchart TB
  A[Canvas]
  A -. Use .-> B[ShapesFactory]
  B -. Depends .-> C[Shape]
  BA[CircleFactory] ---> B
  BB[SquareFactory] ---> B
  BC[TriangleFactory] ---> B
  CA[CircleShape] --> C
  CB[SquareShape] --> C
  CC[TriangleShape] --> C
  subgraph Relations
  BA -.-> CA
  BB -.-> CB
  BC -.-> CC
  end
`;

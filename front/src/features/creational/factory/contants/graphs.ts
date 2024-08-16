export const FACTORY = `
flowchart TB
	A(Creator) -->|Use| B[Product Interface]
	A -->|Extends| F[Concrete Product A]
	A -->|Extends| C[Concrete Product B]
	F -->|Create| D[Object Product A]
	C -->|Create| E[Object Product B]
	D -.->|Implements| B
	E -.->|Implements| B
`;
export const SHAPES = `
flowchart RL
  A[Canvas]
  A -. Use .-> B[ShapesFactory]
  B -. Depends .-> C[Shape]
  BA[CircleFactory] --> B
  BB[SquareFactory] --> B
  BC[TriangleFactory] --> B
  CA[CircleShape] --> C
  CB[SquareShape] --> C
  CC[TriangleShape] --> C
  subgraph Relations
  BA -.-> CA
  BB -.-> CB
  BC -.-> CC
end
`;

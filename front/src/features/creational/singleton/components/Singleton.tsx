import React from 'react';
import { PatternLayout } from '../../../common/layouts/PatternLayout.tsx';
import { Text } from '../../../common/components/Text.tsx';
import { REDUX_STORE, SINGLETON } from '../constants/graph.ts';

const mainText = {
  graph: SINGLETON,
  text: [
    {
      text: 'Patrón que nos asegura que no se pueda crear más de una instancia de un objeto y que ',
    },
    {
      text: 'su modificación solo se pueda en un punto',
      isHighlight: true,
    },
  ],
};
const applications = {
  graph: REDUX_STORE,
  text: [
    {
      text: 'Un ejemplo claro en Front, corresponde a las store para el manejo de estados globales. Se crea una instancia de una store en la App',
    },
    {
      text: 'Y solamente se puede acceder a esta por medio de Hooks sin poder afectar su información directamente',
      isHighlight: true,
    },
  ],
};
const pros = [
  <Text text="Se sabe que solo existe una instancia y es más fácil debuggear errores" type="list" />,
  <Text text="Un solo punto de acceso y modificación global" type="list" isHighlight />,
  <Text text="La instancia solo se requiere inicializar una única vez lo cual da control del sistema" type="list" />,
];
const uses = [
  <Text text="Usarlo cuando se necesite un único punto de acceso a recursos compartidos" type="list" />,
  <Text text="También para creaciones de conexiones de bases de datos en Apps simples" type="list" />,
  <Text text="Depende demasiado de su aplicación, su modelo de BD" type="list" />,
];
const examples = [
  <Text text="Manejo de configuración global, como variables de entorno o configuración de idiomas" type="list" />,
  <Text text="Servicio de gestión de datos compartidos, es decir, stores reactivas" type="list" />,
  <Text text="Caché de datos o servicios de red para gestionar la instancia del servicio de red o la caché de datos" type="list" />,
];
const cons = [
  <Text
    text="El patrón resuelve dos problemas al mismo tiempo,creación y acceso a sus intancias por lo cual Vulnera el principio de Responsabilidad única."
    type="list"
  />,
  <Text text="La complejidad incrementa en ambientes de múltiples hilos de ejecución." type="list" />,
  <Text text="Complejidad al realizar pruebas unitarias debido al uso de elementos estáticos." type="list" />,
];

export const Singleton: React.FC = () => {
  return (
    <>
      <PatternLayout mainText={mainText} cons={cons} pros={pros} uses={uses} examples={examples} title="Singleton" applications={applications}>
        <Text type="heading" tag="h1" text="Hi" />
      </PatternLayout>
    </>
  );
};

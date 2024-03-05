import React from 'react';
import { PatternLayout } from '../../../common/layouts/PatternLayout.tsx';
import { Text } from '../../../common/components/Text.tsx';
import { REDUX_STORE, SINGLETON } from '../constants/graph.ts';
import { countStore } from '../../../common/store/index.ts';
import { PTRow } from '../../../common/components/PTRow.tsx';
import { Column } from '../../../common/components/Column.tsx';
import { PTButton } from '../../../common/components/Button.tsx';
import { TypeActions } from '../../../common/store/types.ts';
import { TextField } from '../../../common/components/TextField.tsx';
import { Divider } from '../../../common/components/Divider.tsx';

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
  const realStore = countStore((state: any) => state);
  const count = countStore((state: any) => state.counter);
  const pattern = countStore((state: any) => state.pattern);
  const increment = countStore((state: any) => state[TypeActions.INCREMENT_COUNTER]);
  const decrement = countStore((state: any) => state[TypeActions.DECREMENT_COUNTER]);
  const updateCounter = countStore((state: any) => state[TypeActions.UPDATE_COUNTER]);
  const updatePattern = countStore((state: any) => state[TypeActions.UPDATE_PATTERN]);

  return (
    <>
      <PatternLayout mainText={mainText} cons={cons} pros={pros} uses={uses} examples={examples} title="Singleton" applications={applications}>
        <PTRow perRow="2-item">
          <Column>
            <Column>
              <PTRow perRow="4-item">
                <PTButton type="small" onClick={() => increment()}>
                  Increase +
                </PTButton>
                <PTButton type="small" onClick={() => decrement()}>
                  Decrease -
                </PTButton>
                <PTButton type="small" onClick={() => updateCounter(50)}>
                  Set 50
                </PTButton>
                <PTButton type="small" onClick={() => updateCounter(-100)}>
                  Set -100
                </PTButton>
              </PTRow>
              <PTRow perRow="2-item">
                <Text text={'Count: ' + String(count)} type="heading" heading="h1" modifier="bolder" />
              </PTRow>
            </Column>
            <Divider orientation="horizontal" />
            <Column>
              <TextField input={pattern} setInput={updatePattern} />
              <Text text={'Pattern: ' + pattern} type="heading" heading="h3" modifier="bolder" />
            </Column>
          </Column>
          <Text text={JSON.stringify(realStore)} type="common" />
        </PTRow>
      </PatternLayout>
    </>
  );
};

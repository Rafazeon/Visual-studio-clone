import { SiTypescript } from "react-icons/si";
import { LifeCycleState, CompiledLifeCycleState } from "~/components/Content/LifeCycle/useState"
import { LifeCycleEffect, CompiledLifeCycleEffect } from "~/components/Content/LifeCycle/useEffect"

export const arr = [
  {
    title: "AULAS",
    value: "root",
    data: [
      {
        title: "Ciclo-de-vida-react-hooks",
        value: "ciclo-de-vida-react-hooks",
        content: [
          {
            Icon: SiTypescript,
            title: "useState.tsx",
            Component: LifeCycleState,
            ComponentReview: CompiledLifeCycleState
          },

          {
            Icon: SiTypescript,
            title: "useEffect.tsx",
            Component: LifeCycleEffect,
            ComponentReview: CompiledLifeCycleEffect
          },

          {
            Icon: SiTypescript,
            title: "useRef.tsx",
            Component: "",
            ComponentReview: ""
          },

          {
            Icon: SiTypescript,
            title: "useMemo.tsx",
            Component: "",
            ComponentReview: ""
          },

          {
            Icon: SiTypescript,
            title: "useCallback.tsx",
            Component: "",
            ComponentReview: ""
          },
        ],
      },

      {
        title: "Styled-components",
        value: "styled-components",
        content: [
          {
            Icon: SiTypescript,
            title: "Configurando-styled-components.tsx",
            Component: "",
            ComponentReview: ""
          },

          {
            Icon: SiTypescript,
            title: "Estilizando-componente-html.ts",
            Component: "",
            ComponentReview: ""
          },

          {
            Icon: SiTypescript,
            title: "Estilizando-componente-nativo.ts",
            Component: "",
            ComponentReview: ""
          },
        ],
      },

      {
        title: "Consumindo-api",
        value: "consumindo-api",
        content: [
          {
            Icon: SiTypescript,
            title: "Promise-utilizando-then.tsx",
            Component: "",
            ComponentReview: ""
          },
          {
            Icon: SiTypescript,
            title: "Promise-async-await.tsx",
            Component: "",
            ComponentReview: ""
          },
        ],
      },

      {
        title: "Inserindo-autenticação",
        value: "inserindo-autenticacao",
        content: [
          {
            Icon: SiTypescript,
            title: "Configurando-autenticacao-rotas.tsx",
            Component: "",
            ComponentReview: ""
          },

          {
            Icon: SiTypescript,
            title: "Configurando-api-com-axios-token.ts",
            Component: "",
            ComponentReview: ""
          },
        ],
      },

      {
        title: "Context-api-configuração",
        value: "context-api-configuracao",
        content: [
          {
            Icon: SiTypescript,
            title: "Configurando-pasta-context.tsx",
            Component: "",
            ComponentReview: ""
          },
          {
            Icon: SiTypescript,
            title: "Adicionando-context-global.tsx",
            Component: "",
            ComponentReview: ""
          },
          {
            Icon: SiTypescript,
            title: "Consumindo-os-dados-do-context-na-aplicacao.tsx",
            Component: "",
            ComponentReview: ""
          },
        ],
      },
    ],
  },
  {
    title: "TESTE",
    value: "teste",
    data: [
      {
        title: "teste-1",
        value: "teste-1",
        content: [],
      },

      {
        title: "teste-2",
        value: "teste-2",
        content: [],
      },
    ],
  },
];

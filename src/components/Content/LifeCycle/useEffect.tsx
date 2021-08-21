import React, { useState, useEffect } from "react";

import * as S from "~/styles/components/Content/LifeCycle/useEffect";

import Scroller from "~/components/Scroller";

export const LifeCycleEffect = `import React, { useState } from "react";

function LifeCycleEffect() {
    const [text, setText] = useState("");
    const [action, setAction] = useState(false)
  
    useEffect(() => {
        setText("Componente Montou") // ComponentDidMount
  
        // Estou forçando uma condição para renderizar uma variável para simular o componentDidUpdate
        setTimeout(() => {
          setAction(true)
        }, 5000)
  
        return () => { // ComponentWillUnmount
            alert("Desmontou o componente") 
        }
    }, []);
  
    useEffect(() => {
      setText("Componente Atualizou")
      setAction(false)
    }, [action]) // ComponentDidUpdate
  
    return (
      <div>
        <p>
          No ciclo de vida do React Components, o useEffect veio para a solução de
          3 eventos que tinha antes, o primeiro:
        </p>
        <p>
          componentDidMount: significa quando o componente renderizar, faça a
          ação.
        </p>
        <p>
          componentDidUpdate: significa, caso houver alguma alteração faça a ação.
        </p>
        <p>
          componentWillUnmount: significa, quando o componente desmontar ou parar
          de existir, faça a ação.
        </p>
        <p>Representação utilizando o React Hooks:</p>
        <p>
          componentDidMount: useEffect(() => {}, [])
        </p>
  
        <p>
          componentDidUpdate: useEffect(() => {}, [variavel])
        </p>
  
        <p>
          componentWillUnmount: useEffect(() => { return () => {callAction()} }, [])
        </p>
        <p>
          A Funcionalidade useEffect é utilizada, para fazer um efeito na aplicação a partir de alguma ação do componente.
        </p>
        
        <h1>{text}</h1>
      </div>
    );
  }

   export default LifeCycleEffect
`;

export const CompiledLifeCycleEffect = () => {
  const [text, setText] = useState("");
  const [action, setAction] = useState(false);

  useEffect(() => {
    setText("Componente Montou"); // ComponentDidMount

    // Estou forçando uma condição para renderizar uma variável para simular o componentDidUpdate
    setTimeout(() => {
      setAction(true);
    }, 5000);

    return () => {
      // ComponentWillUnmount
      alert("Desmontou o componente");
    };
  }, []);

  useEffect(() => {
    if (action) {
      setText("Componente Atualizou");
      setAction(false);
    }
  }, [action]); // ComponentDidUpdate

  return (
    <Scroller height={window.innerHeight - 50}>
      <S.Container>
        <p>
          No ciclo de vida do React Components, o useEffect veio para a solução
          de 3 eventos que tinha antes, o primeiro:
        </p>
        <p>
          componentDidMount: significa quando o componente renderizar, faça a
          ação.
        </p>
        <p>
          componentDidUpdate: significa, caso houver alguma alteração faça a
          ação.
        </p>
        <p>
          componentWillUnmount: significa, quando o componente desmontar ou
          parar de existir, faça a ação.
        </p>
        <p>Representação utilizando o React Hooks:</p>
        <p>
          componentDidMount: useEffect(() ={">"} {}, [])
        </p>

        <p>
          componentDidUpdate: useEffect(() ={">"} {}, [variavel])
        </p>

        <p>
          componentWillUnmount: useEffect(() ={">"}{" "}
          {"return () => {callAction()}"}, [])
        </p>
        <p>
          A Funcionalidade useEffect é utilizada, para fazer um efeito na
          aplicação a partir de alguma ação do componente.
        </p>

        <h1>{text}</h1>
      </S.Container>
    </Scroller>
  );
};

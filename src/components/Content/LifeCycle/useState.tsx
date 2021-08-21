import React, { useState } from "react";

import * as S from "~/styles/components/Content/LifeCycle/useState";

export const LifeCycleState = `import React, { useState } from "react";

  function LifeCycleState() {
       const [text, setText] = useState("")
  
       const handleText = (e) => {
           setText(e.target.value)
       }
  
       const handleButton = () => {
           alert("Você clicou no botão")
       }
  
       return (
           <div>
                <p>
                    A Funcionalidade useState, é utilizado para renderizar um valor na dom, por exemplo, ao declarar o text = useState(""),
                    significa que o valor irá iniciar vazio, porém ao escrever no input, estou passando o e.target.value,
                    pois pego o valor digitado dentro da dom do html, e renderizo ao usuário.
                </p>
                <p>
                    Com o useState é possível fazer qualquer colateral que quiser na aplicação, por exemplo quando clicar no botão quero que
                    abra um alerta com uma mensagem.
                </p>
  
               <input type="text" onChange={handleText} />
               <button onClick={handleButton}>Clica me</button>
               <h1>{text}</h1>
           </div>
  
       )
   }

   export default LifeCycleState
`;

export const CompiledLifeCycleState = () => {
  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleButton = () => {
    alert("Você clicou no botão");
  };

  return (
    <S.Container>
      <div>
        <input type="text" onChange={handleText} />
        <button onClick={handleButton}>Clica me</button>
      </div>
      <h1>{text}</h1>
    </S.Container>
  );
};

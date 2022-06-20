// useLayoutEffect

//muito parecido com o useEffect

// a grande diferença é que este hook roda antes de renderizar o componente

// ou seja, o hook é síncrono, bloqueando o carregamento da pagina para o sucesso da sua funcionalidade

// a ideia é executar algo antes que o usuário veja a página

import { useState, useEffect, useLayoutEffect } from "react";

const UseLayoutEffect = () => {
  const [name, setName] = useState("Algum nome");

  useEffect(() => {
    console.log("2");

    setName("Mudou de nome");
  }, []);

  useLayoutEffect(() => {
    console.log("1");
    setName("OUTRO NOME");
  }, []);

  console.log(name);

  return (
    <div>
      <h1>useLayoutEffect</h1>
      <p>{name}</p>
    </div>
  );
};

export default UseLayoutEffect;


// dessa forma temos na ordem a inicialização do state como algum nome, logo depois antes do componente ser mostrado na tela, passa a ser Mudou de nome, e quando o componente renderiza tem a chamada do useEffect OUTRO NOME


//state --> layoutEffect --> effect 


//ou seja ANTES DE INICIALIZAR QUALQUER COISA O LAYOUT EFFECT É INVOCADO


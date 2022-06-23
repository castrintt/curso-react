// useImperativeHandle

// com o hook useImperativeHandle temos como acionar ações em um outro componente de forma imperativa

// como não podemos passar refs como propos, precisamos usar uma função fowardRef

// isso nos permite passar as referencias e torna o nosso exemplo viavel


import { useRef } from "react";

import ExternComponent from "./ExternComponent";

const UseImperativeHandle = () => {

    const inputRef = useRef('')



  return (
    <div>
      <h1>useImperativeHandle</h1>
      {/* enviando uma referencia via props  */}
      {/* lembrando que só podemos acessar uma referencia passada como props via forwardRef */}
      <ExternComponent ref={inputRef} />
    </div>
  );
};

export default UseImperativeHandle;



// usando o fowardRef (envolvemos o componente)

import { forwardRef, useRef, useImperativeHandle } from "react";

const ExternComponent = forwardRef((props, ref) => {
  const localInputRef = useRef();

  return (
    <div>
      <h1>Componente externo</h1>
    </div>
  );
});
export default ExternComponent;



// componente pai, onde contem uma função que sera executada no componente filho


import { useRef } from "react";

import ExternComponent from "./ExternComponent";

const UseImperativeHandle = () => {
  const inputRef = useRef();

  return (
    <div>
      <h1>useImperativeHandle</h1>
      {/* esse componente se torna um componente referenciado */}
      <ExternComponent ref={inputRef} />
      {/* esse botao esta executando uma função que está em outro componente */}
      <button onClick={() => inputRef.current.validate()}>Validate</button>
    </div>
  );
};

export default UseImperativeHandle;


// componente filho

import { forwardRef, useRef, useImperativeHandle } from "react";

//chamando props e a referencia/declarando o forwardRef para indicar que vamos receber uma referencia 
const ExternComponent = forwardRef((props, ref) => {
  const localInputRef = useRef();

  //declarando o input ref passando como primeiro argumento a referencia e segundo uma arrow function que chama um metodo validate ---->> esse acessado no componente pai (inputRef.current.validate())
  useImperativeHandle(ref, () => {
    return {
      validate: () => {
        localInputRef.current.value.length > 3
          ? (localInputRef.current.value = "")
          : "";
      },
    };
  });

  return (
    <div>
      <h1>Componente externo</h1>
      <p>Insira no maximo 3 caracteres</p>
      <input type="text" ref={localInputRef} />
    </div>
  );
});
export default ExternComponent;

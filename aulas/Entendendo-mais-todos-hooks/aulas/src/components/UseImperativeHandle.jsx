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

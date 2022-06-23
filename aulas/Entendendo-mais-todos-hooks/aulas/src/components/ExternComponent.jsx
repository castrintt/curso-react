import { forwardRef, useRef, useImperativeHandle } from "react";

const ExternComponent = forwardRef((props, ref) => {
  const localInputRef = useRef();

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

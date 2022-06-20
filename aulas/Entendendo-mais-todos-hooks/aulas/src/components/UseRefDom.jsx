import { useRef, useState } from "react";

const UseRefDom = () => {
  const inputRef = useRef("OLA");
  const [text, setText] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputRef)
  }

  return (
    <div>
      <h1>useRef</h1>
      <span>
        {inputRef.current.value}
      </span>
      <form
      onSubmit={handleSubmit}
      >
        <input
          type="text"
          ref={inputRef}
          // value={text}
          // onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default UseRefDom;

import { useState, useEffect, useLayoutEffect } from "react";

const UseLayoutEffect = () => {
  const [name, setName] = useState("Algum nome");
  
  useLayoutEffect(() => {
    console.log("1");
    setName("OUTRO NOME");
  }, []);

  useEffect(() => {
    console.log("2");

    setName("Mudou de nome");
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

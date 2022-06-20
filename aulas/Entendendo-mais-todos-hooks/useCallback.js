// useCallback

// o hook de useCallback pode ser utilizado para duas situações

// ele basicamente memoriza uma função fazendo ela não ser reconstruida a cada renderização de um componente

// o primeiro caso é quando estamos prezando pela performance, então queremos que uma função muito complexa não seja reconstruida toda vez

//ja o segundo é quando o proprio React nos indica que uma função deveria estar contida em um useCallback, para evitar problemas de performance

// A diferença basica entre useCallback e useEffect é

// o useCallback deixa uma função memorizada no sistema, ou seja ela é chamada uma vez quando o componente renderiza e logo depois ela deixa um "salvo" em cache, ou seja, a diferença de um useEffect para um useCallback é simplesmente que useCallback armazena uma função e é mais performático (porem só é valido para logicas maiores) 


import { useCallback, useState } from "react";

const UseCallBack = () => {
  const [counter, setCounter] = useState(0);

  const getItemsFromDataBase = useCallback(() => {
    return ["a", "b", "c"];
  });

  return (
    <div>
      <h1>useCallback</h1>
      <List getItems={getItemsFromDataBase} />
      <button onClick={() => setCounter(counter + 1)}>Alterar</button>
      <p>{counter}</p>
    </div>
  );
};

export default UseCallBack;




import { useState, useEffect } from "react";

const List = ({ getItems }) => {
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    console.log("BUSCANDO ITENS DA DATABASE");

    setMyItems(getItems);
  }, [getItems]);

  return (
    <div>
      {myItems && myItems.map((values) => <p key={values}>{values}</p>)}
    </div>
  );
};

export default List;

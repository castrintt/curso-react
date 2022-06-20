// useMemo

// o useMemo pode ser utilizado para garantir a referencia de um objeto

// fazendo com que algo possa ser atrelado a uma referencia e não a um valor

// com isso conseguimos condicionar o useEffect a uma variavel de maneira mais inteligente

// guarda uma referencia de uma variavel, objeto, array oq for e sempre que ocorrer uma renderização ele não usa o valor dela, e sim uma referencia, pense agora se dentro das dependencias de um useEffect voce tem uma constante que sempre esta sendo alterada a cada renderização e essa constante é um array com 2 milhoes de  items, quer dizer que sempre que ocorrer uma renderização aquele array de 2 milhoes de items sera renderizado novamente
//o useMemo resolve esse problema, ou seja, ele cria uma referencia daquele valor dentro da "memoria" e entao em vez do useEffect acessar aquele valor e que esta sendo alterado a cada renderização ele acessa esse dado "previo" guardado na memoria

import { useState, useEffect, useMemo } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState(0);

  const premiumNumbers = useMemo(() => {
    //essa referencia vai ficar salva pra sempre, ou seja, ela nao vai ser renderizada toda vez que acontecer um refresh no componente por exemplo
    //assim impedindo a chamada do useEffect a cada renderização
    ["0", "100", "200"];
  }, []);

  useEffect(() => {
    console.log("FORAM ALTERADOS");
  }, [premiumNumbers]);
  return (
    <div>
      <h1>useMemo</h1>
      <input type="text" onChange={(e) => setNumber(e.target.value)} />
      {premiumNumbers.includes(number) && <p>Acertou o numero</p>}
    </div>
  );
};

export default UseMemo;

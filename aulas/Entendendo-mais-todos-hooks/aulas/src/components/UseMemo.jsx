import { useState, useEffect, useMemo } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState(0);

  const premiumNumbers = useMemo(() => {
    ["0", "100", "200"];
  }, []);

  useEffect(() => {
    console.log("FORAM ALTERADOS");
  }, [premiumNumbers]);
  return (
    <div>
      <h1>useMemo</h1>
      <input type="text" onChange={(e) => setNumber(e.target.value)} />
      {/* {premiumNumbers.includes(number) ? <p>Acertou o numero</p> : ''} */}
    </div>
  );
};

export default UseMemo;

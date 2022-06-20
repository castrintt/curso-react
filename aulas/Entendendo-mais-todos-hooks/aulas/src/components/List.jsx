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

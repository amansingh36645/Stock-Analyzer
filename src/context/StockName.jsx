import React, { useState, createContext } from "react";

export const StockDataName = createContext();
const StockName = (props) => {
  const [stockName, setStockName] = useState("IBM");

  return (
    <div>
      <StockDataName.Provider value={[stockName, setStockName]}>
        {props.children}
      </StockDataName.Provider>
    </div>
  );
};

export default StockName;

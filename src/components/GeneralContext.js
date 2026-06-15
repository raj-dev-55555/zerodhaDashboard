import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid) => {},
  closeSellWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);

  const [selectedStockUID, setSelectedStockUID] = useState("");

  const openBuyWindow = (uid) => {
    setSelectedStockUID(uid);
    setIsBuyWindowOpen(true);
  };

  const closeBuyWindow = () => {
    setIsBuyWindowOpen(false);
  };

  const openSellWindow = (uid) => {
    setSelectedStockUID(uid);
    setIsSellWindowOpen(true);
  };

  const closeSellWindow = () => {
    setIsSellWindowOpen(false);
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow,
        closeBuyWindow,
        openSellWindow,
        closeSellWindow,
      }}
    >
      {props.children}

      {isBuyWindowOpen && (
        <BuyActionWindow uid={selectedStockUID} />
      )}

      {isSellWindowOpen && (
        <SellActionWindow uid={selectedStockUID} />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
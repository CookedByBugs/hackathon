import React, { createContext, useContext, useState } from "react";

const TabContext = createContext();

const TabProvider = ({ children }) => {
  const [siderOpen, setSiderOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState("");
  const changeTab = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <TabContext.Provider
      value={{ siderOpen, setSiderOpen, currentTab, changeTab }}
    >
      {children}
    </TabContext.Provider>
  );
};

export const useTabContext = () => useContext(TabContext);

export default TabProvider;

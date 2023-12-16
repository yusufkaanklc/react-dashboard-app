import { createContext, useState } from "react";

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
    const [navClick, setNavClick] = useState(false);
    const [isFormOpened ,setIsFormOpened] = useState(false);

  return (
    <DashboardContext.Provider value={{ navClick, setNavClick, isFormOpened, setIsFormOpened }}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardContext;

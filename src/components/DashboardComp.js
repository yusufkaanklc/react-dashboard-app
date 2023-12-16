import { useContext, useState } from "react";
import DashCSS from "./DashboardComp.module.css";
import DashboardHeader from "./DashboardHeader";
import DashboardContent from "./DashboardContent";
import DashboardContext from "./DashboardContext";

function DashboardComp() {
  const {navClick,isFormOpened} = useContext(DashboardContext);

  return (
    <>
    <div className={DashCSS["dashboard-box"]} style={{width: navClick ? "100%" : "85%", transform: isFormOpened  ? "translateX(50%)" : "unset"}}>
    <DashboardHeader/>
    <DashboardContent/>
    </div>
    </>
  );
}

export default DashboardComp;

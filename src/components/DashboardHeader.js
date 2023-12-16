import React,{useContext}  from "react"
import DashHeaderCSS from "./DashboardHeader.module.css";
import DashboardContext from "./DashboardContext";
function DashboardHeader() {
  const {isFormOpened, setNavClick} = useContext(DashboardContext);

  const handleClick = () => {
    if(!isFormOpened){
      setNavClick((prev) => !prev);
    }
    else{
      
    }
  }
  return (
    <>
    <div className={DashHeaderCSS["dashboard-header-box"]}>
        <div className={DashHeaderCSS["navbar-button"]} onClick={() => handleClick()}>
        <i className="fi fi-br-bars-sort"></i>
        </div>
        <div className={DashHeaderCSS["header-content"]}>
            <h3 className={DashHeaderCSS["header-text"]}>Hi, Kağan</h3>
            <div className={DashHeaderCSS["user-box"]}>
            <i className="fi fi-rr-circle-user"></i>
            <p className={DashHeaderCSS["user-name"]}>Yusuf Kağan Kılıç</p>
            </div>
        </div>
    </div>
    </>
  );
}

export default DashboardHeader;

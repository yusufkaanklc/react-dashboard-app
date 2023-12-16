import DashContentCSS from "./DashboardContent.module.css";
import DashContentLeft from "./DashContentLeft";
import DashContentRight from "./DashContentRight";
function DashboardContent() {
  return (
    <>
    <div className={DashContentCSS["dashboard-content"]}>
        <DashContentLeft/>
        <DashContentRight/>
    </div>
    </>
  );
}

export default DashboardContent;

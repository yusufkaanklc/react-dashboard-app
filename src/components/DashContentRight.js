import DashContentRightCSS from "./DashContentRight.module.css";
import DashboardGraph from "./DashboardGraph";
import LeadersTable from "./LeadersTable";
function DashContentRight() {
  return (
    <>
      <div className={DashContentRightCSS["dashboard-content-right"]}>
        <DashboardGraph />
        <LeadersTable />
      </div>
    </>
  );
}

export default DashContentRight;

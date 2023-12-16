import React from "react";
import LeadersTableCSS from "./LeaderTable.module.css";
import Button from "react-bootstrap/Button";

function LeadersTable() {
  return (
    <div>
      <div className={LeadersTableCSS["leaders-table"]}>
        <div className={LeadersTableCSS["header"]}>Weekly Leaders</div>
        <ul className={LeadersTableCSS["list"]}>
          <li className={LeadersTableCSS["list-item"]}>
            <div className={LeadersTableCSS["leader-info"]}>
              <i className="fi fi-rr-circle-user"></i>
              <div className={LeadersTableCSS["leader-name"]}>
                Yusuf Kağan Kılıç
              </div>
            </div>
            <div className={LeadersTableCSS["point"]}>54564 points</div>
          </li>
          <li className={LeadersTableCSS["list-item"]}>
            <div className={LeadersTableCSS["leader-info"]}>
              <i className="fi fi-rr-circle-user"></i>
              <div className={LeadersTableCSS["leader-name"]}>Thomas Musk</div>
            </div>
            <div className={LeadersTableCSS["point"]}>54433 points</div>
          </li>
          <li className={LeadersTableCSS["list-item"]}>
            <div className={LeadersTableCSS["leader-info"]}>
              <i className="fi fi-rr-circle-user"></i>
              <div className={LeadersTableCSS["leader-name"]}>
                Enes Furkan Babur
              </div>
            </div>
            <div className={LeadersTableCSS["point"]}>45456 points</div>
          </li>
        </ul>
        <Button variant="light" size="lg">
          View all
        </Button>
      </div>
    </div>
  );
}

export default LeadersTable;

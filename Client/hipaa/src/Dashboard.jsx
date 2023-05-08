import React from "react";
function Dashboard() {
  return (
    <div className="main">
      <div className="body">
        <h2 style={{ padding: "0 80px" }}>Dashboard</h2>
        <div className="services">
          <div className="service1" id="margins">
            <p id="center">Add record</p>
          </div>
          <div className="service2" id="margins">
            <p id="center">All Records</p>
          </div>
          <div className="service3" id="margins">
            <p id="center">Delete Records</p>
          </div>
          <div className="service4" id="margins">
            <p id="center">Update Records</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;

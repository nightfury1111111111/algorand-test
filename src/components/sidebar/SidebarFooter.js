import React from "react";

const SidebarFooter = () => {
  return (
    <div className="sidebar-cta">
      <div className="sidebar-cta-content">
        <strong className="d-inline-block mb-2">Monthly Sales Report</strong>
        <div className="mb-3 text-sm">
          Your monthly sales report is ready for download!
        </div>

        <div className="d-grid">
          <a
            href="https://themes.getbootstrap.com/product/appstack-react-admin-dashboard-template/"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default SidebarFooter;

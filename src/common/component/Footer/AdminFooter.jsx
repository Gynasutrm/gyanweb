import React, { useEffect } from "react";
import "./AdminFooter.scss";

const AdminFooter = () => {
  useEffect(() => {}, []);
  return (
    <footer className="admin-footer">
      <div className="clearfix">
        <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">
          Copyright © Gyansutrm 2021
        </span>
      </div>
    </footer>
  );
};

export default AdminFooter;

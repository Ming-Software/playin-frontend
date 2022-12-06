import React, { lazy, Suspense, useState } from "react";
import Topbar from "../../Components/Topbar-Component";
import { Routes, Route, Outlet, Link } from "react-router-dom";
//ROUTES
export const PortalPage = () => {
  return (
    <div>
      <Topbar />
      <Outlet />
    </div>
  );
};

export default PortalPage;

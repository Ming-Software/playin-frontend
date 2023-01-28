import Topbar from "../../Components/Topbar-Component";
import { Outlet } from "react-router-dom";

export const PortalPage = () => {
  return (
    <div>
      <Topbar />
      <Outlet />
    </div>
  );
};

export default PortalPage;

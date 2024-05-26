import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';

const DashboardLayout = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="">
        <Sidebar></Sidebar>
      </div>

      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;

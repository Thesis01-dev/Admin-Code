import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import {
  DashboardOutlined, AccountCircleOutlined, PeopleAltOutlined,
  DirectionsCarOutlined, DescriptionOutlined, SettingsOutlined, PowerSettingsNewOutlined,
  MenuOutlined
} from "@mui/icons-material";

const AdminSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <div className="h-screen flex flex-col bg-whi text-white">
      <Sidebar collapsed={isCollapsed} className="h-screen w-[250px] bg-gray-900">
        <Menu className="flex flex-col h-full bg-gray-900 w-full">

          {/* LOGO & TOGGLE BUTTON */}
          {!isCollapsed ? (
            <div className="flex items-center justify-between p-4 bg-gray-900">
              <div className="flex items-center">
                <img src="/logo.png" alt="Logo" className="w-14 h-14 rounded-full border-2 border-white mr-3" />
                <span className="text-lg font-semibold">Car Rental System</span>
              </div>
              <button onClick={() => setIsCollapsed(!isCollapsed)} className="focus:outline-none">
                <MenuOutlined className="text-white" />
              </button>
            </div>
          ) : (
            <MenuItem
              icon={<MenuOutlined className="text-white" />}
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="bg-gray-700 focus:outline-none"
            />
          )}

          {/* MENU ITEMS */}
          <div className="flex-grow bg-gray-900">
            <MenuItem
              icon={<DashboardOutlined className="text-white" />}
              component={<Link to="/" />}
              active={selected === "Dashboard"}
              onClick={() => setSelected("Dashboard")}
            >
              Dashboard
            </MenuItem>

            <MenuItem
              icon={<AccountCircleOutlined className="text-white" />}
              component={<Link to="/profile" />}
              active={selected === "Profile"}
              onClick={() => setSelected("Profile")}
            >
              Profile
            </MenuItem>

            <MenuItem
              icon={<PeopleAltOutlined className="text-white" />}
              component={<Link to="/owners" />}
              active={selected === "Owners"}
              onClick={() => setSelected("Owners")}
            >
              Owners
            </MenuItem>




            <MenuItem
              icon={<DirectionsCarOutlined className="text-white" />}
              component={<Link to="/carlist" />}
              active={selected === "Car List"}
              onClick={() => setSelected("CarList")}
            >
              CarList
            </MenuItem>

            <MenuItem
              icon={<DirectionsCarOutlined className="text-white" />}
              component={<Link to="/rentalreports" />}
              active={selected === "Rental Reports"}
              onClick={() => setSelected("RentalReports")}
            >
            
              Rental Reports
           
            </MenuItem>
          </div>

          <hr className="border-gray-900" />

          {/* SETTINGS & LOGOUT */}
          <MenuItem
            icon={<SettingsOutlined className="text-white" />}
            component={<Link to="/settings" />}
            active={selected === "Settings"}
            onClick={() => setSelected("Settings")}
          >
            Settings 
          </MenuItem>

          <MenuItem
            icon={<PowerSettingsNewOutlined className="text-white" />}
            component={<Link to="/logout" />}
            active={selected === "Logout"}
            onClick={() => setSelected("Logout")}
            className="p-3 flex items-center bg-gray-700"
          >
            Logout
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default AdminSidebar;

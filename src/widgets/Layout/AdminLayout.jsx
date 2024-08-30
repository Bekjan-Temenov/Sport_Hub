import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../AdminNavbar/Navbar";
import Sidebar from "../AdminSidebar/Sidebar";
import AdminContainer from "../../shared/helpers/AdminContainer";

function AdminLayout() {
  return (
    <AdminContainer>
      <div className="flex text-white gap-[49px]">
          <Sidebar />
        <div className="flex flex-col gap-[38px]">
        <Navbar />
          <Outlet />
        </div>
      </div>
    </AdminContainer>
  );
}

export default AdminLayout;

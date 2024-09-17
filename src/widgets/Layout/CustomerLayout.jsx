import React from "react";
import AdminContainer from "../../shared/helpers/AdminContainer";
import { Outlet } from "react-router-dom";
import CustomNavbar from "../CustomNavbar/CustomNavbar";
import CustomSidebar from "../CustomSidebar/CustomSidebar";

function CustomerLayout() {
  return (
    <AdminContainer>
      <div className="flex text-white gap-[49px]">
        <CustomSidebar />
        <div className="flex  flex-col gap-[38px]">
          <CustomNavbar />
          <Outlet />
        </div>
      </div>
    </AdminContainer>
  );
}
export default CustomerLayout;
import Usersidebar from "@/components/user/dashboard/Usersidebar";
import React, { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
        <div className="py-10 lg:py-12 flex flex-col lg:flex-row w-full">
          <div className="flex-shrink-0 w-full lg:w-80 mr-7 lg:mr-10 xl:mr-10">
            <Usersidebar />
          </div>
          <div className="w-full bg-white mt-4 lg:mt-0 p-4 sm:p-5 lg:p-8 rounded-md overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

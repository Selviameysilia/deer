import React from 'react';
import Sidebar from "../../components/ui/sidebar";
import FormHomeAdmin from "../../components/fragments/form/FormHomeAdmin";
import NavAdmin from "../../components/ui/navadmin";

const HomeAdminPage = () => {
  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      <NavAdmin />
      <div className="flex flex-grow">
        <Sidebar />
        <main className="flex-grow p-6">
          <FormHomeAdmin />
        </main>
      </div>
    </div>
  );
};

export default HomeAdminPage;

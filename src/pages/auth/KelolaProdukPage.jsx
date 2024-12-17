import React from "react";
import Sidebar from "../../components/ui/sidebar";
import NavAdmin from "../../components/ui/navadmin";
import FormKelolaProduk from "../../components/fragments/form/FormKelolaProduk";

const KelolaProdukPage = () => {
  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      <NavAdmin />
      <div className="flex flex-grow">
        <Sidebar />
        <main className="flex-grow p-6">
          <FormKelolaProduk />
        </main>
      </div>
    </div>
  );
};

export default KelolaProdukPage;

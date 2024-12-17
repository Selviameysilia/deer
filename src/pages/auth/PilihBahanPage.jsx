import React from "react";
import Navbar from "../../components/ui/navbar"; 
import Footer from "../../components/ui/footer";
import FormPilihBahan from "../../components/fragments/form/FormPilihBahan"; 

const PilihBahanPage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Form Pilih Bahan */}
      <FormPilihBahan />

      {/* Footer */}
      <footer className="bg-black text-white py-12 -mt-9">
        <Footer />
      </footer>
    </div>
  );
};

export default PilihBahanPage;
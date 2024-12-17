import React from "react";
import Navbar from "../../components/ui/navbar"; 
import Footer from "../../components/ui/footer";
import FormAksesoris from "../../components/fragments/form/FormAksesoris"; 

const AksesorisPage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Form Paduan Warna */}
      <FormAksesoris />

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <Footer />
      </footer>
    </div>
  );
};

export default AksesorisPage;

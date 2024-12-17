import { useState } from "react";
import FormProfil from "../../components/fragments/form/FormProfil";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/ui/footer";

export default function ProfilPage() {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(null);

  const handleLogout = () => {

    navigate("/login");
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white">
        <span className="font-bold pl-24 text-lg">Profil</span>
        <button
          className="text-black pr-24 font-bold text-lg"
          onClick={handleLogout} 
        >
          Logout
        </button>
      </nav>

      {/* Konten utama */}
      <div className="flex flex-grow justify-center items-center p-4">
        <div className="w-full max-w-7xl p-11 border border-gray-300 rounded-lg shadow-md flex flex-col md:flex-row items-center">
          {/* Bagian gambar profil */}
          <div className="flex flex-col items-center md:items-start w-full md:w-1/3 mb-8 md:mb-0 space-y-4">
            <img
              src={imagePreview || "/assets/profill.jpg"}
              alt="Profil"
              className="w-40 h-40 drop-shadow-2xl rounded-lg mb-4 ml-12"
            />
          </div>

          {/* Form untuk pengeditan profil */}
          <div className="w-full md:w-2/3">
            <FormProfil />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black text-white py-12">
        <Footer />
      </div>
    </section>
  );
}

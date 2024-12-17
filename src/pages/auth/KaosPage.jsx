import Navbar from "../../components/ui/navbar";
import Footer from "../../components/ui/footer";
import FormKaos from "../../components/fragments/form/FormKaos";

export default function KaosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <FormKaos />
      </main>
      <footer className="bg-black text-white py-12">
        <Footer />
      </footer>
    </div>
  );
}

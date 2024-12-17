import Navbar from "../../components/ui/navbar";
import Footer from "../../components/ui/footer";
import FormBatalPesanan from "../../components/fragments/form/FormBatalPesanan";

export default function BatalPesananPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <FormBatalPesanan />
      </main>
      <footer className="bg-black text-white py-12">
        <Footer />
      </footer>
    </div>
  );
}

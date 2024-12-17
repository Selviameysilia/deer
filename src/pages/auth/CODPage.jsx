import Navbar from "../../components/ui/navbar";
import Footer from "../../components/ui/footer";
import FormCOD from "../../components/fragments/form/FormCOD";

export default function CODPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <FormCOD />
      </main>
      <footer className="bg-black text-white py-12">
        <Footer />
      </footer>
    </div>
  );
}

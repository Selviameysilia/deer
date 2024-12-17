import Navbar from "../../components/ui/navbar";
import Footer from "../../components/ui/footer";
import FormBCA from "../../components/fragments/form/FormBCA";

export default function BCAPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <FormBCA />
      </main>
      <footer className="bg-black text-white py-12">
        <Footer />
      </footer>
    </div>
  );
}

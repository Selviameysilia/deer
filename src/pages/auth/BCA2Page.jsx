import Navbar from "../../components/ui/navbar";
import Footer from "../../components/ui/footer";
import FormBCA2 from "../../components/fragments/form/FormBCA2";

export default function BCA2Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <FormBCA2 />
      </main>
      <footer className="bg-black text-white py-12">
        <Footer />
      </footer>
    </div>
  );
}

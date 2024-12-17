import Navbar from "../../components/ui/navbar";
import Footer from "../../components/ui/footer";
import FormTips from "../../components/fragments/form/FormTips"; 

export default function TipsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <FormTips />
      </main>
      <footer className="bg-black text-white py-12">
        <Footer />
      </footer>
    </div>
  );
}

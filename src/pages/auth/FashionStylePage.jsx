import Navbar from "../../components/ui/navbar";
import Footer from "../../components/ui/footer";
import FormFashionStyle from "../../components/fragments/form/FormFashionStyle";

export default function FashionStylePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <FormFashionStyle />
      </main>
      <footer className="bg-black text-white py-12">
        <Footer />
      </footer>
    </div>
  );
}

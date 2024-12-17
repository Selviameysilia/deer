import Navbar from "../../components/ui/navbar";
import Footer from "../../components/ui/footer";
import FormFavorit from "../../components/fragments/form/FormFavorit";

export default function FavoritPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <FormFavorit />
      </main>
      <footer className="bg-black text-white py-12">
        <Footer />
      </footer>
    </div>
  );
}

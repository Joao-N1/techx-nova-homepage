import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import HeroBanner from "../components/HeroBanner";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SearchBar />
      <HeroBanner />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default Index;

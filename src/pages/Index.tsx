import { useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import HeroBanner from "../components/HeroBanner";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";
import FAQ from "../components/FAQ";

const Index = () => {
  const [isFAQOpen, setIsFAQOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SearchBar />
      <HeroBanner />
      <ProductGrid />
      <Footer onFAQClick={() => setIsFAQOpen(true)} />
      <Chatbot />
      <FAQ isOpen={isFAQOpen} onClose={() => setIsFAQOpen(false)} />
    </div>
  );
};

export default Index;

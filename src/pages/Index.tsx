import { useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import HeroBanner from "../components/HeroBanner";
import ProductGrid from "../components/ProductGrid";
import SchedulingSection from "../components/SchedulingSection";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";

const Index = () => {
  const [isFAQOpen, setIsFAQOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SearchBar />
      <HeroBanner />
      <ProductGrid />
      <SchedulingSection />
      <Footer onFAQClick={() => setIsFAQOpen(true)} />
      
      <FAQ isOpen={isFAQOpen} onClose={() => setIsFAQOpen(false)} />
    </div>
  );
};

export default Index;

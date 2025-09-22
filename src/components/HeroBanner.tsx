import { Button } from "@/components/ui/button";
import heroBannerImage from "@/assets/hero-banner.jpg";

const HeroBanner = () => {
  return (
    <section 
      className="relative h-80 md:h-96 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${heroBannerImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Special Promotion
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-6">
            Up to 50% Off Gaming & Technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:bg-primary-hover text-white font-semibold px-8 py-3 shadow-lg-custom"
            >
              View Offers
            </Button>
            <Button 
              variant="hero"
              size="lg" 
              className="px-8 py-3 shadow-lg-custom"
            >
              Explore All
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
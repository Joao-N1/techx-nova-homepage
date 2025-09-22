import ProductCard from "./ProductCard";
import consoleImage from "@/assets/console-gaming.jpg";
import smartphoneImage from "@/assets/smartphone.jpg";
import laptopImage from "@/assets/laptop.jpg";
import accessoriesImage from "@/assets/gaming-accessories.jpg";
import graphicsCardImage from "@/assets/graphics-card.jpg";

const ProductGrid = () => {
  const products = [
    {
      image: consoleImage,
      title: "Gaming Console Pro",
      description: "The latest gaming console with cutting-edge technology and ultra HD 4K graphics.",
      price: "£399.99",
      originalPrice: "£499.99",
      isOnSale: true,
    },
    {
      image: smartphoneImage,
      title: "Premium Smartphone",
      description: "Latest generation smartphone with professional camera and exceptional performance.",
      price: "£699.99",
      originalPrice: "£799.99",
      isOnSale: true,
    },
    {
      image: laptopImage,
      title: "Elite Gaming Laptop",
      description: "Powerful laptop for gaming and professional work with dedicated graphics card.",
      price: "£1,299.99",
    },
    {
      image: accessoriesImage,
      title: "Complete Gaming Kit",
      description: "Premium headset and professional controller for the ultimate gaming experience.",
      price: "£149.99",
      originalPrice: "£199.99",
      isOnSale: true,
    },
    {
      image: graphicsCardImage,
      title: "RTX Graphics Card",
      description: "High-performance graphics card for 4K gaming and creative work.",
      price: "£899.99",
    },
    {
      image: consoleImage,
      title: "Portable Console",
      description: "Portable gaming with integrated game library and high-quality HD screen.",
      price: "£279.99",
      originalPrice: "£329.99",
      isOnSale: true,
    },
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our premium selection of technology and gaming products with the best market prices
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
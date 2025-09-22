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
      title: "Consola Gaming Pro",
      description: "A mais recente consola de gaming com tecnologia de ponta e gráficos 4K ultra HD.",
      price: "€399,99",
      originalPrice: "€499,99",
      isOnSale: true,
    },
    {
      image: smartphoneImage,
      title: "Smartphone Premium",
      description: "Smartphone de última geração com câmara profissional e desempenho excecional.",
      price: "€699,99",
      originalPrice: "€799,99",
      isOnSale: true,
    },
    {
      image: laptopImage,
      title: "Laptop Gaming Elite",
      description: "Laptop poderoso para gaming e trabalho profissional com placa gráfica dedicada.",
      price: "€1.299,99",
    },
    {
      image: accessoriesImage,
      title: "Kit Gaming Completo",
      description: "Headset premium e controller profissional para a melhor experiência de gaming.",
      price: "€149,99",
      originalPrice: "€199,99",
      isOnSale: true,
    },
    {
      image: graphicsCardImage,
      title: "Placa Gráfica RTX",
      description: "Placa gráfica de alta performance para gaming 4K e trabalhos de criação.",
      price: "€899,99",
    },
    {
      image: consoleImage,
      title: "Consola Portátil",
      description: "Gaming portátil com biblioteca de jogos integrada e ecrã HD de alta qualidade.",
      price: "€279,99",
      originalPrice: "€329,99",
      isOnSale: true,
    },
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Produtos em Destaque
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Descubra a nossa seleção premium de tecnologia e gaming com os melhores preços do mercado
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
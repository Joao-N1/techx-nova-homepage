import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  isOnSale?: boolean;
}

const ProductCard = ({ 
  image, 
  title, 
  description, 
  price, 
  originalPrice, 
  isOnSale = false 
}: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-0 shadow-card hover:shadow-lg-custom transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {isOnSale && originalPrice && (
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
            -{Math.round(((parseFloat(originalPrice.replace('£', '')) - parseFloat(price.replace('£', ''))) / parseFloat(originalPrice.replace('£', ''))) * 100)}%
          </Badge>
        )}
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">{price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {originalPrice}
            </span>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full bg-gradient-primary hover:bg-primary-hover"
          size="sm"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
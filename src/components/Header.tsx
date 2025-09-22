import { Search, Menu, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-gradient-primary text-primary-foreground shadow-lg-custom">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="md:hidden text-primary-foreground hover:bg-white/20">
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-2xl font-bold tracking-tight">CEX</h1>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-primary-foreground hover:text-white/80 font-medium transition-smooth">
              Home
            </a>
            <a href="#" className="text-primary-foreground hover:text-white/80 font-medium transition-smooth">
              Buy
            </a>
            <a href="#" className="text-primary-foreground hover:text-white/80 font-medium transition-smooth">
              Sell
            </a>
            <a href="#" className="text-primary-foreground hover:text-white/80 font-medium transition-smooth">
              Gaming
            </a>
            <a href="#" className="text-primary-foreground hover:text-white/80 font-medium transition-smooth">
              Contact
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-white/20">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-white/20">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
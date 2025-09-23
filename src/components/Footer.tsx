import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">CEX</h3>
            <p className="text-muted-foreground mb-4">
              Your reference store for technology and gaming. Guaranteed quality and the best prices.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Gaming</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Smartphones</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Laptops</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Accessories</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Warranties</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Returns</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Delivery</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Repairs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground">
                <Phone className="h-4 w-4 mr-2" />
                <span>+44 20 7123 4567</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@cex.co.uk</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                <span>London, United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="my-8 border-border" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2025 CEX. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
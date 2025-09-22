import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">TechX</h3>
            <p className="text-muted-foreground mb-4">
              A sua loja de referência para tecnologia e gaming. Qualidade garantida e os melhores preços.
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
            <h4 className="font-semibold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Gaming</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Smartphones</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Laptops</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Acessórios</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Suporte</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Centro de Ajuda</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Garantias</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Devoluções</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Entrega</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Reparações</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contactos</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground">
                <Phone className="h-4 w-4 mr-2" />
                <span>+351 210 123 456</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@techx.pt</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Lisboa, Portugal</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="my-8 border-border" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2025 TechX. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
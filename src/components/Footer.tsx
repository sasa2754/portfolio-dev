
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code className="h-5 w-5 text-purple-500" />
            <span className="font-semibold gradient-text">DevPortfolio</span>
          </div>
          
          <div className="flex items-center space-x-1 text-muted-foreground">
            <span>Feito com</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>e muito</span>
            <Code className="h-4 w-4 text-purple-500" />
            <span>por uma desenvolvedora apaixonada</span>
          </div>
          
          <div className="text-sm text-muted-foreground mt-4 md:mt-0">
            © 2024 - Todos os direitos reservados
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

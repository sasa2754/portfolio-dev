
import { useState, useEffect } from 'react';
import { ArrowDown, Download, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const texts = ['Fullstack Developer', 'IoT Enthusiast', 'Problem Solver', 'Tech Creator'];
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[textIndex];
      
      if (!isDeleting && charIndex < current.length) {
        setCurrentText(current.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentText(current.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else if (!isDeleting && charIndex === current.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadcv = () => {
    const link = document.createElement("a");
    link.href = "/curriculo.pdf";
    link.download = "Currículo - Sabrina_Mortean.pdf"; // nome bonitinho do arquivo
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl floating" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Olá, eu sou
            <span className="gradient-text block mt-2">Sabrina Mortean</span>
          </h1>
          
          <div className="text-2xl md:text-3xl mb-8 h-12 flex items-center justify-center">
            <span className="text-muted-foreground">Eu sou </span>
            <span className="gradient-text ml-2 font-semibold">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Apaixonada por criar experiências digitais incríveis, desde interfaces elegantes até soluções IoT inovadoras. 
            Transformo ideias em código com criatividade e precisão técnica.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-200">
            <Button size="lg" className="glow hover:scale-105 transition-transform" onClick={downloadcv}>
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
            <Button variant="outline" size="lg" className="hover:scale-105 transition-transform" asChild>
              <a href="https://github.com/sasa2754?tab=repositories" target="_blank">
                <Github className="h-5 w-5" />
                Ver Projetos
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="left-1/2 mt-6 translate translate-x-1/2 animate-bounce">
          <button onClick={scrollToAbout} className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowDown className="h-6 w-6 " />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

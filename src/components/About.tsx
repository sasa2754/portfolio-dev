
import { Code, Lightbulb, Zap, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import foto from "@/assets/foto.jpg"

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Fullstack Expert',
      description: 'Especializada em React, TypeScript e criação de interfaces modernas'
    },
    {
      icon: Zap,
      title: 'IoT Innovation',
      description: 'Experiência em projetos IoT conectando hardware e software'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'Amo transformar desafios complexos em soluções elegantes'
    },
    {
      icon: Heart,
      title: 'Passionate Creator',
      description: 'Cada projeto é uma oportunidade de criar algo extraordinário'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre <span className="gradient-text">Mim</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma desenvolvedora apaixonada por tecnologia, sempre em busca de inovação e excelência
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="gradient-border">
              <div className="gradient-border-content">
                <img
                  src={foto}
                  alt="Profile"
                  className="w-full h-80 object-cover object-[center_65%] rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-slide-in-right">
            <div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">Minha Jornada</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sou uma desenvolvedora fullstack apaixonada por criar experiências digitais que fazem a diferença. 
                Minha jornada começou com curiosidade sobre como as coisas funcionam, e evoluiu para uma paixão 
                por transformar ideias em realidade através do código.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Trabalhei em projetos diversos, desde jogos interativos como um jogo do Pokémon, até soluções 
                educacionais como a plataforma Iduca, e projetos IoT que conectam o mundo físico ao digital. 
                Cada projeto é uma nova aventura!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <Card key={index} className="bg-card/50 border-border/50 hover:bg-card/80 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-4 text-center">
                    <item.icon className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

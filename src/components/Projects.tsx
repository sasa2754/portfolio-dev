
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Gamepad2, GraduationCap, Cpu } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Jogo Pokémon',
      description: 'Um jogo interativo do Pokémon desenvolvido com JavaScript vanilla, apresentando batalhas, captura de pokémons e interface nostálgica dos jogos clássicos.',
      image: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=600&h=400&fit=crop',
      tags: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'Game Development'],
      icon: Gamepad2,
      color: 'from-red-500 to-yellow-500',
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'Plataforma Iduca',
      description: 'Uma plataforma completa de cursos online com sistema de autenticação, progresso do aluno, vídeo aulas e certificados digitais.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      icon: GraduationCap,
      color: 'from-blue-500 to-purple-500',
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Projeto IoT Smart Home',
      description: 'Sistema inteligente para automação residencial usando sensores, Arduino e interface web para controle remoto de dispositivos domésticos.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      tags: ['Arduino', 'React', 'Firebase', 'IoT'],
      icon: Cpu,
      color: 'from-green-500 to-teal-500',
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meus <span className="gradient-text">Projetos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma seleção dos projetos que desenvolvi, mostrando criatividade e habilidades técnicas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="group bg-card/30 border-border/50 hover:bg-card/50 transition-all duration-500 hover:scale-105 animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <div className={`p-2 rounded-full bg-gradient-to-r ${project.color} text-white`}>
                    <project.icon className="h-5 w-5" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 gradient-text">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-muted/50 text-xs rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className={`flex gap-2 transition-all duration-300 ${
                  hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

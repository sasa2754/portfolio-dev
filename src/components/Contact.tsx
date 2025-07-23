
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simula envio do formulário
    toast({
      title: "Mensagem enviada!",
      description: "Obrigada pelo contato. Retornarei em breve!",
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'sasamor5@gmail.com', href: 'mailto:sasamor5@gmail.com' },
    { icon: Phone, label: 'Telefone', value: '+55 (41) 99521-3923', href: 'tel:+5541995213923' },
    { icon: MapPin, label: 'Localização', value: 'Paraná, Brasil', href: 'https://maps.app.goo.gl/U8GMd6kJHRt29dir5' }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/sasa2754', color: 'hover:text-gray-400' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/sabrina-mortean-70a52b230/', color: 'hover:text-blue-400' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/sabrina.2754/', color: 'hover:text-sky-400' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Vamos <span className="gradient-text">Conversar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tem um projeto em mente? Quer colaborar? Estou sempre aberta para novas oportunidades!
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {/* Contact Info */}
          <div className="animate-slide-in-left flex flex-col">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Entre em Contato</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Estou sempre interessada em ouvir sobre novos projetos e oportunidades. 
                Se você tem uma ideia que gostaria de transformar em realidade, vamos conversar!
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-card/30 hover:bg-card/50 transition-all duration-300 group"
                  target="_blank"
                >
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white group-hover:scale-110 transition-transform">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">{item.label}</p>
                    <p className="text-muted-foreground">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex space-x-4 self-center lg:self-end">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`p-3 bg-card/30 hover:bg-card/50 rounded-full transition-all duration-300 ${link.color} hover:scale-110`}
                  aria-label={link.label}
                  target="_blank"
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          {/* <div className="animate-slide-in-right">
            <Card className="bg-card/30 border-border/50">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nome
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      required
                      className="bg-background/50 border-border/50 focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      required
                      className="bg-background/50 border-border/50 focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Conte-me sobre seu projeto..."
                      rows={5}
                      required
                      className="bg-background/50 border-border/50 focus:border-purple-500 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full glow hover:scale-105 transition-transform"
                    size="lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;

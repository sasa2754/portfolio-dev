
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95, color: 'from-blue-500 to-cyan-500' },
        { name: 'TypeScript', level: 90, color: 'from-blue-600 to-indigo-600' },
        { name: 'Next.js', level: 85, color: 'from-gray-700 to-gray-900' },
        { name: 'Tailwind CSS', level: 92, color: 'from-teal-500 to-green-500' },
        { name: 'JavaScript', level: 88, color: 'from-yellow-500 to-orange-500' }
      ]
    },
    {
      title: 'Backend & IoT',
      skills: [
        { name: 'Node.js', level: 80, color: 'from-green-600 to-green-800' },
        { name: 'Arduino', level: 75, color: 'from-teal-600 to-blue-600' },
        { name: 'Raspberry Pi', level: 70, color: 'from-red-500 to-pink-500' },
        { name: 'Python', level: 78, color: 'from-blue-500 to-yellow-500' },
        { name: 'APIs REST', level: 85, color: 'from-purple-500 to-pink-500' }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90, color: 'from-orange-500 to-red-500' },
        { name: 'Figma', level: 85, color: 'from-purple-500 to-pink-500' },
        { name: 'SQL', level: 95, color: 'from-blue-500 to-blue-700' },
        { name: 'Firebase', level: 60, color: 'from-yellow-500 to-orange-600' },
        { name: 'MongoDB', level: 88, color: 'from-green-500 to-green-700' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Minhas <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções incríveis
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title} 
              className="bg-card/30 border-border/50 hover:bg-card/50 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-center gradient-text">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill.name}
                      className="group"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                          {/* {hoveredSkill === skill.name ? `${skill.level}%` : ''} */}
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out rounded-full`}
                          style={{ 
                            width: `${skill.level}%`,
                            transition: 'width 1s ease-out'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

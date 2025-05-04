
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const programmingLanguages = [
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }
  ];

  const fullStackSkills = [
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "MYSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
  ];

  const tools = [
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" }
  ];

  const SkillCard = ({ items, title }: { items: any[], title: string }) => (
    <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold mb-4 text-center">{title}</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 p-3 group-hover:bg-blue-50 transition-colors">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-sm font-medium">{item.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="skills" className="container">
      <h2 className="section-title">Technical Skills</h2>

      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-center text-gray-600">
        Strong foundation in Computer Science and a passion for web development, I specialize in building robust, user-friendly applications. I continuously explore new technologies to enhance my skillset and create innovative solutions for complex problems. Currently, I am also working on Artificial Intelligence and Machine Learning, expanding my capabilities in intelligent systems and data-driven applications.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <SkillCard items={programmingLanguages} title="Programming Languages" />
        </div>
        
        <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <SkillCard items={fullStackSkills} title="Full Stack Development" />
        </div>
        
        <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <SkillCard items={tools} title="Tools & Platforms" />
        </div>
      </div>
    </section>
  );
};

export default Skills;

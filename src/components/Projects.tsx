import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI based Online Ticketing System",
      description: "An AI based Online chatbot based Ticketing System for Museums and Tourist Places, providing users with AI Guide  and ticket booking options.",
      image: "https://raw.githubusercontent.com/nikki1405/my_portifolio-main/main/src/assets/ticket.png",
      githubLink: "https://github.com/nikki1405/Ticket_tech-main",
      liveLink: "https://github.com/nikki1405/Ticket_tech-main",
      technologies: ["HTML" ," BootstrapCSS", "Django", "MySQL"]
    },
    {
      id: 2,
      title: "VIIT GPA GENIE",
      description: "A web application that helps students calculate their CGPA priorly  based on their internal ans external marks.", 
      image: "https://raw.githubusercontent.com/nikki1405/my_portifolio-main/main/src/assets/gpa.png",
      githubLink: "https://github.com/nikki1405/VIIT_GPA_GENIE",
      liveLink: "https://viit-gpa-genie.vercel.app/",
      technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: 3,
      title: "My Portfolio",
      description: "My personal portfolio website showcasing my projects, skills, and experience.",
      image: "https://raw.githubusercontent.com/nikki1405/my_portifolio-main/main/src/assets/portifolio.png",
      githubLink: "https://github.com/nikki1405/my_portifolio",
      liveLink: "#",
      technologies: ["React", "TypeScript", "Tailwind CSS"] 
    },
    {
      id: 4,
      title: "Rental Management System",
      description: "A rent prediction ML model based web app that helps users estimate house rents based on location, size, and other features!",
      image: "https://raw.githubusercontent.com/nikki1405/my_portifolio-main/main/src/assets/rent.png",
      githubLink: "https://github.com/nikki1405/Rent_Seva",
      liveLink: "https://github.com/nikki1405/Rent_Seva",
      technologies: ["React", "Django", "Tailwind CSS","Machine Learning"]
    },
    {
      id: 5,
      title: "AAharsetu Food Bridge",
      description: "A web application that connects food donors with NGOs and individuals in need, facilitating food distribution and reducing food waste.",
      image: "https://raw.githubusercontent.com/nikki1405/my_portifolio-main/main/src/assets/ahar.png",
      githubLink: "https://github.com/nikki1405/CSP",
      liveLink: "https://ahaarsetu-food-bridge.lovable.app/",
      technologies: ["Django", "React", "Tailwind CSS", "MySQL","PayPal API"]
    },
    {
      id: 6,
      title: "StartSphere-Startup Incubator",
      description: "A web application that provides a platform for startups to connect with mentors, investors, and resources to help them grow.",
      image: "https://i.postimg.cc/s2YcvMQx/Screenshot-2025-06-30-101949.png",
      githubLink: "https://github.com/nikki1405/startsphere",
      liveLink: "v0-start-sphere.vercel.app",
      technologies: ["React","Tailwind CSS" , "Django", "Machine Learning"]
    }
  ];

  return (
    <section id="projects" className="bg-gray-50">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

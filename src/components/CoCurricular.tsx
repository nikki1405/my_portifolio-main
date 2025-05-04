import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { CodeIcon, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const CoCurricular = () => {
  const codingPlatforms = [
    { 
      name: "CodeChef", 
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/codechef.svg",
      url: "https://www.codechef.com/users/nikhilrj321"
    },
    { 
      name: "LeetCode", 
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/leetcode.svg",
      url: "https://leetcode.com/u/nikki_2006/"
    },
    { 
      name: "Codeforces", 
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/codeforces.svg",
      url: "https://codeforces.com/profile/nikhilrj321"
    }
  ];
  
  const internships = [
    {
      company: "Vaishnav Technologies",
      role: "Frontend Developer Intern",
      duration: "Sept 2023 - Nov 2023",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      logo: "data:image/jpeg;base64,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"
    },
    {
      company: "Telant Trek",
      role: "Machine Learning Intern",
      duration: "Nov 2024 - Jan 2025",
      skills: ["Python", "Machine Learning", "AI"],
      logo: "data:image/png;base64,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"
    }
  ];
  
  const certifications = [
    {
      name: "AI-Asend by Accenture",
      image: "https://media.licdn.com/dms/image/v2/D5622AQEEWneytBZE_A/feedshare-shrink_1280/B56ZZgkS7YHsAk-/0/1745376851650?e=1749081600&v=beta&t=5990XcTx7jxkmswD5Gd6NBtDj3betCUQm2eni1hQhPw"
    },
    {
      name: "Python by CiscoNetcademy",
      image: "https://media.licdn.com/dms/image/v2/D5622AQFa_zKgQg2iKw/feedshare-shrink_800/B56ZXXvWUsGoAg-/0/1743081269366?e=1749081600&v=beta&t=UkBm2y-JA4yBOpjDMroECej8KTNgHIJDZIyPSpxUKpo"
    },
    {
      name: "Machine Learning by Talent Trek",
      image: "https://media.licdn.com/dms/image/v2/D5622AQGw25Y4qbjrPg/feedshare-shrink_1280/B56ZRZZ53uH0Ao-/0/1736666756063?e=1749081600&v=beta&t=uyafDZ5cs0f2Et32fgE8J5RuFpbe7GandkzZlUzEK-k"
    },
    {
      name: "Postman API Fundamentals",
      image: "https://media.licdn.com/dms/image/v2/D5622AQGi8709s4jFnA/feedshare-shrink_1280/feedshare-shrink_1280/0/1731130760156?e=1749081600&v=beta&t=WgqtUB7xZtSrK0Asj9VBkSLMeIoMYqdu-FDcvhjmlII"
    },
    {
      name: "React JS by Simplearn",
      image: "https://certificates.simplicdn.net/share/thumb_7443576_1728540154.png"
    }
  ];

  return (
    <section id="co-curricular" className="bg-gray-50">
      <div className="container">
        <h2 className="section-title">Co-curricular & Internships</h2>
        
        <Tabs defaultValue="coding" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="coding">Coding Activities</TabsTrigger>
            <TabsTrigger value="internships">Internships</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
          </TabsList>
          
          <TabsContent value="coding" className="animate-fade-in">
            <Card>
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <Trophy className="w-5 h-5 text-primary mr-2" />
                    <h3 className="text-lg font-semibold">Hackathon Participation</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Actively participated in multiple  Tech Fests and hackathons, working in teams to solve real-world problems with innovative solutions.
                    
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center mb-4">
                    <CodeIcon className="w-5 h-5 text-primary mr-2" />
                    <h3 className="text-lg font-semibold">Coding Profiles</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Passionate about problem-solving and competitive programming. Regular participant on multiple coding platforms to enhance algorithmic thinking and coding skills.
                  </p>
                  
                  <div className="flex justify-center gap-8 mt-6">
                    {codingPlatforms.map((platform, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <Button
                          variant="ghost"
                          className="w-16 h-16 rounded-full hover:bg-primary/10 p-0 mb-3"
                          asChild
                        >
                          <a 
                            href={platform.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit my ${platform.name} profile`}
                          >
                            <div className="w-full h-full bg-white rounded-full shadow-md flex items-center justify-center p-3">
                              <img 
                                src={platform.icon} 
                                alt={platform.name} 
                                className="w-10 h-10" 
                              />
                            </div>
                          </a>
                        </Button>
                        <span className="font-medium">{platform.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="internships" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              {internships.map((internship, index) => (
                <Card key={index}>
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-1/3 h-32 md:h-auto overflow-hidden">
                        <img 
                          src={internship.logo} 
                          alt={internship.company} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold mb-1">{internship.company}</h3>
                        <p className="text-primary font-medium mb-1">{internship.role}</p>
                        <p className="text-gray-500 text-sm mb-4">{internship.duration}</p>
                        <div className="flex flex-wrap gap-2">
                          {internship.skills.map((skill, i) => (
                            <span 
                              key={i} 
                              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="certifications" className="animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-40 overflow-hidden">
                      <img 
                        src={cert.image} 
                        alt={cert.name} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                        <h3 className="text-white font-medium p-4">{cert.name}</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default CoCurricular;

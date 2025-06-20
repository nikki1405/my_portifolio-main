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
      company: "Neuxa Global Solutions",
      role: "Frontend Developer Intern",
      duration: "May 2025 - Aug 2025",
      skills: ["expo", "React","laravel"],
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

import { Briefcase, BookOpen, GraduationCap } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      level: "Undergraduate",
      institution: "Vignan's Institute of Information Technology",
      location: "Visakhapatnam, India",
      period: "2023 - 2027",
      score: "CGPA: 8.6/10",
      icon: <GraduationCap className="w-6 h-6" />,
      image: "https://images.shiksha.com/mediadata/images/1652958097php0VwYVE.jpeg"
    },
    {
      level: "Intermediate",
      institution: "Sri Viswa IIT and Medical Academy",
      location: "Visakhapatnam, India",
      period: "2021 - 2023",
      score: "Percentage: 88.3%",
      icon: <BookOpen className="w-6 h-6" />,
      image: "https://www.sriviswa.com/storage/campus/campuses_99679.jpg"
    },
    {
      level: "School",
      institution: "Sri Gouri vidya Niketan High School",
      location: "yelamachili,Vizag, India",
      period: "2020 - 2021",
      score: "Percentage: 96%",
      icon: <Briefcase className="w-6 h-6" />,
      image: "https://www.addressguru.in/images/1729193079.png"
    }
  ];

  return (
    <section id="education" className="bg-gray-50 py-20">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="mt-16 max-w-3xl mx-auto">
          {educationData.map((item, index) => (
            <div key={index} className="timeline-item group" style={{animationDelay: `${index * 0.2}s`}}>
              <span className="timeline-dot"></span>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 h-48">
                    <img 
                      src={item.image} 
                      alt={item.institution} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-3/5">
                    <div className="flex items-center mb-2 text-primary">
                      {item.icon}
                      <span className="ml-2 font-semibold">{item.level}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{item.institution}</h3>
                    <p className="text-gray-500 mb-2">{item.location}</p>
                    <div className="flex flex-wrap gap-4 mt-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {item.period}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {item.score}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

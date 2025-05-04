import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";
import { Github, Linkedin, Youtube, Instagram } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useState, FormEvent } from "react";
import heroImg from "../assets/hero.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would typically send the data to your backend
    // For now, we'll just simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: <Linkedin className="h-5 w-5" />,
      href: 'https://linkedin.com/in/rejeti-nikhil-bhuvana-sharma-72a2a32a2',
      color: 'bg-[#0077B5]'
    },
    { 
      name: 'GitHub', 
      icon: <Github className="h-5 w-5" />,
      href: 'https://github.com/nikki1405',
      color: 'bg-[#333333]'
    },
    { 
      name: 'YouTube', 
      icon: <Youtube className="h-5 w-5" />,
      href: 'https://youtube.com/@nikilsharmarejeti?si=M536PnUofAO26ZFY',
      color: 'bg-[#FF0000]'
    },
    { 
      name: 'Instagram', 
      icon: <Instagram className="h-5 w-5" />,
      href: 'https://www.instagram.com/sharma_rejeti/',
      color: 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]'
    }
  ];

  const contactInfo = [
    {
      icon: <PhoneIcon className="h-5 w-5" />,
      title: "Phone",
      value: "+91 8522978808"
    },
    {
      icon: <MailIcon className="h-5 w-5" />,
      title: "Email",
      value: "nikhilsharmarejeti321@gmail.com"
    },
    {
      icon: <MapPinIcon className="h-5 w-5" />,
      title: "Address",
      value: "Visakhapatnam, Andhra Pradesh, India"
    }
  ];

  return (
    <>
      <section id="connect" className="py-16 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Connect With Me</h2>
          
          <div className="flex justify-center gap-4 md:gap-8">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} text-white p-3 md:p-4 rounded-full transform transition-transform hover:scale-110 flex items-center justify-center`}
                aria-label={`Connect on ${social.name}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>
      
      <section id="contact" className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Let's Talk</h3>
              <p className="text-gray-600">
                Feel free to reach out if you're interested in working together or have questions about my projects and experience.
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <Card key={index}>
                  <CardContent className="flex items-center p-4">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <span className="text-primary">{contact.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-gray-500">{contact.title}</h4>
                      <p className="font-medium">{contact.value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-10 flex items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mr-4">
                <img 
                  src={heroImg}
                  alt="Rejeti Nikhil Bhuvana Sharma" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div>
                <h4 className="font-bold">Rejeti Nikhil Bhuvana Sharma</h4>
                <p className="text-gray-600">Web Developer</p>
              </div>
            </div>
          </div>
          
          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <Input 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <Input 
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <Textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your message"
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

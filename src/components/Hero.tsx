import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";
import heroImage from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-20 pb-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white z-[-1]"></div>
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <p className="text-primary font-medium text-xl mb-2">Hello 👋</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            I am <span className="text-primary">Rejeti Nikhil Bhuvana Sharma</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700">Web Developer</p>
          <p className="text-gray-600 mb-8 max-w-lg">
            Passionate Web Developer crafting beautiful,functional web experiences using cutting-edge technologies.Specializing in fullstack development with React , Django and integrating  AIML models
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg">
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-400 rounded-full blur opacity-50"></div>
            <div className="relative bg-white p-2 rounded-full">
              <img 
                src={heroImage}
                alt="Rejeti Nikhil Bhuvana Sharma" 
                className="w-60 h-60 md:w-80 md:h-80 object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
      <a 
        href="#education" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500 hover:text-primary transition-colors duration-300"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ArrowDownIcon className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;

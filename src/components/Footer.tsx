
import { ChevronUpIcon } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="container">
        <div className="flex flex-col items-center">
          <button 
            onClick={scrollToTop} 
            className="bg-primary/20 hover:bg-primary/30 p-3 rounded-full mb-4 transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronUpIcon className="h-6 w-6 text-primary" />
          </button>
          
          <h3 className="text-2xl font-bold mb-2">Rejeti Nikhil Bhuvana Sharma</h3>
          <p className="text-gray-400 mb-6">Web Developer</p>
          
          <div className="text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Rejeti Nikhil Bhuvana Sharma. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

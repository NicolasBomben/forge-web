import { useState } from "react";
import { Code, Menu, X } from "lucide-react";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary via-secondary to-accent">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <Code className="h-8 w-8" />
            <span className="text-xl font-bold">DevCo</span>
          </a>
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="hover:text-accent transition-colors">Services</a>
            <a href="#pricing" className="hover:text-accent transition-colors">Pricing</a>
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </nav>
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-primary py-4">
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <a href="#services" className="text-white hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#pricing" className="text-white hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>Pricing</a>
              <a href="#about" className="text-white hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#contact" className="text-white hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </nav>
        )}
      </header>
  );
};

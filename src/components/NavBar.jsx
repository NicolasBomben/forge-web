import { useState } from "react";
import { Code, Menu } from "lucide-react";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b">
      <a className="flex items-center justify-center">
        <Code className="h-6 w-6 mr-2" />
        <span className="text-bold">ForgeTech</span>
      </a>
      <button
        className="ml-auto md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle Menu</span>
      </button>
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex absolute md:relative top-14 left-0 right-0 md:top-0 flex-col md:flex-row gap-4 p-4 md:p-0 bg-white  md:bg-transparent shadow-lg md:shadow-none md:ml-auto`}
      >
        <a
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#services"
        >
          Services
        </a>
        <a
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#pricing"
        >
          Pricing
        </a>
        <a
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#clients"
        >
          Clients
        </a>
        <a
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#about"
        >
          About
        </a>
        <a
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#contact"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

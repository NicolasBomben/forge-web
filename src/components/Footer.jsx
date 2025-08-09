import { ArrowUp, Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import Logo from "/assets/logo-footer.svg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-dark-background text-white py-8 mt-auto font-poppins relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div>
            <img src={Logo} alt="logo-forgeTech" />
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 font-light">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary transition-colors"
              aria-label="Visit our LinkedIn profile"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>

            <a
              href="mailto:bomben.dev@gmail.com"
              className="text-gray-300 hover:text-primary transition-colors"
              aria-label="Send email to bomben.dev@gmail.com"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Back to Top Button */}
          <div className="text-right block">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-gray-300 font-light hover:text-primary transition-colors"
              aria-label="Scroll back to top"
            >
              <span className="font-light">Back to top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p className="font-light">All rights reserved by forgetech © {currentYear}</p>
        </div>
      </div>
    </footer>
  );
};

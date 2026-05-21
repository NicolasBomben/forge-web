export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-[#0a0a0a] border-t border-[#222222]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <p className="text-center text-sm text-[#888888]">
          © {currentYear} Fernando Nicolás Bomben · forgetech.dev
        </p>
      </div>
    </footer>
  );
};

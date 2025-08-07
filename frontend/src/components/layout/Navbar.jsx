import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  return (
    <section>
      <ResponsiveNavbar />
    </section>
  );
};

const ResponsiveNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Cerrar menú al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    // Añadir event listener cuando el menú esté abierto
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-24 py-4">
      <div className="flex items-center justify-between w-[90%] mx-auto">
        {/* Logo - Izquierda */}
        <motion.div 
          className="flex-shrink-0 rounded-xl border border-white/10 bg-[#22314c]/40 backdrop-blur-md p-2"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <img 
            src="/logo_sinfin_white.webp" 
            alt="Sinfin Logo" 
            className="w-16 h-16 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain cursor-pointer"
            onClick={() => window.location.href = '/'}
          />
        </motion.div>
        
        {/* Desktop Navigation - Derecha */}
        <nav className="hidden lg:flex items-center gap-8 rounded-xl border border-white/20 bg-[#22314c]/80 backdrop-blur-md px-8 py-4 text-base text-neutral-300 shadow-lg">
          <NavLink>Work</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Services</NavLink>
          <NavLink>Contact</NavLink>
          <JoinButton />
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          ref={buttonRef}
          onClick={toggleMenu}
          className="lg:hidden flex flex-col items-center justify-center w-12 h-12 rounded-lg border border-white/20 bg-[#22314c]/80 backdrop-blur-md"
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-neutral-300 mb-1 block"
          />
          <motion.span
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-neutral-300 mb-1 block"
          />
          <motion.span
            animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-neutral-300 block"
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-4 right-4 mt-2 rounded-xl border border-white/20 bg-[#22314c]/95 backdrop-blur-md shadow-2xl"
          >
            <div className="flex flex-col items-center gap-4 px-6 py-6">
              <MobileNavLink onClick={() => setIsMenuOpen(false)}>Work</MobileNavLink>
              <MobileNavLink onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
              <MobileNavLink onClick={() => setIsMenuOpen(false)}>Services</MobileNavLink>
              <MobileNavLink onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
              <div className="w-full pt-4 border-t border-white/10">
                <JoinButton mobile />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const NavLink = ({ children }) => {
  return (
    <a href="#" rel="nofollow" className="block overflow-hidden">
      <motion.div
        whileHover={{ y: -20 }}
        transition={{ ease: "backInOut", duration: 0.5 }}
        className="h-[24px]"
      >
        <span className="flex h-[24px] items-center">{children}</span>
        <span className="flex h-[24px] items-center text-neutral-50">
          {children}
        </span>
      </motion.div>
    </a>
  );
};

const MobileNavLink = ({ children, onClick }) => {
  return (
    <motion.a 
      href="#" 
      rel="nofollow" 
      className="block text-neutral-300 hover:text-neutral-50 transition-colors duration-200 text-lg font-medium py-2"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
};

const JoinButton = ({ mobile = false }) => {
  const baseClasses = `
    relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px] 
    border-white/30 font-medium text-neutral-300 transition-all duration-300
    
    before:absolute before:inset-0
    before:-z-10 before:translate-y-[200%]
    before:scale-[2.5]
    before:rounded-[100%] before:bg-neutral-50
    before:transition-transform before:duration-1000
    before:content-[""]

    hover:scale-105 hover:border-neutral-50 hover:text-neutral-900
    hover:before:translate-y-[0%]
    active:scale-100
  `;

  const mobileClasses = mobile 
    ? "px-8 py-3 text-base w-full justify-center" 
    : "px-6 py-2 text-base";

  return (
    <button className={`${baseClasses} ${mobileClasses} cursor-pointer`}>
      Let's talk
    </button>
  );
};

export default Navbar;
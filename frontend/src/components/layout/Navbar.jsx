import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <section>
      <SimpleFloatingNav />
    </section>
  );
};

const SimpleFloatingNav = () => {
  return (
    <div className="fixed left-[50%] top-8 flex items-center gap-4 -translate-x-[50%]">
      {/* Logo externo a la izquierda */}
      <div className="flex-shrink-0">
        <img 
          src="/logo_sinfin.png" 
          alt="Sinfin Logo" 
          className="w-24 h-24 object-contain"
        />
      </div>
      
      {/* Navbar con glassmorphism */}
      <nav className="flex items-center gap-8 rounded-xl border border-white/20 bg-[#22314c]/80 backdrop-blur-md px-8 py-4 text-base text-neutral-300 shadow-lg">
        <NavLink>Work</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Services</NavLink>
        <NavLink>Contact</NavLink>
        <JoinButton />
      </nav>
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

const JoinButton = () => {
  return (
    <button
      className={`
          relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px] 
          border-white/30 px-6 py-2 font-medium text-base
         text-neutral-300 transition-all duration-300
          
          before:absolute before:inset-0
          before:-z-10 before:translate-y-[200%]
          before:scale-[2.5]
          before:rounded-[100%] before:bg-neutral-50
          before:transition-transform before:duration-1000
          before:content-[""]
  
          hover:scale-105 hover:border-neutral-50 hover:text-neutral-900
          hover:before:translate-y-[0%]
          active:scale-100`}
    >
      Let's talk
    </button>
  );
};

export default Navbar;
// src/components/Footer.jsx
import React from 'react'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const Footer = () => (
  <footer className="bg-[#3B4A6B] text-white py-10 px-6">
    {/* --- Top: logo y redes --- */}
    <div className="max-w-7xl mx-auto flex flex-col items-center space-y-8 md:flex-row md:items-center md:justify-between md:space-y-0">
      {/* Logo */}
      <div>
        <img
          src="/emblem_white.webp"
          alt="SINFIN Creative Company Logo"
          className="h-32 w-auto"
        />
      </div>

      {/* Iconos sociales */}
      <div className="flex space-x-6">
        {[ 
          { Icon: FaFacebookF, label: 'Facebook', href: '#' },
          { Icon: FaInstagram, label: 'Instagram', href: '#' },
          { Icon: FaWhatsapp, label: 'WhatsApp', href: '#' }
        ].map(({ Icon, label, href }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="bg-white bg-opacity-30 hover:bg-opacity-50 p-3 rounded-full transition"
          >
            <Icon size={24} className="text-[#3B4A6B]" />
          </a>
        ))}
      </div>
    </div>

    {/* Divider */}
    <div className="max-w-7xl mx-auto border-t border-white/30 mt-8" />

    {/* --- Bottom: copyright y nav --- */}
    <div className="max-w-7xl mx-auto pt-6 flex flex-col items-center space-y-6 md:flex-row md:justify-between md:space-y-0">
      {/* Texto */}
      <div className="space-y-1 text-center md:text-left">
        <p>© 2025 SINFIN Creative Company</p>
        <p>All rights reserved</p>
      </div>

      {/* Navegación */}
      <nav>
        <ul className="flex flex-wrap justify-center space-x-6">
          <li>
            <a href="#work" className="hover:underline">
              Work
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:underline">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
)

export default Footer

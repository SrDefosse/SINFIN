// src/components/InteractiveSelector.jsx
import React, { useState, useEffect } from 'react';
import { FaPenNib, FaCode, FaBrain } from 'react-icons/fa';
import { BsStars, BsCameraVideoFill } from 'react-icons/bs';

const InteractiveSelector = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState([]);

  const options = [
    {
      title: "ADE1000",
      description: "Creación de personajes con IA",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      icon: <BsStars className="text-white w-4 h-4 sm:w-6 sm:h-6" />
    },
    {
      title: "Billy Hallen",
      description: "Diseño Branding",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      icon: <FaPenNib className="text-white w-4 h-4 sm:w-6 sm:h-6" />
    },
    {
      title: "Grupo Visión",
      description: "Produccion y edición de video institucional",
      image:
        "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
      icon: <BsCameraVideoFill className="text-white w-4 h-4 sm:w-6 sm:h-6" />
    },
    {
      title: "ADE1000",
      description: "Diseño de Página Web",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      icon: <FaCode className="text-white w-4 h-4 sm:w-6 sm:h-6" />
    },
    {
      title: "ADE1000",
      description: "Automatizaciones con IA",
      image:
        "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
      icon: <FaBrain className="text-white w-4 h-4 sm:w-6 sm:h-6" />
    }
  ];

  useEffect(() => {
    const timers = options.map((_, i) =>
      setTimeout(() => setAnimatedOptions(prev => [...prev, i]), 180 * i)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#22314c] font-sans text-white px-2 sm:px-0">
      {/* Header Section */}
      <div className="w-full max-w-2xl px-4 sm:px-6 mt-4 sm:mt-8 mb-2 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2 sm:mb-3 tracking-tight drop-shadow-lg animate-fadeInTop delay-300">
          IMPULSANDO NEGOCIOS
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 font-medium max-w-xl mx-auto animate-fadeInTop delay-600">
          CON CREATIVIDAD E INTELIGENCIA ARTIFICIAL.
        </p>
      </div>
      <div className="h-6 sm:h-12"></div>

      {/* Options Container */}
      <div className="options flex w-full max-w-[900px] min-w-0 h-[250px] sm:h-[300px] md:h-[400px] mx-2 sm:mx-0 items-stretch overflow-hidden relative">
        {options.map((option, index) => {
          const isActive = activeIndex === index;
          const isAnimated = animatedOptions.includes(index);
          return (
            <div
              key={index}
              className={`option relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out ${
                isActive ? 'active' : ''
              }`}
              style={{
                backgroundImage: `url('${option.image}')`,
                backgroundSize: isActive ? 'auto 100%' : 'auto 120%',
                backgroundPosition: 'center',
                backfaceVisibility: 'hidden',
                opacity: isAnimated ? 1 : 0,
                transform: isAnimated ? 'translateX(0)' : 'translateX(-60px)',
                minWidth: '40px',
                minHeight: '100px',
                margin: 0,
                borderRadius: 0,
                borderWidth: '2px',
                borderStyle: 'solid',
                borderColor: isActive ? '#fff' : '#292929',
                cursor: 'pointer',
                backgroundColor: '#18181b',
                boxShadow: isActive
                  ? '0 20px 60px rgba(0,0,0,0.50)'
                  : '0 10px 30px rgba(0,0,0,0.30)',
                flex: isActive ? '7 1 0%' : '1 1 0%',
                zIndex: isActive ? 10 : 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                position: 'relative',
                overflow: 'hidden',
                willChange: 'flex-grow, box-shadow, background-size, background-position',
                transitionDelay: `${180 * index}ms`
              }}
              onClick={() => setActiveIndex(index)}
            >
              {/* Shadow effect */}
              <div
                className="shadow absolute left-0 right-0 pointer-events-none transition-all duration-700 ease-in-out"
                style={{
                  bottom: isActive ? '0' : '-40px',
                  height: '120px',
                  boxShadow: isActive
                    ? 'inset 0 -120px 120px -120px #000, inset 0 -120px 120px -80px #000'
                    : 'inset 0 -120px 0px -120px #000, inset 0 -120px 0px -80px #000'
                }}
              ></div>

              {/* Label with icon and info */}
              <div className="label absolute left-0 right-0 bottom-3 sm:bottom-5 flex items-center justify-start h-10 sm:h-12 z-[2] pointer-events-none px-2 sm:px-4 gap-2 sm:gap-3 w-full">
                <div className="icon min-w-[32px] sm:min-w-[44px] max-w-[32px] sm:max-w-[44px] h-[32px] sm:h-[44px] flex items-center justify-center rounded-full bg-[rgba(32,32,32,0.85)] backdrop-blur-[10px] shadow-[0_1px_4px_rgba(0,0,0,0.18)] border-2 border-[#444] flex-shrink-0 flex-grow-0 transition-all duration-200">
                  {option.icon}
                </div>
                <div className="info text-white whitespace-pre relative">
                  <div
                    className="main font-bold text-sm sm:text-base md:text-lg transition-all duration-700 ease-in-out"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? 'translateX(0)' : 'translateX(25px)'
                    }}
                  >
                    {option.title}
                  </div>
                  <div
                    className="sub text-xs sm:text-sm md:text-base text-gray-300 transition-all duration-700 ease-in-out"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? 'translateX(0)' : 'translateX(25px)'
                    }}
                  >
                    {option.description}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Animaciones */}
      <style>{`
        @keyframes slideFadeIn {
          0%   { opacity: 0; transform: translateX(-60px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInFromTop {
          0%   { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInTop {
          opacity: 0;
          transform: translateY(-20px);
          animation: fadeInFromTop 0.8s ease-in-out forwards;
        }
        .delay-300 { animation-delay: 0.3s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>
    </div>
  );
};

export default InteractiveSelector;

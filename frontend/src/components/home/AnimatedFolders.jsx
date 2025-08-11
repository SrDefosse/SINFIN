import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import EncryptButton from '../ui/EncryptButton';
import ImageModal from '../ui/ImageModal';

const AnimatedFolder = ({
  title,
  color,
  backgroundColor,
  images = [],
  className = '',
  zIndex = 10,
  folderIndex = 0,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [paperOffsets, setPaperOffsets] = useState(
    Array.from({ length: 3 }, () => ({ x: 0, y: 0 }))
  );
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const folderRef = useRef(null);

  // Detectar dispositivos móviles
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Cerrar folder al hacer tap fuera en móvil
  useEffect(() => {
    if (!isMobile || !isOpen) return;

    const handleClickOutside = (event) => {
      if (folderRef.current && !folderRef.current.contains(event.target)) {
        setIsOpen(false);
        setPaperOffsets(Array.from({ length: 3 }, () => ({ x: 0, y: 0 })));
      }
    };

    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobile, isOpen]);

  const handleModalOpen = () => {
    // No queremos que el hover normal abra el modal, solo el click/tap
    if (!isOpen) return;
    setIsModalOpen(true);
  };

  // Optimización: Memoizar cálculos que no cambian
  const baseY = useMemo(() => folderIndex * 60, [folderIndex]);
  const baseX = useMemo(() => folderIndex * 20, [folderIndex]);

  const openPos = useMemo(() => [
    { x: -150, y: -80, rotate: -10 },
    { x: 60, y: -80, rotate: 10 },
    { x: -60, y: -100, rotate: 3 },
  ], []);

  // Optimización: useCallback para evitar re-renders
  const handlePaperMouseMove = useCallback((e, idx) => {
    if (!isOpen) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.1;
    const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.1;
    
    setPaperOffsets((prev) => {
      // Optimización: Evitar actualizaciones si el cambio es mínimo
      if (Math.abs(prev[idx].x - dx) < 0.5 && Math.abs(prev[idx].y - dy) < 0.5) {
        return prev;
      }
      const copy = [...prev];
      copy[idx] = { x: dx, y: dy };
      return copy;
    });
  }, [isOpen]);

  const handlePaperMouseLeave = useCallback((_, idx) => {
    setPaperOffsets((prev) => {
      const copy = [...prev];
      copy[idx] = { x: 0, y: 0 };
      return copy;
    });
  }, []);

  // Handlers para eventos táctiles y click
  const handleFolderInteraction = useCallback(() => {
    if (isMobile) {
      setIsOpen(!isOpen);
      if (!isOpen) {
        setPaperOffsets(Array.from({ length: 3 }, () => ({ x: 0, y: 0 })));
      }
    }
  }, [isOpen, isMobile]);

  const handlePaperTouch = useCallback((e, idx) => {
    if (!isMobile || !isOpen) return;
    
    const touch = e.touches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = (touch.clientX - (rect.left + rect.width / 2)) * 0.15;
    const dy = (touch.clientY - (rect.top + rect.height / 2)) * 0.15;
    
    setPaperOffsets((prev) => {
      const copy = [...prev];
      copy[idx] = { x: dx, y: dy };
      return copy;
    });
  }, [isOpen, isMobile]);

  return (
    <>
    <motion.div
      ref={folderRef}
      className={`absolute w-full h-40 cursor-pointer ${className}`}
      style={{ 
        zIndex,
        willChange: 'transform' // Optimización GPU
      }}
      initial={{ x: baseX, y: baseY }}
      animate={{ x: baseX, y: baseY - (isOpen ? 8 : 0) }}
      // Eventos para desktop
      onHoverStart={() => !isMobile && setIsOpen(true)}
      onHoverEnd={() => {
        if (!isMobile) {
          setIsOpen(false);
          setPaperOffsets(Array.from({ length: 3 }, () => ({ x: 0, y: 0 })));
        }
      }}
      // Eventos para móvil
      onTap={() => {
        handleFolderInteraction();
        handleModalOpen();
      }}
      onClick={handleModalOpen} // Para Desktop
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {/* Papers */}
      {[0, 1, 2].map((i) => {
        const sizeCls =
          i === 0 ? 'w-130 h-48' : i === 1 ? 'w-150 h-52' : 'w-150 h-56';
        const bgColor = i === 0 ? '#f0f0f0' : i === 1 ? '#f8f8f8' : '#ffffff';

        return (
          <motion.div
            key={i}
            className={`absolute ${sizeCls} rounded-lg shadow-md overflow-hidden`}
            style={{
              backgroundColor: bgColor,
              left: '50%',
              top: '5%',
              transform: 'translateX(-50%)',
              zIndex: zIndex - 5 + i,
              willChange: 'transform', 
            }}
            onMouseMove={(e) => !isMobile && handlePaperMouseMove(e, i)}
            onMouseLeave={(e) => !isMobile && handlePaperMouseLeave(e, i)}
            onTouchMove={(e) => handlePaperTouch(e, i)}
            onTouchEnd={() => isMobile && setPaperOffsets((prev) => {
              const copy = [...prev];
              copy[i] = { x: 0, y: 0 };
              return copy;
            })}
            animate={{
              x: isOpen ? openPos[i].x + paperOffsets[i].x : 0,
              y: isOpen ? openPos[i].y + paperOffsets[i].y : 0,
              rotate: isOpen ? openPos[i].rotate : 0,
              scale: isOpen ? 1 : 0.9,
              opacity: isOpen ? 1 : 0.8,
            }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            whileHover={{ scale: isOpen ? 1.05 : 0.9 }}
            whileTap={{ scale: isOpen ? 1.02 : 0.88 }}
          >
            {images[i] ? (
              <img
                src={images[i]}
                alt={`${title} imagen ${i + 1}`}
                className="object-cover w-full h-full"
                loading="lazy" 
                decoding="async"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Imagen {i + 1}</span>
              </div>
            )}
          </motion.div>
        );
      })}

      {/* Folder Tab */}
      <motion.div
        className="absolute left-0 top-0 h-8 rounded-t-lg shadow-sm"
        style={{
          backgroundColor: color,
          width: title.length > 10 ? '280px' : '240px',
          clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 100%, 0 100%)',
          zIndex: zIndex + 10,
          willChange: 'transform' // Optimización GPU
        }}
        animate={{ skewX: isOpen ? '3deg' : '0deg' }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-6 py-1 text-white font-bold text-sm">{title}</div>
      </motion.div>

      {/* Folder Body */}
      <motion.div
        className="absolute left-0 top-8 w-full h-96 shadow-lg rounded-b-lg rounded-tr-lg"
        style={{ 
          backgroundColor,
          willChange: 'transform' // Optimización GPU
        }}
        animate={{ skewX: isOpen ? '2deg' : '0deg' }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
    <ImageModal 
        images={images}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
    />
    </>
  );
};

// Separate Folders Section - Contains only folders and header
const FoldersSection = () => {
  return (
    <div id="our-work" className="w-full min-h-screen bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Header */}
      <div className="w-full px-8 py-12">
        <div className="max-w-7xl mx-auto flex items-start justify-between">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              TRANSFORMAMOS MARCAS CON
              <br />
              <span className="text-gray-800">CREATIVIDAD Y TECNOLOGÍA</span>
            </h1>
          </div>
          <div className="ml-8">
            <img
              src="/emblem_blue.webp"
              alt="Sinfín logo"
              className="w-48 h-48 object-contain rotate-20"
              loading="lazy" // Optimización: lazy loading
              decoding="async" // Optimización: decodificación asíncrona
            />
          </div>
        </div>
      </div>

      {/* Folders Section */}
      <div className="w-full px-4 sm:px-8 pb-12">
        <div className="relative w-full h-64 md:h-80">
          <AnimatedFolder
            title="GRUPO STOEVER"
            color="#a0aec0"
            backgroundColor="#cbd5e0"
            images={[
              '/folders/stoever/stoever1.webp?height=200&width=300',
              '/folders/stoever/stoever2.webp?height=200&width=300',
              '/folders/stoever/stoever3.webp?height=200&width=300',
            ]}
            zIndex={3}
            folderIndex={0}
          />

          <AnimatedFolder
            title="ADE1000"
            color="#4a5568"
            backgroundColor="#2d3748"
            images={[
              '/folders/ade/ade1.webp?height=200&width=300',
              '/folders/ade/ade2.webp?height=200&width=300',
              '/folders/ade/ade3.webp?height=200&width=300',
            ]}
            zIndex={3}
            folderIndex={1}
          />

          <AnimatedFolder
            title="GRUPO VISIÓN"
            color="#68d391"
            backgroundColor="#9ae6b4"
            images={[
              '/placeholder.svg?height=200&width=300',
              '/placeholder.svg?height=200&width=300',
              '/placeholder.svg?height=200&width=300',
            ]}
            zIndex={3}
            folderIndex={2}
          />

          <AnimatedFolder
            title="MT3"
            color="#ecc94b"
            backgroundColor="#f6e05e"
            images={[
              '/folders/?height=200&width=300',
              '/placeholder.svg?height=200&width=300',
              '/placeholder.svg?height=200&width=300',
            ]}
            zIndex={3}
            folderIndex={3}
          />
        </div>
      </div>
    </div>
  );
};

// Separate Button Section - Completely independent from folders
const ButtonSection = () => {
  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white flex items-center justify-center pb-16">
      <div className="w-full px-8">
        <div className="max-w-7xl mx-auto flex justify-end">
          <EncryptButton text="DESCUBRE MÁS" url="https://www.instagram.com/sinfin.cc/" />
        </div>
      </div>
    </div>
  );
};

export default function AnimatedFolders() {
  return (
    <>
      <FoldersSection />
      <ButtonSection />
    </>
  );
}
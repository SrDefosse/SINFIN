import RotatingText from '../ui/RotatingText';
import { motion, LayoutGroup } from 'framer-motion';

const Hero = () => {
  return (
    <div className="bg-[#22314c] flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-regular text-white flex flex-wrap justify-center items-center gap-4">
          <LayoutGroup>
            <motion.span 
              className="text-white"
              layout
              transition={{ 
                type: "spring", 
                damping: 15, 
                stiffness: 100
              }}
            >
              Somos un <span className='font-bold'> SINFIN </span> de
            </motion.span>
            <RotatingText
              texts={['ideas', 'soluciones', 'creatividad', 'conexiones', 'innovaciones', 'oportunidades']}
              mainClassName="px-4 md:px-6 bg-[#C7C4B3] font-regulartext-white overflow-hidden py-2 md:py-4 justify-center rounded-2xl shadow-2xl"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              animatePresenceMode="popLayout"
              transition={{ 
                type: "spring", 
                damping: 15, 
                stiffness: 100
              }}
              rotationInterval={3000}
            />
          </LayoutGroup>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
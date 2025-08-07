import { motion } from "framer-motion";

// Lista de logos
const logos = [
  { id: 1, src: "/logos/logo1.png", alt: "Logo Carrusel 1" },
  { id: 2, src: "/logos/logo2.png", alt: "Logo Carrusel 2" },
  { id: 3, src: "/logos/logo3.png", alt: "Logo Carrusel 3" },
  { id: 4, src: "/logos/logo4.png", alt: "Logo Carrusel 4" },
  { id: 5, src: "/logos/logo5.png", alt: "Logo Carrusel 5" },
  { id: 6, src: "/logos/logo6.png", alt: "Logo Carrusel 6" },
  { id: 7, src: "/logos/logo7.png", alt: "Logo Carrusel 7" },
  { id: 8, src: "/logos/logo8.png", alt: "Logo Carrusel 8" },
  { id: 9, src: "/logos/logo9.png", alt: "Logo Carrusel 9" },
  { id: 10, src: "/logos/logo10.png", alt: "Logo Carrusel 10" },
  { id: 11, src: "/logos/logo11.png", alt: "Logo Carrusel 11" },
  { id: 12, src: "/logos/logo12.png", alt: "Logo Carrusel 12" },
  { id: 13, src: "/logos/logo13.png", alt: "Logo Carrusel 13" },
  { id: 14, src: "/logos/logo14.png", alt: "Logo Carrusel 14" },
  { id: 15, src: "/logos/logo15.png", alt: "Logo Carrusel 15" },
  { id: 16, src: "/logos/logo16.png", alt: "Logo Carrusel 16" },
  { id: 17, src: "/logos/logo17.png", alt: "Logo Carrusel 17" },
  { id: 18, src: "/logos/logo18.png", alt: "Logo Carrusel 18" },
  { id: 19, src: "/logos/logo19.png", alt: "Logo Carrusel 19" },
  { id: 20, src: "/logos/logo20.png", alt: "Logo Carrusel 20" },
  { id: 21, src: "/logos/logo21.png", alt: "Logo Carrusel 21" },
  { id: 22, src: "/logos/logo22.png", alt: "Logo Carrusel 22" },
  { id: 23, src: "/logos/logo23.png", alt: "Logo Carrusel 23" },
  { id: 24, src: "/logos/logo24.png", alt: "Logo Carrusel 24" },
  { id: 25, src: "/logos/logo25.png", alt: "Logo Carrusel 25" },
  { id: 26, src: "/logos/logo26.png", alt: "Logo Carrusel 26" },
  { id: 27, src: "/logos/logo27.png", alt: "Logo Carrusel 27" },
  { id: 28, src: "/logos/logo28.png", alt: "Logo Carrusel 28" }
];

const Logos = () => {
  return (
    <section className="relative w-full overflow-hidden border-b border-zinc-700 py-12 sm:py-16 bg-[#41506A]">
      <div className="flex flex-col items-center justify-center">
        <span className="pb-16 text-center text-4xl font-semibold text-white">
          LOS MEJORES YA ESTÁN AQUÍ
        </span>
        <div className="flex w-full overflow-hidden">
          <TranslateWrapper>
            <LogoItems />
          </TranslateWrapper>
          <TranslateWrapper>
            <LogoItems />
          </TranslateWrapper>
          <TranslateWrapper>
            <LogoItems />
          </TranslateWrapper>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#41506A] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#41506A] to-transparent" />
    </section>
  );
};

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex gap-12 px-6 min-w-max"
    >
      {children}
    </motion.div>
  );
};

const LogoItems = () => (
  <div className="flex gap-12">
    {logos.map((logo) => (
      <LogoItem key={logo.id} src={logo.src} alt={logo.alt} />
    ))}
  </div>
);

const LogoItem = ({ src, alt }) => (
  <div className="flex items-center">
    <img
      src={src}
      alt={alt}
      className="h-16 w-auto sm:h-20 md:h-24 lg:h-32"
    />
  </div>
);
export default Logos;
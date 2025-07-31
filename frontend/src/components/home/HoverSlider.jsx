// AnimatedHoverSlider.jsx
import React, {
    createContext,
    useContext,
    useState,
    useCallback,
    forwardRef,
  } from 'react'
  import { motion } from 'framer-motion'
  
  // Helper para clases
  const cn = (...classes) => classes.filter(Boolean).join(' ')
  
  // Divide el texto en caracteres (mantiene espacios)
  function splitText(text) {
    const words = text.split(' ').map(w => w + ' ')
    return { characters: words.map(w => w.split('')).flat() }
  }
  
  // Contexto para controlar la diapositiva activa
  const HoverSliderContext = createContext()
  function useHoverSliderContext() {
    const ctx = useContext(HoverSliderContext)
    if (!ctx) {
      throw new Error('useHoverSliderContext debe usarse dentro de HoverSlider')
    }
    return ctx
  }
  
  // Componente contenedor
  const HoverSlider = forwardRef(({ children, className, ...props }, ref) => {
    const [activeSlide, setActiveSlide] = useState(0)
    const changeSlide = useCallback(idx => setActiveSlide(idx), [])
    return (
      <HoverSliderContext.Provider value={{ activeSlide, changeSlide }}>
        <div ref={ref} className={className} {...props}>
          {children}
        </div>
      </HoverSliderContext.Provider>
    )
  })
  HoverSlider.displayName = 'HoverSlider'
  
  // Texto con animación de deslizamiento
  const TextStaggerHover = forwardRef(
    ({ text, index, className, ...props }, ref) => {
      const { activeSlide, changeSlide } = useHoverSliderContext()
      const { characters } = splitText(text)
      const isActive = activeSlide === index
      const handleMouse = () => changeSlide(index)
      return (
        <span
          ref={ref}
          onMouseEnter={handleMouse}
          className={cn('relative inline-block origin-bottom overflow-hidden', className)}
          {...props}
        >
          {characters.map((char, i) => {
            const transition = {
              delay: i * 0.025,
              duration: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }
            return (
              <span key={char + i} className="relative inline-block overflow-hidden">
                <motion.span
                  className="inline-block opacity-20"
                  initial={{ y: '0%' }}
                  animate={isActive ? { y: '-110%' } : { y: '0%' }}
                  transition={transition}
                >
                  {char}
                  {char === ' ' && i < characters.length - 1 && <>&nbsp;</>}
                </motion.span>
                <motion.span
                  className="absolute left-0 top-0 inline-block opacity-100"
                  initial={{ y: '110%' }}
                  animate={isActive ? { y: '0%' } : { y: '110%' }}
                  transition={transition}
                >
                  {char}
                </motion.span>
              </span>
            )
          })}
        </span>
      )
    }
  )
  TextStaggerHover.displayName = 'TextStaggerHover'
  
  // Variantes de clip-path para las imágenes
  const clipPathVariants = {
    visible: { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' },
    hidden:  { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0px)' },
  }
  
  // Contenedor de imágenes (stack grid)
  const HoverSliderImageWrap = forwardRef(({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'grid overflow-hidden [&>*]:col-start-1 [&>*]:col-end-1 [&>*]:row-start-1 [&>*]:row-end-1 [&>*]:h-full [&>*]:w-full',
        className
      )}
      {...props}
    />
  ))
  HoverSliderImageWrap.displayName = 'HoverSliderImageWrap'
  
  // Imagen animada con clip-path
  const HoverSliderImage = forwardRef(({ index, imageUrl, ...props }, ref) => {
    const { activeSlide } = useHoverSliderContext()
    return (
      <motion.img
        ref={ref}
        src={imageUrl}
        alt={props.alt}
        className="inline-block align-middle"
        variants={clipPathVariants}
        animate={activeSlide === index ? 'visible' : 'hidden'}
        transition={{ ease: [0.25, 0.46, 0.45, 0.94], duration: 0.8 }}
        {...props}
      />
    )
  })
  HoverSliderImage.displayName = 'HoverSliderImage'
  
  // Datos de ejemplo
  const SLIDES = [
    {
      id: 'slide-1',
      title: 'Branding',
      imageUrl:
        'https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?q=80&w=2486&auto=format&fit=crop',
    },
    {
      id: 'slide-2',
      title: 'Videos Corporativos',
      imageUrl:
        'https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?q=80&w=2487&auto=format&fit=crop',
    },
    {
      id: 'slide-3',
      title: 'Sitios Web',
      imageUrl:
        'https://images.unsplash.com/photo-1688733720228-4f7a18681c4f?q=80&w=2487&auto=format&fit=crop',
    },
    {
      id: 'slide-4',
      title: 'Personajes IA',
      imageUrl:
        'https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=2487&auto=format&fit=crop',
    },
    {
      id: 'slide-5',
      title: 'Automatizaciones con IA',
      imageUrl:
        'https://images.unsplash.com/photo-1726066012698-bb7a3abce786?q=80&w=2487&auto=format&fit=crop',
    },
  ]
  
  // Componente demo que exportas por defecto
  const HoverSliderDemo = () => (
    <HoverSlider className="min-h-screen flex flex-col items-center justify-center p-6 md:px-32 bg-[#faf9f5] text-[#3d3929]">
      <h2 className="mb-6 text-black text-4xl font-bold text-center py-10">
        SERVICIOS
      </h2>
      <div className="flex w-full flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 max-w-7xl">
        <div className="flex flex-col space-y-2 md:space-y-4 order-2 lg:order-1">
          {SLIDES.map((slide, idx) => (
            <TextStaggerHover
              key={slide.id}
              index={idx}
              text={slide.title}
              className="cursor-pointer text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tighter"
            />
          ))}
        </div>
        <HoverSliderImageWrap className="order-1 lg:order-2 w-80 h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] rounded-lg">
          {SLIDES.map((slide, idx) => (
            <HoverSliderImage
              key={slide.id}
              index={idx}
              imageUrl={slide.imageUrl}
              className="w-full h-full object-cover rounded-lg"
              loading="eager"
              decoding="async"
            />
          ))}
        </HoverSliderImageWrap>
      </div>
    </HoverSlider>
  )
  
  export default HoverSliderDemo
  
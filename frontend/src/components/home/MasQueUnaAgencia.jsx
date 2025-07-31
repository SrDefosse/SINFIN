// MasQueUnaAgencia.jsx
import React from "react";
import { motion } from "framer-motion";

const MasQueUnaAgencia = () => {
  // Componente interno para el texto con círculo
  const DrawCircleText = () => (
    <span className="relative inline-block align-baseline">
      inteligencia artificial
      <svg
        viewBox="0 0 286 73"
        fill="none"
        className="absolute left-0 -right-4 -top-4 bottom-0 translate-y-1 w-full h-auto"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.25, ease: "easeInOut" }}
          d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
          stroke="#1F2937"
          strokeWidth="3"
        />
      </svg>
    </span>
  );

  return (
    <section className="py-16 px-8 bg-gray-50">
      {/* Título superior */}
      <h1 className="text-center text-5xl font-bold mb-12">
        MÁS QUE UNA AGENCIA....
      </h1>

      {/* Contenedor principal: logo + texto */}
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        {/* IZQUIERDA: logo (imagen) */}
        <div className="flex-shrink-0">
          <img
            src="/typologo_blue.png"
            alt="SINFiN Creative Company"
            className="h-24 md:h-32 object-contain"
          />
        </div>

        {/* DERECHA: párrafo descriptivo */}
        <div className="text-gray-800 text-lg leading-relaxed text-justify">
          <p>
            es un ente estratégico que crea, transforma y potencia marcas,
            productos e ideas a través de <strong>diseño</strong>,{" "}
            <strong>psicología del marketing</strong>, narrativas visuales e{" "}
            <DrawCircleText />
          </p>
        </div>
      </div>
    </section>
  );
};
export default MasQueUnaAgencia;
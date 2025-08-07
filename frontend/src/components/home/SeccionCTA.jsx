import React from 'react';

const SeccionCTA = () => {
  return (
    <section className="bg-[#CBD9EB] py-20 min-h-[500px]">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-15 items-center h-full text-center md:text-left">
          <div className="text-[#2C3E50]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-[#34495E] tracking-tight">
              DESBLOQUEA<br />
              UN MUNDO DE<br />
              POSIBILIDADES<br />
              CREATIVAS
            </h1>
            <p className="text-lg leading-relaxed mb-8 text-[#5A6C7D] max-w-lg">
              En SINFIN, nos especializamos en transformar 
              ideas en experiencias digitales impactantes. 
              Nuestro enfoque combina creatividad con 
              visión estratégica para impulsar su marca.
            </p>
            <button className="bg-[#34495E] text-white px-8 py-4 rounded-full text-base font-semibold cursor-pointer transition-all duration-300 tracking-wide hover:bg-[#2C3E50] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#34495E]/30">
              COMENCEMOS....
            </button>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-full h-64 md:h-[350px] bg-white rounded-xl shadow-xl flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-200">
              {/* Aquí irá la imagen */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeccionCTA;

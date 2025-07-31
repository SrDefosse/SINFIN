import React, { useState } from 'react';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
    aceptaTerminos: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Limpiar errores cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El correo electrónico no es válido';
    }
    
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es requerido';
    }
    
    if (!formData.aceptaTerminos) {
      newErrors.aceptaTerminos = 'Debes aceptar los términos y condiciones';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      // Aquí iría la lógica para enviar el formulario
      console.log('Formulario enviado:', formData);
      alert('¡Mensaje enviado correctamente!');
      setFormData({
        nombre: '',
        email: '',
        mensaje: '',
        aceptaTerminos: false
      });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section className="bg-gray-200 py-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <div className="text-[#22314c]">
            <h2 className="text-5xl md:text-5xl font-bold mb-4 text-[#22314c] tracking-tight text-center md:text-left">CONTÁCTANOS</h2>
            <p className="text-xl mb-12 text-[#22314c] opacity-80 leading-6 text-center md:text-left">
              Estamos aquí para ayudarte con tus proyectos.
            </p>
            
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-in-out">
                <div className="text-[#22314c] bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-lg flex items-center justify-center min-w-[48px] h-12">
                  <MdEmail size={24} />
                </div>
                <div>
                  <a href="mailto:info@sinfin.com" className="text-[#22314c] text-lg font-medium leading-6 no-underline hover:text-[#1a252f] hover:underline transition-all duration-300">info@sinfin.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-in-out">
                <div className="text-[#22314c] bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-lg flex items-center justify-center min-w-[48px] h-12">
                  <MdPhone size={24} />
                </div>
                <div>
                  <a href="tel:+524775552277" className="text-[#22314c] text-lg font-medium leading-6 no-underline hover:text-[#1a252f] hover:underline transition-all duration-300">477 555 22 77</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-in-out">
                <div className="text-[#22314c] bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-lg flex items-center justify-center min-w-[48px] h-12">
                  <MdLocationOn size={24} />
                </div>
                <div>
                  <a href="https://maps.google.com/?q=Simon+Álvarez+202g,+Heroes+de+Chapultepec,+37190+León+de+los+Aldama,+Gto.,+México" target="_blank" rel="noopener noreferrer" className="text-[#22314c] text-lg font-medium leading-6 no-underline hover:text-[#1a252f] hover:underline transition-all duration-300">
                    Simon Álvarez 202g, Heroes de Chapultepec,<br />37190 León de los Aldama, Gto.
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-10 rounded-2xl shadow-2xl">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="nombre" className="block mb-2 text-[#22314c] font-semibold text-base">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className={`w-full p-4 border-2 rounded-lg text-base transition-all duration-300 bg-gray-50 text-[#22314c] box-border focus:outline-none focus:bg-white ${
                    errors.nombre 
                      ? 'border-red-500 bg-red-50' 
                      : 'border-gray-300 focus:border-[#22314c] focus:shadow-[0_0_0_3px_rgba(34,49,76,0.1)]'
                  }`}
                />
                {errors.nombre && <span className="text-red-500 text-sm mt-1 block">{errors.nombre}</span>}
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-[#22314c] font-semibold text-base">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-4 border-2 rounded-lg text-base transition-all duration-300 bg-gray-50 text-[#22314c] box-border focus:outline-none focus:bg-white ${
                    errors.email 
                      ? 'border-red-500 bg-red-50' 
                      : 'border-gray-300 focus:border-[#22314c] focus:shadow-[0_0_0_3px_rgba(34,49,76,0.1)]'
                  }`}
                />
                {errors.email && <span className="text-red-500 text-sm mt-1 block">{errors.email}</span>}
              </div>
              
              <div className="mb-6">
                <label htmlFor="mensaje" className="block mb-2 text-[#22314c] font-semibold text-base">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="5"
                  value={formData.mensaje}
                  onChange={handleChange}
                  className={`w-full p-4 border-2 rounded-lg text-base transition-all duration-300 bg-gray-50 text-[#22314c] box-border resize-y min-h-[120px] focus:outline-none focus:bg-white ${
                    errors.mensaje 
                      ? 'border-red-500 bg-red-50' 
                      : 'border-gray-300 focus:border-[#22314c] focus:shadow-[0_0_0_3px_rgba(34,49,76,0.1)]'
                  }`}
                  placeholder="Cuéntanos sobre tu proyecto..."
                ></textarea>
                {errors.mensaje && <span className="text-red-500 text-sm mt-1 block">{errors.mensaje}</span>}
              </div>
              
              <div className="mb-8">
                <label className="flex items-center cursor-pointer text-base text-[#22314c] relative leading-tight">
                  <input
                    type="checkbox"
                    name="aceptaTerminos"
                    checked={formData.aceptaTerminos}
                    onChange={handleChange}
                    className="opacity-0 absolute w-0 h-0"
                  />
                  <span className={`w-5 h-5 border-2 border-[#22314c] rounded mr-2 relative transition-all duration-300 bg-white flex-shrink-0 inline-flex items-center justify-center box-border align-middle hover:border-[#1a252f] hover:shadow-md ${
                    formData.aceptaTerminos ? 'bg-[#22314c] border-[#22314c]' : ''
                  } ${
                    errors.aceptaTerminos ? 'focus:shadow-[0_0_0_3px_rgba(34,49,76,0.2)] focus:outline-2 focus:outline-[#22314c] focus:outline-offset-2' : ''
                  }`}>
                    {formData.aceptaTerminos && (
                      <span className="absolute left-1 top-0 w-1.5 h-2.5 border-solid border-white border-r-2 border-b-2 transform rotate-45"></span>
                    )}
                  </span>
                  Acepto Términos y condiciones
                </label>
                {errors.aceptaTerminos && <span className="text-red-500 text-sm mt-1 block">{errors.aceptaTerminos}</span>}
              </div>
              
              <button 
                type="submit" 
                className={`w-full py-4 px-9 border-none rounded-lg text-lg font-semibold cursor-pointer transition-all duration-300 tracking-wide ${
                  !formData.aceptaTerminos 
                    ? 'bg-gray-400 text-white cursor-not-allowed opacity-60' 
                    : 'bg-gradient-to-br from-[#22314c] to-[#2c3e50] text-white hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(34,49,76,0.3)] hover:from-[#1a252f] hover:to-[#22314c] active:translate-y-0'
                }`}
                disabled={!formData.aceptaTerminos}
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;

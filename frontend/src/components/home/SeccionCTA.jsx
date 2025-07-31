import React from 'react';

const SeccionCTA = () => {
  return (
    <section className="seccion-cta">
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h1 className="cta-title">
              DESBLOQUEA<br />
              UN MUNDO DE<br />
              POSIBILIDADES<br />
              CREATIVAS
            </h1>
            <p className="cta-description">
              En SINFIN, nos especializamos en transformar 
              ideas en experiencias digitales impactantes. 
              Nuestro enfoque combina creatividad con 
              visión estratégica para impulsar su marca.
            </p>
            <button className="cta-button">
              COMENCEMOS....
            </button>
          </div>
          <div className="cta-image">
            <div className="image-placeholder">
              {/* Aquí irá la imagen */}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .seccion-cta {
          background-color: #CBD9EB;
          padding: 80px 0;
          min-height: 500px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .cta-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          height: 100%;
        }

        .cta-text {
          color: #2C3E50;
        }

        .cta-title {
          font-size: 3.5rem;
          font-weight: bold;
          line-height: 1.1;
          margin-bottom: 24px;
          color: #34495E;
          letter-spacing: -0.02em;
        }

        .cta-description {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 32px;
          color: #5A6C7D;
          max-width: 480px;
        }

        .cta-button {
          background-color: #34495E;
          color: white;
          padding: 16px 32px;
          border: none;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 0.5px;
        }

        .cta-button:hover {
          background-color: #2C3E50;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(52, 73, 94, 0.3);
        }

        .cta-image {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-placeholder {
          width: 100%;
          height: 350px;
          background-color: white;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .image-placeholder::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }

        @media (max-width: 768px) {
          .cta-content {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }

          .cta-title {
            font-size: 2.5rem;
          }

          .seccion-cta {
            padding: 60px 0;
          }

          .image-placeholder {
            height: 250px;
          }
        }

        @media (max-width: 480px) {
          .cta-title {
            font-size: 2rem;
          }

          .container {
            padding: 0 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default SeccionCTA;

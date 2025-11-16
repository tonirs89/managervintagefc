// src/components/CromoCardBack.jsx

export default function CromoCardBack({ className = "" }) {
  return (
    <div 
      className={`relative flex items-center justify-center overflow-hidden rounded-2xl ${className}`}
      style={{
        width: '280px',
        height: '420px',
        background: 'radial-gradient(circle at center, #1a1510, #0c0a05)',
        border: '4px solid #d4af37',
        boxShadow: 'inset 0 0 40px rgba(212, 175, 55, 0.15), 0 0 40px rgba(212, 175, 55, 0.3), 0 10px 30px rgba(0, 0, 0, 0.5)'
      }}
    >
      {/* Logo */}
      <img 
        src="/cromos/logoBlackversion2.png" 
        alt="Manager Vintage FC" 
        className="relative z-10 cromo-back-logo"
        style={{
          width: '200px',
          height: 'auto',
          filter: 'drop-shadow(0 0 20px rgba(212, 175, 55, 0.7))',
          animation: 'pulse 2s ease-in-out infinite'
        }}
      />
      
      {/* Brillo animado de fondo */}
      <div 
        className="absolute cromo-back-shine"
        style={{
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'linear-gradient(45deg, transparent 30%, rgba(212, 175, 55, 0.08) 50%, transparent 70%)',
          animation: 'shine 4s infinite',
          zIndex: 1
        }}
      />
      
      {/* Degradado superior */}
      <div 
        className="absolute top-0 left-0 right-0"
        style={{
          height: '60px',
          background: 'linear-gradient(to bottom, rgba(212, 175, 55, 0.15), transparent)',
          zIndex: 0
        }}
      />
      
      {/* Degradado inferior */}
      <div 
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: '60px',
          background: 'linear-gradient(to top, rgba(212, 175, 55, 0.15), transparent)',
          zIndex: 0
        }}
      />

      {/* Estilos de animaciones */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            filter: drop-shadow(0 0 20px rgba(212, 175, 55, 0.7));
          }
          50% {
            filter: drop-shadow(0 0 30px rgba(212, 175, 55, 0.9));
          }
        }

        @keyframes shine {
          0%, 100% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          50% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
          }
        }

        @media (max-width: 768px) {
          .cromo-back-logo {
            width: 160px !important;
          }
        }
      `}</style>
    </div>
  );
}
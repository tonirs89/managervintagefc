// src/components/SobreCerrado.jsx

export default function SobreCerrado({ onClick, disabled = false, className = "" }) {
  return (
    <div 
      onClick={!disabled ? onClick : null}
      className={`relative cursor-pointer select-none ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      style={{
        width: '280px',
        height: '380px',
        animation: disabled ? 'none' : 'bounce 2s ease-in-out infinite'
      }}
    >
      {/* Sobre principal */}
      <div 
        className="relative w-full h-full rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105"
        style={{
          background: 'linear-gradient(135deg, #ffd700 0%, #d4af37 50%, #b8860b 100%)',
          border: '4px solid #8b6914',
          boxShadow: '0 10px 40px rgba(212, 175, 55, 0.6), inset 0 0 30px rgba(255, 255, 255, 0.2)'
        }}
      >
        {/* Brillo superior */}
        <div 
          className="absolute top-0 left-0 right-0 h-20"
          style={{
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.4), transparent)'
          }}
        />

        {/* Contenido del sobre */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
          {/* Logo */}
          <img 
            src="/cromos/logoBlackversion2.png" 
            alt="Manager Vintage FC" 
            className="w-50 h-auto mb-4 opacity-80"
            style={{
              filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3))'
            }}
          />

          {/* Call to action */}
          {!disabled && (
            <div 
              className="mt-6 px-6 py-2 rounded-full font-bold text-sm"
              style={{
                background: 'rgba(0, 0, 0, 0.2)',
                color: '#ffd700',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
              }}
            >
              TOCA PARA ABRIR
            </div>
          )}
        </div>

        {/* Detalles decorativos - Esquinas */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 rounded-tl-lg" style={{ borderColor: '#8b6914', opacity: 0.5 }} />
        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 rounded-tr-lg" style={{ borderColor: '#8b6914', opacity: 0.5 }} />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 rounded-bl-lg" style={{ borderColor: '#8b6914', opacity: 0.5 }} />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 rounded-br-lg" style={{ borderColor: '#8b6914', opacity: 0.5 }} />

        {/* Brillo animado */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.4) 50%, transparent 70%)',
            animation: 'shine 3s infinite'
          }}
        />
      </div>

      {/* Partículas flotantes alrededor 
      <div className="absolute -top-2 -right-2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
      <div className="absolute -top-4 left-1/4 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 -right-3 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
*/}
      {/* Estilos de animaciones */}
      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(-2deg);
          }
          75% {
            transform: translateY(-5px) rotate(2deg);
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
      `}</style>
    </div>
  );
}
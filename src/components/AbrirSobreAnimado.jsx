// src/components/AbrirSobreAnimado.jsx

import { useState } from 'react';
import SobreCerrado from './SobreCerrado';
import CromoCardBack from './CromoCardBack';
import { RAREZA_STYLES } from '../data/jugadores';
import { X } from 'lucide-react';

export default function AbrirSobreAnimado({ cromo, onClose, onContinue }) {
  const [fase, setFase] = useState('sobre'); // sobre, explosion, dorso, flip, revelado

  // ============================================
  // MANEJAR CLICK EN SOBRE
  // ============================================
  const handleSobreClick = () => {
  setFase('explosion');
  
  // Después de la explosión, mostrar dorso
  setTimeout(() => {
    setFase('dorso');
  }, 1000);
  
  // Después del dorso, hacer flip
  setTimeout(() => {
    setFase('flip');
  }, 2400);  // 1000 + 1400 = 2400ms
  
  // Después del flip, mostrar revelado (AQUÍ ES EL CAMBIO)
  setTimeout(() => {
    setFase('revelado');
  }, 4400);  // 800 + 1000 + 600 + 2000 = 4400ms (2 segundos más)
};

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
      
      {/* Botón cerrar (solo en fase revelado) */}
      {fase === 'revelado' && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 transition"
        >
          <X size={24} />
        </button>
      )}

      {/* ============================================ */}
      {/* FASE 1: SOBRE CERRADO */}
      {/* ============================================ */}
      {fase === 'sobre' && (
        <div className="animate-fadeIn">
          <SobreCerrado onClick={handleSobreClick} />
        </div>
      )}

      {/* ============================================ */}
      {/* FASE 2: EXPLOSIÓN */}
      {/* ============================================ */}
      {fase === 'explosion' && (
        <div className="relative">
          {/* Flash de luz */}
          <div className="absolute inset-0 bg-white animate-flash rounded-full blur-3xl" 
               style={{ width: '400px', height: '400px' }} />
          
          {/* Partículas */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-yellow-400 rounded-full animate-particle"
              style={{
                left: '50%',
                top: '50%',
                '--tx': `${Math.cos(i * 18 * Math.PI / 180) * 200}px`,
                '--ty': `${Math.sin(i * 18 * Math.PI / 180) * 200}px`,
                animationDelay: `${i * 0.05}s`
              }}
            />
          ))}
        </div>
      )}

      {/* ============================================ */}
      {/* FASE 3: DORSO GIRANDO */}
      {/* ============================================ */}
      {fase === 'dorso' && (
        <div 
          className="animate-fadeIn"
          style={{
            filter: 'blur(10px)',
            animation: 'fadeInBlur 1s ease-out forwards'
          }}
        >
          <div style={{ 
            animation: 'spin3D 1s ease-out',
            transformStyle: 'preserve-3d'
          }}>
            <CromoCardBack />
          </div>
        </div>
      )}

      {/* ============================================ */}
{/* FASE 4: FLIP (Dorso → Frontal) */}
{/* ============================================ */}
{fase === 'flip' && (
  <div 
    className="relative"
    style={{
      width: '280px',
      height: '420px',
      transformStyle: 'preserve-3d',
      animation: 'flip 0.6s ease-in-out forwards'
    }}
  >
    {/* Dorso (se va) */}
    <div 
      className="absolute inset-0"
      style={{
        backfaceVisibility: 'hidden',
        transform: 'rotateY(0deg)'
      }}
    >
      <CromoCardBack />
    </div>

    {/* Frontal (aparece) - MISMO TAMAÑO QUE EL DORSO */}
    <div 
  className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black rounded-2xl border-4 flex items-center justify-center overflow-hidden"
  style={{
    /* 
    backfaceVisibility: 'hidden',
    transform: 'rotateY(180deg)',
    borderColor: RAREZA_STYLES[cromo.rareza].bg.replace('bg-', '#'),
    width: '280px',
    height: '420px',
    padding: '20px' */
  }}
>
  <img 
    src={cromo.imagen} 
    alt={cromo.nombre}
    className="w-full h-full object-cover"  // ← Cambiar a object-cover
    style={{
      imageRendering: 'pixelated'  // ← Para mantener el look pixel art
    }}
  />
</div>
  </div>
)}

      {/* ============================================ */}
      {/* FASE 5: REVELADO FINAL */}
      {/* ============================================ */}
      {fase === 'revelado' && (
        <div className="animate-fadeIn max-w-md w-full">
          <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl border-4 shadow-2xl overflow-hidden"
               style={{ borderColor: RAREZA_STYLES[cromo.rareza].bg.replace('bg-', '#') }}>
            
            {/* Header según rareza */}
            <div className={`${RAREZA_STYLES[cromo.rareza].bg} p-4 text-center`}>
              <p className="text-white font-bold text-2xl">
                {RAREZA_STYLES[cromo.rareza].emoji} ¡{cromo.esDuplicado ? 'DUPLICADO' : 'NUEVO'}!
              </p>
              {cromo.esDuplicado && (
                <p className="text-yellow-300 text-lg font-semibold mt-1">
                  +{cromo.puntosGanados} puntos 💰
                </p>
              )}
            </div>

            {/* Contenido */}
            <div className="p-6 text-center">
              {/* Rareza */}
              <div className="mb-4">
                <div className={`inline-block ${RAREZA_STYLES[cromo.rareza].bg} text-white text-sm font-bold px-4 py-2 rounded-full`}>
                  {RAREZA_STYLES[cromo.rareza].emoji} {RAREZA_STYLES[cromo.rareza].nombre}
                </div>
              </div>

              {/* Nombre */}
              <h2 className={`text-3xl font-bold ${RAREZA_STYLES[cromo.rareza].color} mb-2`}>
                {cromo.nombre}
              </h2>
              <p className="text-xl text-gray-300 mb-4">{cromo.apodo}</p>

              {/* Imagen */}
              <div className="bg-gradient-to-b from-sky-400 to-sky-600 rounded-xl p-4 mb-4">
                <img 
                  src={cromo.imagen} 
                  alt={cromo.nombre}
                  className="w-full max-w-xs mx-auto"
                />
              </div>

              {/* Info básica */}
              <div className="space-y-2 mb-6">
                <div className="bg-gray-800 p-3 rounded-lg">
                  <p className="text-gray-400 text-sm">Posición</p>
                  <p className="text-white font-bold">{cromo.posicion}</p>
                </div>

                {cromo.mundiales > 0 && (
                  <div className="bg-yellow-900/30 p-3 rounded-lg">
                    <p className="text-yellow-400 font-bold">
                      🏆 {cromo.mundiales} {cromo.mundiales > 1 ? 'Mundiales' : 'Mundial'}
                    </p>
                  </div>
                )}
              </div>

              {/* Botón continuar */}
              <button
                onClick={onContinue}
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-lg transition"
              >
                Continuar
              </button>
            </div>
          </div>

          {/* Confeti si es legendaria */}
          {cromo.rareza === 'legendaria' && (
            <div className="fixed inset-0 pointer-events-none">
              {[...Array(50)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-confetti"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* ============================================ */}
      {/* ANIMACIONES CSS */}
      {/* ============================================ */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes flash {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
          100% {
            opacity: 0;
            transform: scale(2);
          }
        }

        @keyframes particle {
          0% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(var(--tx), var(--ty)) scale(0);
          }
        }

        @keyframes fadeInBlur {
          0% {
            opacity: 0;
            filter: blur(20px);
            transform: scale(0.5);
          }
          100% {
            opacity: 1;
            filter: blur(0px);
            transform: scale(1);
          }
        }

        @keyframes spin3D {
          0% {
            transform: rotateY(90deg) scale(0.5);
            opacity: 0;
          }
          100% {
            transform: rotateY(0deg) scale(1);
            opacity: 1;
          }
        }

        @keyframes flip {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(180deg);
  }
}

        @keyframes confetti {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        .animate-flash {
          animation: flash 0.8s ease-out;
        }

        .animate-particle {
          animation: particle 1s ease-out forwards;
        }

        .animate-confetti {
          animation: confetti 3s linear infinite;
        }
      `}</style>
    </div>
  );
}
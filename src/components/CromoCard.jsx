import React from "react";
import { Lock } from "lucide-react";
import { RAREZA_STYLES } from "../data/jugadores";

const CromoCard = ({ cromo, cantidad = 0, onClick }) => {
  const rareza = RAREZA_STYLES[cromo.rareza];
  const desbloqueado = cantidad > 0;

  if (!desbloqueado) {
    return (
      <div className="w-[160px] h-[240px] sm:w-[180px] sm:h-[270px] md:w-[200px] md:h-[300px] rounded-xl bg-gray-900 border-4 border-gray-600 flex flex-col items-center justify-center opacity-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
        <Lock className="text-gray-500 w-12 h-12 md:w-16 md:h-16 mb-3 relative z-10" />
        <p className="text-gray-500 text-xs md:text-sm font-bold relative z-10">BLOQUEADO</p>
        <p className="text-gray-600 text-xs mt-1 relative z-10">???</p>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className={`relative w-[160px] h-[240px] sm:w-[180px] sm:h-[270px] md:w-[200px] md:h-[300px] rounded-xl overflow-hidden shadow-lg border-4 transition-all duration-300 cursor-pointer hover:scale-105
        ${rareza.border} ${rareza.glow}`}
    >
      {/* Badge de rareza */}
      <div className={`absolute top-2 right-2 ${rareza.bg} text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded-full z-10 flex items-center gap-1`}>
        <span>{rareza.emoji}</span>
        <span className="hidden sm:inline">{rareza.nombre}</span>
      </div>

      {/* Badge de cantidad si es duplicado */}
      {cantidad > 1 && (
        <div className="absolute top-2 left-2 bg-red-600 text-white text-xs md:text-sm font-bold px-2 py-1 rounded-full z-10 animate-pulse">
          x{cantidad}
        </div>
      )}

      {/* Imagen del cromo */}
      <div className="relative w-full h-full">
        <img
          src={cromo.imagen}
          alt={cromo.nombre}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.innerHTML = `
              <div class="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center p-3">
                <div class="text-center">
                  <p class="text-3xl mb-2">${rareza.emoji}</p>
                  <p class="${rareza.color} text-base md:text-xl font-bold mb-1">${cromo.nombre}</p>
                  <p class="text-gray-400 text-xs md:text-sm">${cromo.posicion}</p>
                  <p class="text-gray-500 text-xs mt-2">${cromo.nacionalidad}</p>
                </div>
              </div>
            `;
          }}
        />

        {/* Overlay con info del jugador */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/95 to-transparent p-2 md:p-3">
          <p className={`text-center text-sm md:text-lg font-bold ${rareza.color}`}>
            {cromo.nombre}
          </p>
          <p className="text-center text-gray-300 text-[10px] md:text-xs">{cromo.apodo}</p>
        </div>
      </div>
    </div>
  );
};

export default CromoCard;
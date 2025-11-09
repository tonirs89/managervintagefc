// src/pages/Header.jsx

import { Package, Coins, Calendar } from "lucide-react";
import Logo from "../components/Logo";

export default function Header({ usuario, onLogout, sobres, puntos, progreso, onQuizClick, puedeHacerQuiz }) {
  return (
    <header className="w-full bg-[#090702] shadow-lg fixed top-0 left-0 z-50 border-b-4 border-yellow-400">
      <div className="flex items-center justify-between px-4 md:px-8 py-3 md:py-4 bg-[#090702]">
        
        {/* IZQUIERDA: Sobres y Quiz */}
        <div className="flex items-center gap-2">
          {/* Contador de sobres */}
          <div className="flex items-center gap-2 bg-gray-900 px-3 py-2 rounded-lg border-2 border-yellow-500 shadow-md">
            <Package className="text-yellow-400" size={20} />
            <span className="text-yellow-400 font-bold text-lg">{sobres}</span>
          </div>

          {/* Botón Quiz Diario */}
          <button
            onClick={onQuizClick}
            disabled={!puedeHacerQuiz}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg font-bold text-sm transition-all ${
              puedeHacerQuiz
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:scale-105 animate-pulse'
                : 'bg-gray-700 text-gray-500 cursor-not-allowed'
            }`}
            style={{ 
              WebkitTapHighlightColor: 'transparent',
              touchAction: 'manipulation'
            }}
          >
            <Calendar size={18} />
            <span className="hidden sm:inline">Quiz</span>
          </button>
        </div>

        {/* CENTRO: Logo */}
        <div className="flex-1 flex justify-center">
          <Logo className="w-32 md:w-48" />
        </div>

        {/* DERECHA: Usuario y Puntos */}
        <div className="flex flex-col items-end gap-2">
          {/* Contador de puntos */}
          <div className="flex items-center gap-2 bg-gray-900 px-3 py-1 rounded-lg border-2 border-yellow-500 shadow-md">
            <Coins className="text-yellow-400" size={18} />
            <span className="text-yellow-400 font-bold text-sm">{puntos}</span>
          </div>

          {/* Usuario y botón logout */}
          <div className="flex items-center gap-2">
            <span className="text-white text-sm font-semibold hidden md:block">
              👤 {usuario}
            </span>
            <button
              onClick={onLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg text-xs font-semibold transition"
            >
              Salir
            </button>
          </div>
        </div>
      </div>

      {/* BARRA DE PROGRESO */}
      {progreso !== undefined && (
        <div className="bg-gray-900 px-4 md:px-8 py-3">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-xs md:text-sm">Colección completada</span>
              <span className="text-yellow-400 text-sm md:text-base font-bold">{progreso}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-yellow-500 to-orange-500 h-full transition-all duration-500"
                style={{ width: `${progreso}%` }}
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
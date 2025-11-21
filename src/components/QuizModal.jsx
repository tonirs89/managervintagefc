// src/components/QuizModal.jsx

import { useState } from "react";
import { X, CheckCircle, XCircle, Trophy, Package } from "lucide-react";
import { calcularSobresGanados } from "../data/preguntas";
import CuentaAtras from "./CuentaAtras";

export default function QuizModal({ preguntas, onComplete, onClose }) {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);
  const [correctas, setCorrectas] = useState(0);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [mostrarFinal, setMostrarFinal] = useState(false);

  

  // Verificar que tenemos preguntas
  if (!preguntas || preguntas.length === 0) {
    return (
      <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
        <div className="bg-gray-900 p-6 rounded-xl text-white text-center">
          <p className="text-xl mb-4">Error al cargar preguntas</p>
          <button
            onClick={onClose}
            className="bg-red-600 px-6 py-2 rounded-lg"
          >
            Cerrar
          </button>
        </div>
      </div>
    );
  }

  const pregunta = preguntas[preguntaActual];

  // ============================================
  // MANEJAR SELECCIÓN DE RESPUESTA
  // ============================================
  const handleRespuesta = (index) => {
    setRespuestaSeleccionada(index);
    setMostrarResultado(true);

    // Contar si es correcta (CORREGIDO: usar respuestaCorrecta)
    if (index === pregunta.respuestaCorrecta) {
      setCorrectas(correctas + 1);
    }

    // Esperar 1.5s y pasar a la siguiente pregunta
    setTimeout(() => {
      if (preguntaActual < 4) {
        // Siguiente pregunta
        setPreguntaActual(preguntaActual + 1);
        setRespuestaSeleccionada(null);
        setMostrarResultado(false);
      } else {
        // Quiz terminado
        setMostrarFinal(true);
      }
    }, 1500);
  };

  //AGOTA EL TIEMPO DE RESPUESTA
  const manejarTiempoAgotado = () => {
    if (preguntaActual === 4) {
        // Quiz terminado
        setMostrarFinal(true);
    } else {
    setRespuestaSeleccionada(null);
    setPreguntaActual(preguntaActual + 1);
    }
  }

  // ============================================
  // FINALIZAR QUIZ
  // ============================================
  const finalizarQuiz = () => {
    const sobresGanados = calcularSobresGanados(correctas);
    onComplete(sobresGanados, correctas);
  };

  // ============================================
  // PANTALLA FINAL
  // ============================================
  if (mostrarFinal) {
    const sobresGanados = calcularSobresGanados(correctas);

    return (
      <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 overflow-y-auto">
        <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl max-w-md w-full border-4 border-yellow-500 shadow-2xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-6 text-center">
            <Trophy className="text-black mx-auto mb-3" size={48} />
            <h2 className="text-3xl font-bold text-black">¡Quiz Completado!</h2>
          </div>

          {/* Contenido */}
          <div className="p-6 text-center">
            {/* Resultado */}
            <div className="bg-gray-800 p-6 rounded-lg mb-6">
              <p className="text-gray-400 text-sm mb-2">Respuestas correctas</p>
              <p className="text-5xl font-bold text-yellow-400 mb-4">
                {correctas} / 5
              </p>
              
              {/* Mensaje según resultado */}
              {correctas === 5 && (
                <p className="text-green-400 font-semibold">¡PERFECTO! 🎉</p>
              )}
              {correctas === 4 && (
                <p className="text-green-400 font-semibold">¡Excelente! 👏</p>
              )}
              {correctas === 3 && (
                <p className="text-blue-400 font-semibold">¡Bien hecho! 👍</p>
              )}
              {correctas === 2 && (
                <p className="text-yellow-400 font-semibold">No está mal 😊</p>
              )}
              {correctas === 1 && (
                <p className="text-orange-400 font-semibold">Sigue intentando 💪</p>
              )}
              {correctas === 0 && (
                <p className="text-red-400 font-semibold">Mañana será mejor 🙏</p>
              )}
            </div>

            {/* Sobres ganados */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-lg mb-6">
              <Package className="text-white mx-auto mb-3" size={40} />
              <p className="text-white text-lg mb-2">Has ganado</p>
              <p className="text-4xl font-bold text-white">
                {sobresGanados} {sobresGanados === 1 ? 'Sobre' : 'Sobres'}
              </p>
            </div>

            {/* Información */}
            <div className="bg-gray-800 p-4 rounded-lg mb-6">
              <p className="text-gray-400 text-sm">
                💡 Vuelve mañana para intentar el quiz de nuevo y ganar más sobres
              </p>
            </div>

            {/* Botón */}
            <button
              onClick={finalizarQuiz}
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold py-4 rounded-lg text-lg transition transform hover:scale-105"
            >
              ¡Reclamar Sobres!
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ============================================
  // PANTALLA DE PREGUNTA
  // ============================================
  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl max-w-md w-full border-4 border-yellow-500 shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Trophy className="text-black" size={24} />
            <div>
              <p className="text-black font-bold text-lg">Quiz Diario</p>
              <p className="text-black text-sm">Pregunta {preguntaActual + 1}/5</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-black hover:text-gray-700 transition"
          >
            <X size={28} />
          </button>
        </div>

        {/* Progreso */}
        <div className="bg-gray-800 px-4 py-2">
          <div className="flex gap-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`flex-1 h-2 rounded-full transition-all duration-300 ${
                  i < preguntaActual
                    ? 'bg-green-500'
                    : i === preguntaActual
                    ? 'bg-yellow-500'
                    : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Contenido */}
        <div className="p-6">
          {/* Pregunta */}
          
          <h3 className="text-white text-xl md:text-2xl font-bold mb-1 leading-tight">
            {pregunta.pregunta}
          </h3>
          <h2 class="text-right text-yellow-500 text-xl mb-3" >
          <CuentaAtras preguntaActual={preguntaActual} manejarTiempoAgotado={manejarTiempoAgotado} /></h2> {/*añado contador */}

          {/* Respuestas (CORREGIDO: usar opciones) */}
          <div className="space-y-3">
            {pregunta.opciones.map((respuesta, index) => {
              let estilo = "bg-gray-700 hover:bg-gray-600 text-white";

              if (mostrarResultado) {
                // CORREGIDO: usar respuestaCorrecta
                if (index === pregunta.respuestaCorrecta) {
                  estilo = "bg-green-600 text-white";
                } else if (index === respuestaSeleccionada && index !== pregunta.respuestaCorrecta) {
                  estilo = "bg-red-600 text-white";
                } else {
                  estilo = "bg-gray-700 text-gray-400";
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => !mostrarResultado && handleRespuesta(index)}
                  disabled={mostrarResultado}
                  className={`w-full p-4 rounded-lg font-semibold transition-all duration-300 text-left flex items-center justify-between ${estilo} ${
                    !mostrarResultado ? 'cursor-pointer active:scale-95' : 'cursor-default'
                  }`}
                  style={{ 
                    WebkitTapHighlightColor: 'transparent',
                    touchAction: 'manipulation'
                  }}
                >
                  <span>{respuesta}</span>
                  {mostrarResultado && index === pregunta.respuestaCorrecta && (
                    <CheckCircle className="text-white" size={24} />
                  )}
                  {mostrarResultado && index === respuestaSeleccionada && index !== pregunta.respuestaCorrecta && (
                    <XCircle className="text-white" size={24} />
                  )}
                </button>
              );
            })}
          </div>

          {/* Contador de correctas */}
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              Correctas: <span className="text-yellow-400 font-bold">{correctas}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
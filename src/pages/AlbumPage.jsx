// src/pages/AlbumPage.jsx

import { useState, useEffect } from "react";
import CromoCard from "../components/CromoCard";
import { JUGADORES, obtenerCromoAleatorio, PUNTOS_DUPLICADO, RAREZA_STYLES, obtenerEstadisticas } from "../data/jugadores";
import { Package, Coins, Trophy, TrendingUp, Brain, X, ChevronLeft, ChevronRight } from "lucide-react";
import SobreCerrado from '../components/SobreCerrado';

import AbrirSobreAnimado from '../components/AbrirSobreAnimado';

export default function AlbumPage({ usuario, sobres, setSobres, puntos, setPuntos, onProgresoChange }) {
  // Estado de la colección: { jugadorId: cantidad }
  const [coleccion, setColeccion] = useState({});
  
  // Estados de UI
  const [cargado, setCargado] = useState(false);
  const [abriendoSobre, setAbriendoSobre] = useState(false);
  const [cromoNuevo, setCromoNuevo] = useState(null);
  const [cromoSeleccionado, setCromoSeleccionado] = useState(null);
  const [mostrarEstadisticas, setMostrarEstadisticas] = useState(false);
  const [vistaAmpliada, setVistaAmpliada] = useState(false); // NUEVO: para ver cromo en grande
  const [mostrarAnimacion, setMostrarAnimacion] = useState(false);

  // ============================================
  // CARGAR PROGRESO DEL USUARIO (solo una vez)
  // ============================================
 useEffect(() => {
  if (!usuario) return;
  
  const datosGuardados = localStorage.getItem(`album_${usuario}`);
  const ultimoLogin = localStorage.getItem(`ultimoLogin_${usuario}`);
  const hoy = new Date().toDateString();
  
  if (datosGuardados) {
    try {
      const datos = JSON.parse(datosGuardados);
      setColeccion(datos.coleccion || {});
      setPuntos(datos.puntos || 0);
      
      // Dar sobre diario solo si es un nuevo día
      if (ultimoLogin !== hoy) {
        setSobres((datos.sobres || 0) + 1); // +1 sobre por login diario
        localStorage.setItem(`ultimoLogin_${usuario}`, hoy);
      } else {
        setSobres(datos.sobres || 0); // Mismo día, no dar sobres
      }
    } catch (error) {
      console.error("Error cargando progreso:", error);
    }
  } else {
    // Usuario nuevo: dar 3 sobres iniciales
    setSobres(3);
    localStorage.setItem(`ultimoLogin_${usuario}`, hoy);
  }
  
  setCargado(true);
}, [usuario]);

  // ============================================
  // GUARDAR PROGRESO (cada vez que cambia algo)
  // ============================================
  useEffect(() => {
    if (!cargado || !usuario) return;
    
    localStorage.setItem(`album_${usuario}`, JSON.stringify({
      coleccion,
      sobres,
      puntos
    }));

    // Notificar progreso al componente padre
    const stats = obtenerEstadisticas(coleccion);
    onProgresoChange && onProgresoChange(stats.progreso);
  }, [coleccion, sobres, puntos, usuario, cargado]);

  // ============================================
  // FUNCIÓN: ABRIR SOBRE
  // ============================================
  const abrirSobre = () => {
  if (sobres <= 0) {
    alert("❌ No tienes sobres disponibles...");
    return;
  }

  // Obtener cromo aleatorio
  const cromo = obtenerCromoAleatorio();
  
  // Actualizar colección
  const nuevaColeccion = { ...coleccion };
  const cantidadActual = nuevaColeccion[cromo.id] || 0;
  nuevaColeccion[cromo.id] = cantidadActual + 1;
  
  // Si es duplicado, dar puntos
  let puntosGanados = 0;
  if (cantidadActual > 0) {
    puntosGanados = PUNTOS_DUPLICADO[cromo.rareza];
    setPuntos(puntos + puntosGanados);
  }
  
  // Actualizar estados
  setColeccion(nuevaColeccion);
  setSobres(sobres - 1);
  setCromoNuevo({ 
    ...cromo, 
    esDuplicado: cantidadActual > 0,
    puntosGanados 
  });
  
  // MOSTRAR ANIMACIÓN en lugar de setAbriendoSobre
  setMostrarAnimacion(true);
};

  // ============================================
  // FUNCIÓN: COMPRAR SOBRE CON PUNTOS
  // ============================================
  const comprarSobre = () => {
    const COSTE_SOBRE = 500;
    
    if (puntos < COSTE_SOBRE) {
      alert(`❌ Necesitas ${COSTE_SOBRE} puntos. Te faltan ${COSTE_SOBRE - puntos} puntos.`);
      return;
    }
    
    setPuntos(puntos - COSTE_SOBRE);
    setSobres(sobres + 1);
    alert("✅ ¡Sobre comprado! Ya puedes abrirlo.");
  };

  // ============================================
  // FUNCIÓN: NAVEGAR ENTRE CROMOS EN VISTA AMPLIADA
  // ============================================
  const navegarCromo = (direccion) => {
    const jugadoresConCromo = JUGADORES.filter(j => coleccion[j.id] > 0);
    const indiceActual = jugadoresConCromo.findIndex(j => j.id === cromoSeleccionado.id);
    
    let nuevoIndice;
    if (direccion === 'next') {
      nuevoIndice = (indiceActual + 1) % jugadoresConCromo.length;
    } else {
      nuevoIndice = indiceActual - 1 < 0 ? jugadoresConCromo.length - 1 : indiceActual - 1;
    }
    
    setCromoSeleccionado(jugadoresConCromo[nuevoIndice]);
  };

  // ============================================
  // FUNCIÓN: ABRIR VISTA AMPLIADA
  // ============================================
  const abrirVistaAmpliada = (jugador) => {
    if (coleccion[jugador.id]) {
      setCromoSeleccionado(jugador);
      setVistaAmpliada(true);
    }
  };

  // ============================================
  // PANTALLA DE CARGA
  // ============================================
  if (!cargado) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#090702] text-yellow-400">
        <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-xl font-semibold animate-pulse">Cargando álbum...</p>
      </div>
    );
  }

  // Obtener estadísticas
  const stats = obtenerEstadisticas(coleccion);

  // ============================================
  // RENDER PRINCIPAL
  // ============================================
  return (
    <div className="min-h-screen pt-[200px] md:pt-48 pb-12 max-w-[1400px] mx-auto px-3 md:px-8">
      
      {/* CONTROLES SUPERIORES - MEJORADOS PARA MOBILE */}
      <div className="grid grid-cols-3 gap-2 md:flex md:gap-4 md:justify-center mb-4">
        {/* Botón abrir sobre */}
        <button
          onClick={abrirSobre}
          disabled={sobres === 0}
          className={`flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 px-3 md:px-6 py-2 md:py-3 rounded-lg font-bold text-sm md:text-lg transition-all duration-300 transform hover:scale-105 
            ${sobres > 0 
              ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black shadow-lg hover:shadow-yellow-500/50' 
              : 'bg-gray-600 text-gray-400 cursor-not-allowed'}`}
        >
          <Package size={20} className="md:w-6 md:h-6" />
          <span className="text-xs md:text-base">
            Abrir {sobres > 0 && `(${sobres})`}
          </span>
        </button>

        {/* Botón comprar sobre */}
        <button
          onClick={comprarSobre}
          className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 bg-purple-600 hover:bg-purple-700 text-white px-3 md:px-6 py-2 md:py-3 rounded-lg font-bold text-sm md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          <Coins size={20} className="md:w-6 md:h-6" />
          <span className="text-xs md:text-base">Comprar</span>
        </button>

        {/* Botón estadísticas */}
        <button
          onClick={() => setMostrarEstadisticas(true)}
          className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 md:px-6 py-2 md:py-3 rounded-lg font-bold text-sm md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          <TrendingUp size={20} className="md:w-6 md:h-6" />
          <span className="text-xs md:text-base">Stats</span>
        </button>
      </div>

      {/* INDICADOR DE PROGRESO RÁPIDO */}
      <div className="bg-gray-900 rounded-xl p-4 mb-8 border-2 border-yellow-500">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className="text-yellow-400" size={24} />
            <span className="text-white font-semibold text-sm md:text-base">
              {stats.unicos} / {stats.total} jugadores únicos
            </span>
          </div>
          <span className="text-yellow-400 font-bold text-xl">{stats.progreso}%</span>
        </div>
      </div>

      {/* ANIMACIÓN "ABRIENDO SOBRE..." */}
      {abriendoSobre && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/90 z-50">
          <div className="text-center">
            <div className="w-24 h-24 border-8 border-yellow-400 border-t-transparent rounded-full animate-spin mb-4 mx-auto"></div>
            <p className="text-3xl font-bold text-yellow-400 animate-pulse">
              Abriendo sobre...
            </p>
          </div>
        </div>
      )}

      {/* CUADRÍCULA DE CROMOS */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 justify-items-center mt-8">
        {JUGADORES.map((jugador) => (
          <CromoCard
            key={jugador.id}
            cromo={jugador}
            cantidad={coleccion[jugador.id] || 0}
            onClick={() => abrirVistaAmpliada(jugador)}
          />
        ))}
      </div>

              {/* REEMPLAZAR el modal de "CROMO NUEVO" por esto: */}

{mostrarAnimacion && cromoNuevo && (
  <AbrirSobreAnimado
    cromo={cromoNuevo}
    onClose={() => {
      setMostrarAnimacion(false);
      setCromoNuevo(null);
    }}
    onContinue={() => {
      setMostrarAnimacion(false);
      setCromoNuevo(null);
    }}
  />
)}

            

      {/* MODAL: DETALLE COMPLETO DE CROMO (versión antigua, se abre desde vista ampliada) */}
      {cromoSeleccionado && !vistaAmpliada && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/90 z-50 p-4">
          <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl max-w-md w-full border-4 border-yellow-500 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div className={`${RAREZA_STYLES[cromoSeleccionado.rareza].bg} text-white text-sm font-bold px-4 py-2 rounded-full`}>
                  {RAREZA_STYLES[cromoSeleccionado.rareza].emoji} {RAREZA_STYLES[cromoSeleccionado.rareza].nombre}
                </div>
                <span className="text-gray-400 text-sm">
                  Tienes: <span className="text-yellow-400 font-bold">x{coleccion[cromoSeleccionado.id]}</span>
                </span>
              </div>

              <h2 className={`text-3xl font-bold ${RAREZA_STYLES[cromoSeleccionado.rareza].color} mb-2 text-center`}>
                {cromoSeleccionado.nombre}
              </h2>
              <p className="text-xl text-gray-300 mb-4 text-center">{cromoSeleccionado.apodo}</p>

              <div className="space-y-3 mb-6">
                <div className="bg-gray-800 p-3 rounded-lg">
                  <p className="text-gray-400 text-sm">Posición</p>
                  <p className="text-white font-bold">{cromoSeleccionado.posicion}</p>
                </div>

                <div className="bg-gray-800 p-3 rounded-lg">
                  <p className="text-gray-400 text-sm">Nacionalidad</p>
                  <p className="text-white font-bold text-lg">{cromoSeleccionado.nacionalidad}</p>
                </div>

                <div className="bg-gray-800 p-3 rounded-lg">
                  <p className="text-gray-400 text-sm">Equipos</p>
                  <p className="text-white text-sm">{cromoSeleccionado.equipos.join(" • ")}</p>
                </div>

                {cromoSeleccionado.mundiales > 0 && (
                  <div className="bg-yellow-900/30 p-3 rounded-lg">
                    <p className="text-yellow-400 font-bold flex items-center gap-2">
                      <Trophy size={18} />
                      {cromoSeleccionado.mundiales} {cromoSeleccionado.mundiales > 1 ? 'Mundiales' : 'Mundial'}
                    </p>
                  </div>
                )}

                <div className="bg-gray-800 p-3 rounded-lg">
                  <p className="text-gray-400 text-sm">Logro destacado</p>
                  <p className="text-white text-sm">{cromoSeleccionado.logro}</p>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => {
                    setVistaAmpliada(true);
                  }}
                  className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-lg transition"
                >
                  Volver
                </button>
                <button
                  onClick={() => setCromoSeleccionado(null)}
                  className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 rounded-lg transition"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: ESTADÍSTICAS */}
      {mostrarEstadisticas && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/90 z-50 p-4">
          <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl max-w-2xl w-full border-4 border-yellow-500 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            <div className="bg-yellow-500 p-4 text-center">
              <p className="text-black font-bold text-2xl">📊 Estadísticas</p>
            </div>

            <div className="p-6">
              {/* Progreso general */}
              <div className="bg-gray-800 p-6 rounded-lg mb-6 text-center">
                <p className="text-gray-400 mb-2">Progreso Total</p>
                <p className="text-5xl font-bold text-yellow-400 mb-2">{stats.progreso}%</p>
                <p className="text-white text-lg">
                  {stats.unicos} / {stats.total} jugadores únicos
                </p>
              </div>

              {/* Por rareza */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(stats.porRareza).map(([rareza, datos]) => (
                  <div key={rareza} className="bg-gray-800 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{RAREZA_STYLES[rareza].emoji}</span>
                      <span className={`font-bold text-sm ${RAREZA_STYLES[rareza].color}`}>
                        {RAREZA_STYLES[rareza].nombre}
                      </span>
                    </div>
                    <p className="text-white text-xl font-bold">
                      {datos.tengo} / {datos.total}
                    </p>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                      <div 
                        className={`${RAREZA_STYLES[rareza].bg} h-full rounded-full transition-all`}
                        style={{ width: `${(datos.tengo / datos.total) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Recursos actuales */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800 p-4 rounded-lg text-center">
                  <Package className="text-yellow-400 mx-auto mb-2" size={32} />
                  <p className="text-gray-400 text-sm">Sobres</p>
                  <p className="text-yellow-400 text-3xl font-bold">{sobres}</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg text-center">
                  <Coins className="text-yellow-400 mx-auto mb-2" size={32} />
                  <p className="text-gray-400 text-sm">Puntos</p>
                  <p className="text-yellow-400 text-3xl font-bold">{puntos}</p>
                </div>
              </div>

              <button
                onClick={() => setMostrarEstadisticas(false)}
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-lg transition"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
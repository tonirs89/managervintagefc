// src/data/jugadores.js

// ========================================
// 🎮 BASE DE DATOS DE JUGADORES LEYENDA
// ========================================
// Sistema de rareza:
// - LEGENDARIA: 5% probabilidad (5 jugadores)
// - ÉPICA: 15% probabilidad (10 jugadores)
// - RARA: 30% probabilidad (15 jugadores)
// - COMÚN: 50% probabilidad (25 jugadores)
// ========================================

export const JUGADORES = [
  // ========================================
  // 🏆 LEGENDARIAS (5 jugadores - 5%)
  // ========================================
  {
    id: 1,
    nombre: "El Rey",
    apodo: "Pelé",
    posicion: "DEL",
    nacionalidad: "🇧🇷 Brasil",
    equipos: ["Santos", "Cosmos"],
    mundiales: 3,
    logro: "3 Mundiales (1958, 1962, 1970)",
    rareza: "legendaria",
    imagen: "/cromos/pele.PNG"
  },
  {
    id: 2,
    nombre: "El Pelusa",
    apodo: "D10S",
    posicion: "MC",
    nacionalidad: "🇦🇷 Argentina",
    equipos: ["Boca", "Barcelona", "Napoli"],
    mundiales: 1,
    logro: "Mundial 1986",
    rareza: "legendaria",
    imagen: "/cromos/maradona.png"
  },
  {
    id: 3,
    nombre: "El Flaco",
    apodo: "Johan",
    posicion: "DEL",
    nacionalidad: "🇳🇱 Holanda",
    equipos: ["Ajax", "Barcelona"],
    mundiales: 0,
    logro: "3 Balones de Oro",
    rareza: "legendaria",
    imagen: "/cromos/cruyff.png"
  },
  {
    id: 4,
    nombre: "La Saeta",
    apodo: "Di Stéfano",
    posicion: "DEL",
    nacionalidad: "🇦🇷 Argentina",
    equipos: ["River", "Real Madrid"],
    mundiales: 0,
    logro: "5 Copas de Europa",
    rareza: "legendaria",
    imagen: "/cromos/diestefano.PNG"
  },
  {
    id: 5,
    nombre: "El Kaiser",
    apodo: "Beckenbauer",
    posicion: "DEF",
    nacionalidad: "🇩🇪 Alemania",
    equipos: ["Bayern", "Cosmos"],
    mundiales: 1,
    logro: "Mundial 1974",
    rareza: "legendaria",
    imagen: "/cromos/beckenbauer.png"
  },

  // ========================================
  // 💎 ÉPICAS (10 jugadores - 15%)
  // ========================================
  {
    id: 6,
    nombre: "Zizou",
    apodo: "Zidane",
    posicion: "MC",
    nacionalidad: "🇫🇷 Francia",
    equipos: ["Juventus", "Real Madrid"],
    mundiales: 1,
    logro: "Mundial 1998 - Volée Champions",
    rareza: "epica",
    imagen: "/cromos/zidane.PNG"
  },
  {
    id: 7,
    nombre: "El Fenómeno",
    apodo: "R9",
    posicion: "DEL",
    nacionalidad: "🇧🇷 Brasil",
    equipos: ["Barcelona", "Inter", "Real Madrid"],
    mundiales: 2,
    logro: "2 Mundiales - 2 Balones de Oro",
    rareza: "epica",
    imagen: "/cromos/ronaldo.JPG"
  },
  {
    id: 8,
    nombre: "Ronaldinho",
    apodo: "R10",
    posicion: "MC",
    nacionalidad: "🇧🇷 Brasil",
    equipos: ["PSG", "Barcelona", "Milan"],
    mundiales: 1,
    logro: "Balón de Oro 2005",
    rareza: "epica",
    imagen: "/cromos/ronaldinho.PNG"
  },
  {
    id: 9,
    nombre: "Il Capitano",
    apodo: "Maldini",
    posicion: "DEF",
    nacionalidad: "🇮🇹 Italia",
    equipos: ["Milan"],
    mundiales: 0,
    logro: "5 Champions - 25 años Milan",
    rareza: "epica",
    imagen: "/cromos/maldini.png"
  },
  {
    id: 10,
    nombre: "Le Roi",
    apodo: "Platini",
    posicion: "MC",
    nacionalidad: "🇫🇷 Francia",
    equipos: ["Saint-Étienne", "Juventus"],
    mundiales: 0,
    logro: "3 Balones de Oro",
    rareza: "epica",
    imagen: "/cromos/platini.png"
  },
  {
    id: 11,
    nombre: "Il Cigno",
    apodo: "Van Basten",
    posicion: "DEL",
    nacionalidad: "🇳🇱 Holanda",
    equipos: ["Ajax", "Milan"],
    mundiales: 0,
    logro: "3 Balones de Oro",
    rareza: "epica",
    imagen: "/cromos/vanbasten.png"
  },
  {
    id: 12,
    nombre: "Baixinho",
    apodo: "Romário",
    posicion: "DEL",
    nacionalidad: "🇧🇷 Brasil",
    equipos: ["PSV", "Barcelona"],
    mundiales: 1,
    logro: "Mundial 1994",
    rareza: "epica",
    imagen: "/cromos/romario.png"
  },
  {
    id: 13,
    nombre: "Batigol",
    apodo: "Batistuta",
    posicion: "DEL",
    nacionalidad: "🇦🇷 Argentina",
    equipos: ["Fiorentina", "Roma"],
    mundiales: 0,
    logro: "Goleador Argentina",
    rareza: "epica",
    imagen: "/cromos/batistuta.png"
  },
  {
    id: 14,
    nombre: "Der Panzer",
    apodo: "Matthäus",
    posicion: "MC",
    nacionalidad: "🇩🇪 Alemania",
    equipos: ["Bayern", "Inter"],
    mundiales: 1,
    logro: "Mundial 1990",
    rareza: "epica",
    imagen: "/cromos/matthaus.png"
  },
  {
    id: 15,
    nombre: "Piscinin",
    apodo: "Baresi",
    posicion: "DEF",
    nacionalidad: "🇮🇹 Italia",
    equipos: ["Milan"],
    mundiales: 0,
    logro: "3 Champions",
    rareza: "epica",
    imagen: "/cromos/baresi.png"
  },

  // ========================================
  // ⚡ RARAS (15 jugadores - 30%)
  // ========================================
  {
    id: 16,
    nombre: "Rivaldo",
    apodo: "El Zurdo",
    posicion: "MC",
    nacionalidad: "🇧🇷 Brasil",
    equipos: ["Barcelona"],
    mundiales: 1,
    logro: "Balón de Oro 1999",
    rareza: "rara",
    imagen: "/cromos/rivaldo.png"
  },
  {
    id: 17,
    nombre: "Roberto Carlos",
    apodo: "El Hombre Bala",
    posicion: "DEF",
    nacionalidad: "🇧🇷 Brasil",
    equipos: ["Real Madrid"],
    mundiales: 1,
    logro: "3 Champions",
    rareza: "rara",
    imagen: "/cromos/robertocarlos.PNG"
  },
  {
    id: 18,
    nombre: "Aimar",
    apodo: "El Payaso",
    posicion: "MC",
    nacionalidad: "🇦🇷 Argentina",
    equipos: ["River", "Valencia"],
    mundiales: 0,
    logro: "Magia y elegancia",
    rareza: "rara",
    imagen: "/cromos/aimar.PNG"
  },
  {
    id: 19,
    nombre: "Djalminha",
    apodo: "El Genio",
    posicion: "MC",
    nacionalidad: "🇧🇷 Brasil",
    equipos: ["Deportivo"],
    mundiales: 0,
    logro: "Liga 2000",
    rareza: "rara",
    imagen: "/cromos/djalminha.png"
  },
  {
    id: 20,
    nombre: "Cafu",
    apodo: "Il Pendolino",
    posicion: "DEF",
    nacionalidad: "🇧🇷 Brasil",
    equipos: ["Roma", "Milan"],
    mundiales: 2,
    logro: "2 Mundiales",
    rareza: "rara",
    imagen: "/cromos/cafu.png"
  },
  {
    id: 21,
    nombre: "Redondo",
    apodo: "El Príncipe",
    posicion: "MC",
    nacionalidad: "🇦🇷 Argentina",
    equipos: ["Real Madrid"],
    mundiales: 0,
    logro: "Elegancia total",
    rareza: "rara",
    imagen: "/cromos/redondo.png"
  },
  {
    id: 22,
    nombre: "Raúl",
    apodo: "El Ángel",
    posicion: "DEL",
    nacionalidad: "🇪🇸 España",
    equipos: ["Real Madrid"],
    mundiales: 0,
    logro: "3 Champions",
    rareza: "rara",
    imagen: "/cromos/raul.png"
  },
  {
    id: 23,
    nombre: "Totti",
    apodo: "Il Re di Roma",
    posicion: "MC",
    nacionalidad: "🇮🇹 Italia",
    equipos: ["Roma"],
    mundiales: 1,
    logro: "25 años Roma",
    rareza: "rara",
    imagen: "/cromos/totti.png"
  },
  {
    id: 24,
    nombre: "Shevchenko",
    apodo: "Sheva",
    posicion: "DEL",
    nacionalidad: "🇺🇦 Ucrania",
    equipos: ["Milan"],
    mundiales: 0,
    logro: "Balón de Oro 2004",
    rareza: "rara",
    imagen: "/cromos/shevchenko.jpg"
  },
  {
    id: 25,
    nombre: "Nedved",
    apodo: "Furia Checa",
    posicion: "MC",
    nacionalidad: "🇨🇿 Rep. Checa",
    equipos: ["Juventus"],
    mundiales: 0,
    logro: "Balón de Oro 2003",
    rareza: "rara",
    imagen: "/cromos/nedved.jpg"
  },
  {
    id: 26,
    nombre: "Del Piero",
    apodo: "Pinturicchio",
    posicion: "DEL",
    nacionalidad: "🇮🇹 Italia",
    equipos: ["Juventus"],
    mundiales: 1,
    logro: "19 años Juventus",
    rareza: "rara",
    imagen: "/cromos/delpiero.png"
  },
  {
    id: 27,
    nombre: "Cannavaro",
    apodo: "Il Muro",
    posicion: "DEF",
    nacionalidad: "🇮🇹 Italia",
    equipos: ["Juventus", "Real Madrid"],
    mundiales: 1,
    logro: "Mundial 2006 + Balón de Oro",
    rareza: "rara",
    imagen: "/cromos/cannavaro.png"
  },
  {
    id: 28,
    nombre: "Nesta",
    apodo: "El Elegante",
    posicion: "DEF",
    nacionalidad: "🇮🇹 Italia",
    equipos: ["Milan"],
    mundiales: 1,
    logro: "Mundial 2006",
    rareza: "rara",
    imagen: "/cromos/nesta.png"
  },
  {
    id: 29,
    nombre: "Pirlo",
    apodo: "El Arquitecto",
    posicion: "MC",
    nacionalidad: "🇮🇹 Italia",
    equipos: ["Milan", "Juventus"],
    mundiales: 1,
    logro: "Mundial 2006",
    rareza: "rara",
    imagen: "/cromos/pirlo.png"
  },
  {
    id: 30,
    nombre: "Xavi",
    apodo: "El Cerebro",
    posicion: "MC",
    nacionalidad: "🇪🇸 España",
    equipos: ["Barcelona"],
    mundiales: 1,
    logro: "Mundial 2010",
    rareza: "rara",
    imagen: "/cromos/xavi.png"
  },

  // ========================================
  // ⚪ COMUNES (25 jugadores - 50%)
  // ========================================
  {
    id: 31,
    nombre: "Iniesta",
    apodo: "El Ilusionista",
    posicion: "MC",
    nacionalidad: "🇪🇸 España",
    equipos: ["Barcelona"],
    mundiales: 1,
    logro: "Gol Mundial 2010",
    rareza: "comun",
    imagen: "/cromos/iniesta.png"
  },
  {
    id: 32,
    nombre: "Puyol",
    apodo: "El Tiburón",
    posicion: "DEF",
    nacionalidad: "🇪🇸 España",
    equipos: ["Barcelona"],
    mundiales: 1,
    logro: "Capitán Barça",
    rareza: "comun",
    imagen: "/cromos/puyol.png"
  },
  {
    id: 33,
    nombre: "Casillas",
    apodo: "San Iker",
    posicion: "POR",
    nacionalidad: "🇪🇸 España",
    equipos: ["Real Madrid"],
    mundiales: 1,
    logro: "Mundial 2010",
    rareza: "comun",
    imagen: "/cromos/casillas.png"
  },
  {
    id: 34,
    nombre: "Rui Costa",
    apodo: "El Maestro",
    posicion: "MC",
    nacionalidad: "🇵🇹 Portugal",
    equipos: ["Fiorentina", "Milan"],
    mundiales: 0,
    logro: "Elegancia portuguesa",
    rareza: "comun",
    imagen: "/cromos/ruicosta.png"
  },
  {
    id: 35,
    nombre: "Figo",
    apodo: "El Traidor",
    posicion: "EXT",
    nacionalidad: "🇵🇹 Portugal",
    equipos: ["Barcelona", "Real Madrid"],
    mundiales: 0,
    logro: "Balón de Oro 2000",
    rareza: "comun",
    imagen: "/cromos/figo.png"
  },
  {
    id: 36,
    nombre: "Henry",
    apodo: "Tití",
    posicion: "DEL",
    nacionalidad: "🇫🇷 Francia",
    equipos: ["Arsenal", "Barcelona"],
    mundiales: 1,
    logro: "Leyenda Arsenal",
    rareza: "comun",
    imagen: "/cromos/henry.png"
  },
  {
    id: 37,
    nombre: "Kaká",
    apodo: "El Divino",
    posicion: "MC",
    nacionalidad: "🇧🇷 Brasil",
    equipos: ["Milan", "Real Madrid"],
    mundiales: 1,
    logro: "Balón de Oro 2007",
    rareza: "comun",
    imagen: "/cromos/kaka.jpg"
  },
  {
    id: 38,
    nombre: "Seedorf",
    apodo: "El Profesor",
    posicion: "MC",
    nacionalidad: "🇳🇱 Holanda",
    equipos: ["Ajax", "Milan"],
    mundiales: 0,
    logro: "4 Champions",
    rareza: "comun",
    imagen: "/cromos/seedorf.png"
  },
  {
    id: 39,
    nombre: "Inzaghi",
    apodo: "Superpippo",
    posicion: "DEL",
    nacionalidad: "🇮🇹 Italia",
    equipos: ["Juventus", "Milan"],
    mundiales: 1,
    logro: "Goleador Champions",
    rareza: "comun",
    imagen: "/cromos/inzaghi.png"
  },
  {
    id: 40,
    nombre: "Gattuso",
    apodo: "Rino",
    posicion: "MC",
    nacionalidad: "🇮🇹 Italia",
    equipos: ["Milan"],
    mundiales: 1,
    logro: "Guerrero",
    rareza: "comun",
    imagen: "/cromos/gattuso.png"
  },
  {
    id: 41,
    nombre: "Buffon",
    apodo: "Gigi",
    posicion: "POR",
    nacionalidad: "🇮🇹 Italia",
    equipos: ["Juventus"],
    mundiales: 1,
    logro: "25 años élite",
    rareza: "comun",
    imagen: "/cromos/buffon.png"
  },
  {
    id: 42,
    nombre: "Zé Roberto",
    apodo: "El Eterno",
    posicion: "MC",
    nacionalidad: "🇧🇷 Brasil",
    equipos: ["Real Madrid", "Bayern"],
    mundiales: 1,
    logro: "Longevidad",
    rareza: "comun",
    imagen: "/cromos/zeroberto.png"
  },
  {
    id: 43,
    nombre: "Riquelme",
    apodo: "El Último 10",
    posicion: "MC",
    nacionalidad: "🇦🇷 Argentina",
    equipos: ["Boca", "Villarreal"],
    mundiales: 0,
    logro: "Clásico 10",
    rareza: "comun",
    imagen: "/cromos/riquelme.png"
  },
  {
    id: 44,
    nombre: "Vieri",
    apodo: "Bobo",
    posicion: "DEL",
    nacionalidad: "🇮🇹 Italia",
    equipos: ["Inter"],
    mundiales: 0,
    logro: "Goleador potente",
    rareza: "comun",
    imagen: "/cromos/vieri.png"
  },
  {
    id: 45,
    nombre: "Crespo",
    apodo: "Valdanito",
    posicion: "DEL",
    nacionalidad: "🇦🇷 Argentina",
    equipos: ["Inter", "Chelsea"],
    mundiales: 0,
    logro: "Goleador argentino",
    rareza: "comun",
    imagen: "/cromos/crespo.png"
  },
  {
    id: 46,
    nombre: "Ayala",
    apodo: "El Ratón",
    posicion: "DEF",
    nacionalidad: "🇦🇷 Argentina",
    equipos: ["Valencia"],
    mundiales: 0,
    logro: "Defensa fiable",
    rareza: "comun",
    imagen: "/cromos/ayala.png"
  },
  {
    id: 47,
    nombre: "Ballack",
    apodo: "El Capitán",
    posicion: "MC",
    nacionalidad: "🇩🇪 Alemania",
    equipos: ["Bayern", "Chelsea"],
    mundiales: 0,
    logro: "Líder alemán",
    rareza: "comun",
    imagen: "/cromos/ballack.png"
  },
  {
    id: 48,
    nombre: "Pires",
    apodo: "Bobby",
    posicion: "EXT",
    nacionalidad: "🇫🇷 Francia",
    equipos: ["Arsenal"],
    mundiales: 1,
    logro: "Invincibles 2004",
    rareza: "comun",
    imagen: "/cromos/pires.png"
  },
  {
    id: 49,
    nombre: "Vieira",
    apodo: "El Gigante",
    posicion: "MC",
    nacionalidad: "🇫🇷 Francia",
    equipos: ["Arsenal", "Inter"],
    mundiales: 1,
    logro: "Invincibles",
    rareza: "comun",
    imagen: "/cromos/vieira.png"
  },
  {
    id: 50,
    nombre: "Lampard",
    apodo: "Super Frank",
    posicion: "MC",
    nacionalidad: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra",
    equipos: ["Chelsea"],
    mundiales: 0,
    logro: "211 goles MC",
    rareza: "comun",
    imagen: "/cromos/lampard.png"
  },
  {
    id: 51,
    nombre: "Gerrard",
    apodo: "Stevie G",
    posicion: "MC",
    nacionalidad: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra",
    equipos: ["Liverpool"],
    mundiales: 0,
    logro: "Champions 2005",
    rareza: "comun",
    imagen: "/cromos/gerrard.png"
  },
  {
    id: 52,
    nombre: "Scholes",
    apodo: "El Pelirojo",
    posicion: "MC",
    nacionalidad: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra",
    equipos: ["Manchester United"],
    mundiales: 0,
    logro: "11 Premier",
    rareza: "comun",
    imagen: "/cromos/scholes.png"
  },
  {
    id: 53,
    nombre: "Ferdinand",
    apodo: "Rio",
    posicion: "DEF",
    nacionalidad: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra",
    equipos: ["Manchester United"],
    mundiales: 0,
    logro: "6 Premier",
    rareza: "comun",
    imagen: "/cromos/ferdinand.png"
  },
  {
    id: 54,
    nombre: "Terry",
    apodo: "JT",
    posicion: "DEF",
    nacionalidad: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra",
    equipos: ["Chelsea"],
    mundiales: 0,
    logro: "5 Premier",
    rareza: "comun",
    imagen: "/cromos/terry.png"
  },
  {
    id: 55,
    nombre: "Drogba",
    apodo: "El Marfileño",
    posicion: "DEL",
    nacionalidad: "🇨🇮 Costa Marfil",
    equipos: ["Chelsea"],
    mundiales: 0,
    logro: "Champions 2012",
    rareza: "comun",
    imagen: "/cromos/drogba.png"
  }
];

// ========================================
// 💰 PUNTOS POR DUPLICADO (según rareza)
// ========================================
export const PUNTOS_DUPLICADO = {
  legendaria: 200,
  epica: 100,
  rara: 50,
  comun: 10
};

// ========================================
// 🎨 ESTILOS DE RAREZA
// ========================================
export const RAREZA_STYLES = {
  legendaria: {
    nombre: "LEGENDARIA",
    color: "text-yellow-400",
    border: "border-yellow-500",
    bg: "bg-gradient-to-br from-yellow-400 to-orange-500",
    glow: "shadow-[0_0_30px_rgba(255,215,0,0.8)]",
    emoji: "👑"
  },
  epica: {
    nombre: "ÉPICA",
    color: "text-purple-400",
    border: "border-purple-500",
    bg: "bg-gradient-to-br from-purple-500 to-pink-500",
    glow: "shadow-[0_0_20px_rgba(168,85,247,0.6)]",
    emoji: "💎"
  },
  rara: {
    nombre: "RARA",
    color: "text-blue-400",
    border: "border-blue-500",
    bg: "bg-gradient-to-br from-blue-500 to-cyan-500",
    glow: "shadow-[0_0_15px_rgba(59,130,246,0.5)]",
    emoji: "⚡"
  },
  comun: {
    nombre: "COMÚN",
    color: "text-gray-400",
    border: "border-gray-400",
    bg: "bg-gradient-to-br from-gray-400 to-gray-500",
    glow: "shadow-md",
    emoji: "⚪"
  }
};

// ========================================
// 🎲 FUNCIÓN: Obtener cromo aleatorio según probabilidad
// ========================================
export const obtenerCromoAleatorio = () => {
  // Genera número random del 0 al 100
  const random = Math.random() * 100;
  
  // Determina rareza según probabilidades
  let rareza;
  if (random < 5) rareza = "legendaria";      // 0-5: 5%
  else if (random < 20) rareza = "epica";     // 5-20: 15%
  else if (random < 50) rareza = "rara";      // 20-50: 30%
  else rareza = "comun";                       // 50-100: 50%

  // Filtra jugadores por rareza y elige uno al azar
  const jugadoresRareza = JUGADORES.filter(j => j.rareza === rareza);
  return jugadoresRareza[Math.floor(Math.random() * jugadoresRareza.length)];
};

// ========================================
// 📊 FUNCIÓN: Obtener estadísticas de colección
// ========================================
export const obtenerEstadisticas = (coleccion) => {
  const total = JUGADORES.length;
  const unicos = Object.keys(coleccion).length;
  const progreso = Math.round((unicos / total) * 100);
  
  // Contar por rareza
  const porRareza = {
    legendaria: { tengo: 0, total: 0 },
    epica: { tengo: 0, total: 0 },
    rara: { tengo: 0, total: 0 },
    comun: { tengo: 0, total: 0 }
  };
  
  JUGADORES.forEach(jugador => {
    porRareza[jugador.rareza].total++;
    if (coleccion[jugador.id]) {
      porRareza[jugador.rareza].tengo++;
    }
  });
  
  return {
    total,
    unicos,
    progreso,
    porRareza
  };
};
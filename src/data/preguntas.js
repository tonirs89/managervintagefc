// src/data/preguntas.js

// ========================================
// 🎯 BASE DE DATOS DE PREGUNTAS DE FÚTBOL
// ========================================
// Cada día se eligen 5 preguntas aleatorias
// ========================================

export const PREGUNTAS = [
  // MUNDIALES
  {
    id: 1,
    categoria: "Mundiales",
    pregunta: "¿Quién ganó el Mundial 1986?",
    respuestas: ["Brasil", "Argentina", "Italia", "Alemania"],
    correcta: 1
  },
  {
    id: 2,
    categoria: "Mundiales",
    pregunta: "¿En qué año ganó España su primer Mundial?",
    respuestas: ["2006", "2008", "2010", "2012"],
    correcta: 2
  },
  {
    id: 3,
    categoria: "Mundiales",
    pregunta: "¿Qué jugador tiene más Mundiales ganados?",
    respuestas: ["Maradona", "Ronaldo", "Pelé", "Zidane"],
    correcta: 2
  },
  {
    id: 4,
    categoria: "Mundiales",
    pregunta: "¿Dónde se jugó el Mundial de 1998?",
    respuestas: ["Italia", "Francia", "España", "Alemania"],
    correcta: 1
  },
  {
    id: 5,
    categoria: "Mundiales",
    pregunta: "¿Cuántos goles marcó Ronaldo en el Mundial 2002?",
    respuestas: ["6", "7", "8", "9"],
    correcta: 2
  },
  {
    id: 6,
    categoria: "Mundiales",
    pregunta: "¿Qué país ganó el primer Mundial en 1930?",
    respuestas: ["Brasil", "Argentina", "Uruguay", "Italia"],
    correcta: 2
  },
  {
    id: 7,
    categoria: "Mundiales",
    pregunta: "¿En qué año Italia ganó su último Mundial?",
    respuestas: ["1998", "2002", "2006", "2010"],
    correcta: 2
  },

  // CHAMPIONS LEAGUE
  {
    id: 8,
    categoria: "Champions",
    pregunta: "¿Cuántas Champions tiene el Real Madrid hasta 2024?",
    respuestas: ["12", "13", "14", "15"],
    correcta: 3
  },
  {
    id: 9,
    categoria: "Champions",
    pregunta: "¿Qué equipo ganó la primera Champions League en 1992?",
    respuestas: ["Milan", "Barcelona", "Ajax", "Manchester United"],
    correcta: 1
  },
  {
    id: 10,
    categoria: "Champions",
    pregunta: "¿En qué año el Liverpool remontó 3-0 al Milan?",
    respuestas: ["2004", "2005", "2006", "2007"],
    correcta: 1
  },
  {
    id: 11,
    categoria: "Champions",
    pregunta: "¿Cuántas Champions consecutivas ganó el Real Madrid (2016-2018)?",
    respuestas: ["2", "3", "4", "5"],
    correcta: 1
  },
  {
    id: 12,
    categoria: "Champions",
    pregunta: "¿Qué equipo tiene más Champions después del Real Madrid?",
    respuestas: ["Barcelona", "Bayern", "Milan", "Liverpool"],
    correcta: 2
  },

  // BALÓN DE ORO
  {
    id: 13,
    categoria: "Balón de Oro",
    pregunta: "¿Quién ganó el Balón de Oro en 2005?",
    respuestas: ["Ronaldinho", "Zidane", "Henry", "Kaká"],
    correcta: 0
  },
  {
    id: 14,
    categoria: "Balón de Oro",
    pregunta: "¿Cuántos Balones de Oro ganó Cruyff?",
    respuestas: ["1", "2", "3", "4"],
    correcta: 2
  },
  {
    id: 15,
    categoria: "Balón de Oro",
    pregunta: "¿Quién ganó el Balón de Oro en 2007?",
    respuestas: ["Cristiano", "Messi", "Kaká", "Ronaldinho"],
    correcta: 2
  },
  {
    id: 16,
    categoria: "Balón de Oro",
    pregunta: "¿Cuántos Balones de Oro ganó Platini?",
    respuestas: ["1", "2", "3", "4"],
    correcta: 2
  },
  {
    id: 17,
    categoria: "Balón de Oro",
    pregunta: "¿Quién ganó el Balón de Oro 2006?",
    respuestas: ["Zidane", "Ronaldinho", "Cannavaro", "Henry"],
    correcta: 2
  },

  // CLUBES Y LIGAS
  {
    id: 18,
    categoria: "Clubes",
    pregunta: "¿En qué año se fundó el FC Barcelona?",
    respuestas: ["1895", "1899", "1902", "1900"],
    correcta: 1
  },
  {
    id: 19,
    categoria: "Clubes",
    pregunta: "¿Qué equipo español ganó la Liga Invicto en 2004?",
    respuestas: ["Real Madrid", "Barcelona", "Valencia", "Ninguno"],
    correcta: 3
  },
  {
    id: 20,
    categoria: "Clubes",
    pregunta: "¿En qué año el Arsenal fue Invicible en Premier?",
    respuestas: ["2002-03", "2003-04", "2004-05", "2005-06"],
    correcta: 1
  },
  {
    id: 21,
    categoria: "Clubes",
    pregunta: "¿Cuántas Ligas consecutivas ganó la Juventus (2012-2020)?",
    respuestas: ["7", "8", "9", "10"],
    correcta: 2
  },
  {
    id: 22,
    categoria: "Clubes",
    pregunta: "¿Qué club tiene más títulos de Liga en España?",
    respuestas: ["Barcelona", "Real Madrid", "Atlético", "Valencia"],
    correcta: 1
  },

  // JUGADORES LEGENDARIOS
  {
    id: 23,
    categoria: "Leyendas",
    pregunta: "¿Cuántos goles oficiales marcó Pelé?",
    respuestas: ["643", "757", "812", "1000+"],
    correcta: 1
  },
  {
    id: 24,
    categoria: "Leyendas",
    pregunta: "¿En qué equipo jugó Maradona en Italia?",
    respuestas: ["Inter", "Milan", "Napoli", "Juventus"],
    correcta: 2
  },
  {
    id: 25,
    categoria: "Leyendas",
    pregunta: "¿Cuántos años jugó Maldini en el Milan?",
    respuestas: ["20", "23", "25", "27"],
    correcta: 2
  },
  {
    id: 26,
    categoria: "Leyendas",
    pregunta: "¿Qué jugador era 'El Fenómeno'?",
    respuestas: ["Romário", "Ronaldo", "Rivaldo", "Ronaldinho"],
    correcta: 1
  },
  {
    id: 27,
    categoria: "Leyendas",
    pregunta: "¿En qué equipo Zidane marcó la volée de la Champions 2002?",
    respuestas: ["Juventus", "Real Madrid", "Bordeaux", "Francia"],
    correcta: 1
  },
  {
    id: 28,
    categoria: "Leyendas",
    pregunta: "¿Cuántos años tenía Buffon cuando se retiró?",
    respuestas: ["40", "43", "45", "41"],
    correcta: 2
  },

  // RÉCORDS Y CURIOSIDADES
  {
    id: 29,
    categoria: "Récords",
    pregunta: "¿Cuántas Champions ganó Seedorf con diferentes equipos?",
    respuestas: ["2", "3", "4", "5"],
    correcta: 2
  },
  {
    id: 30,
    categoria: "Récords",
    pregunta: "¿Qué portero tiene más partidos con Italia?",
    respuestas: ["Buffon", "Zoff", "Toldo", "Casillas"],
    correcta: 0
  },
  {
    id: 31,
    categoria: "Récords",
    pregunta: "¿Cuántos goles marcó Lampard desde mediocampo?",
    respuestas: ["177", "201", "211", "225"],
    correcta: 2
  },
  {
    id: 32,
    categoria: "Récords",
    pregunta: "¿Qué equipo tiene el récord invicto más largo en España?",
    respuestas: ["Real Madrid", "Barcelona", "Atlético", "Sevilla"],
    correcta: 1
  },

  // FINALES HISTÓRICAS
  {
    id: 33,
    categoria: "Finales",
    pregunta: "¿Dónde se jugó la final del Mundial 2006?",
    respuestas: ["Roma", "Berlín", "Munich", "Madrid"],
    correcta: 1
  },
  {
    id: 34,
    categoria: "Finales",
    pregunta: "¿Quién marcó el gol en la final del Mundial 2010?",
    respuestas: ["Villa", "Xavi", "Iniesta", "Torres"],
    correcta: 2
  },
  {
    id: 35,
    categoria: "Finales",
    pregunta: "¿En qué ciudad fue la Remontada del Barcelona al PSG?",
    respuestas: ["París", "Barcelona", "Madrid", "Londres"],
    correcta: 1
  },

  // EQUIPOS NACIONALES
  {
    id: 36,
    categoria: "Selecciones",
    pregunta: "¿Qué selección tiene más Eurocopas?",
    respuestas: ["Alemania", "España", "Francia", "Italia"],
    correcta: 1
  },
  {
    id: 37,
    categoria: "Selecciones",
    pregunta: "¿Cuántas Copas América ganó Uruguay?",
    respuestas: ["13", "14", "15", "16"],
    correcta: 2
  },
  {
    id: 38,
    categoria: "Selecciones",
    pregunta: "¿Qué país organizó la Eurocopa 2004?",
    respuestas: ["España", "Francia", "Portugal", "Italia"],
    correcta: 2
  },

  // TRANSFERENCIAS Y CLUBES
  {
    id: 39,
    categoria: "Transferencias",
    pregunta: "¿De qué equipo fichó el Barcelona a Ronaldinho?",
    respuestas: ["Gremio", "PSG", "Milan", "Porto"],
    correcta: 1
  },
  {
    id: 40,
    categoria: "Transferencias",
    pregunta: "¿Qué jugador fue del Barcelona al Real Madrid en 2000?",
    respuestas: ["Rivaldo", "Figo", "Ronaldo", "Laudrup"],
    correcta: 1
  }
];

// ========================================
// 🎲 FUNCIÓN: Obtener 5 preguntas aleatorias
// ========================================
export const obtenerPreguntasAleatorias = () => {
  // Mezclar array de preguntas
  const preguntasMezcladas = [...PREGUNTAS].sort(() => Math.random() - 0.5);
  
  // Devolver las primeras 5
  return preguntasMezcladas.slice(0, 5);
};

// ========================================
// 📅 FUNCIÓN: Verificar si puede hacer quiz hoy
// ========================================
export const puedeHacerQuiz = (ultimoQuizFecha) => {
  if (!ultimoQuizFecha) return true;
  
  const hoy = new Date().toDateString();
  return ultimoQuizFecha !== hoy;
};

// ========================================
// 🏆 FUNCIÓN: Calcular sobres ganados
// ========================================
export const calcularSobresGanados = (respuestasCorrectas) => {
  if (respuestasCorrectas >= 4) return 3; // 4-5 correctas = 3 sobres
  if (respuestasCorrectas >= 2) return 2; // 2-3 correctas = 2 sobres
  if (respuestasCorrectas >= 1) return 1; // 1 correcta = 1 sobre
  return 0; // 0 correctas = 0 sobres
};
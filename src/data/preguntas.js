// src/data/preguntas.js

// ========================================
// 🎯 BASE DE DATOS DE PREGUNTAS DE FÚTBOL
// ========================================
// Cada día se eligen 5 preguntas aleatorias
// ========================================

// BANCO DE PREGUNTAS - 100 PREGUNTAS

export const PREGUNTAS_QUIZ = [
  // MUNDIALES - CAMPEONES
  {
    pregunta: "¿Qué selección ganó el Mundial de 1998 en Francia?",
    opciones: ["Brasil", "Francia", "Italia", "Alemania"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Quién ganó el primer Mundial de fútbol en 1930?",
    opciones: ["Argentina", "Uruguay", "Brasil", "Italia"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Qué país ganó el Mundial de 2006 en Alemania?",
    opciones: ["Francia", "Italia", "Brasil", "Alemania"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Cuántos Mundiales ganó Brasil?",
    opciones: ["3", "4", "5", "6"],
    respuestaCorrecta: 2
  },
  {
    pregunta: "¿Qué país ganó el Mundial de 1986 en México?",
    opciones: ["Alemania", "Argentina", "Italia", "Francia"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Qué selección ganó el Mundial de 1974 en Alemania Occidental?",
    opciones: ["Países Bajos", "Alemania Occidental", "Brasil", "Argentina"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Qué país organizó y ganó el Mundial de 1966?",
    opciones: ["Inglaterra", "Alemania", "Italia", "Uruguay"],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Qué selección ganó el Mundial de 1982 en España?",
    opciones: ["Alemania", "Italia", "Brasil", "Francia"],
    respuestaCorrecta: 1
  },

  // MUNDIALES - GOLEADORES
  {
    pregunta: "¿Quién es el máximo goleador en la historia de los Mundiales?",
    opciones: ["Pelé", "Ronaldo", "Miroslav Klose", "Gerd Müller"],
    respuestaCorrecta: 2
  },
  {
    pregunta: "¿Cuántos goles marcó Miroslav Klose en Mundiales?",
    opciones: ["14", "15", "16", "17"],
    respuestaCorrecta: 2
  },
  {
    pregunta: "¿Quién fue el máximo goleador del Mundial 1986?",
    opciones: ["Diego Maradona", "Gary Lineker", "Careca", "Jorge Valdano"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Cuántos goles marcó Ronaldo Nazário en Mundiales?",
    opciones: ["13", "14", "15", "16"],
    respuestaCorrecta: 2
  },
  {
    pregunta: "¿Quién marcó más goles en un solo Mundial?",
    opciones: ["Pelé (1958)", "Just Fontaine (1958)", "Gerd Müller (1970)", "Ronaldo (2002)"],
    respuestaCorrecta: 1
  },

  // BALÓN DE ORO
  {
    pregunta: "¿Quién ganó el primer Balón de Oro en 1956?",
    opciones: ["Di Stéfano", "Stanley Matthews", "Raymond Kopa", "Ferenc Puskás"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Cuántos Balones de Oro ganó Johan Cruyff?",
    opciones: ["2", "3", "4", "5"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Quién ganó el Balón de Oro en 1994?",
    opciones: ["Romário", "Roberto Baggio", "Paolo Maldini", "Hristo Stoichkov"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Cuántos Balones de Oro ganó Michel Platini consecutivos?",
    opciones: ["2", "3", "4", "1"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Quién ganó el Balón de Oro en 2006?",
    opciones: ["Ronaldinho", "Fabio Cannavaro", "Zinedine Zidane", "Thierry Henry"],
    respuestaCorrecta: 1
  },

  // CLUBES LEGENDARIOS
  {
    pregunta: "¿Cuántas Champions League ganó el AC Milan?",
    opciones: ["5", "6", "7", "8"],
    respuestaCorrecta: 2
  },
  {
    pregunta: "¿Qué equipo ganó 5 Copas de Europa consecutivas (1956-1960)?",
    opciones: ["AC Milan", "Real Madrid", "Liverpool", "Bayern Múnich"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿En qué año el Manchester United ganó la Champions remontando al Bayern en el 93?",
    opciones: ["1998", "1999", "2000", "2001"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Qué equipo italiano ganó la Champions League en 1985?",
    opciones: ["Juventus", "AC Milan", "Inter de Milán", "Roma"],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Cuántas Champions ganó el Liverpool hasta 2005?",
    opciones: ["3", "4", "5", "6"],
    respuestaCorrecta: 2
  },

  // JUGADORES LEGENDARIOS
  {
    pregunta: "¿En qué año se retiró Diego Maradona?",
    opciones: ["1994", "1995", "1996", "1997"],
    respuestaCorrecta: 3
  },
  {
    pregunta: "¿Cuántos goles oficiales marcó Pelé en su carrera?",
    opciones: ["757", "1000", "1281", "1363"],
    respuestaCorrecta: 2
  },
  {
    pregunta: "¿Con qué dorsal jugaba Roberto Baggio?",
    opciones: ["7", "9", "10", "11"],
    respuestaCorrecta: 2
  },
  {
    pregunta: "¿En qué equipo italiano NO jugó Ronaldo Nazário?",
    opciones: ["Inter", "Milan", "Juventus", "Roma"],
    respuestaCorrecta: 3
  },
  {
    pregunta: "¿Cuántos años jugó Paolo Maldini en el AC Milan?",
    opciones: ["20", "22", "25", "27"],
    respuestaCorrecta: 2
  },
  {
    pregunta: "¿Qué jugador era conocido como 'El Divino Calvo'?",
    opciones: ["Ronaldo", "Zidane", "Di Stéfano", "Cruyff"],
    respuestaCorrecta: 2
  },
  {
    pregunta: "¿Con qué número jugaba Zinedine Zidane en el Real Madrid?",
    opciones: ["5", "7", "10", "21"],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Qué posición jugaba Franco Baresi?",
    opciones: ["Delantero", "Centrocampista", "Defensa central", "Portero"],
    respuestaCorrecta: 2
  },

  // RECORDS Y ESTADÍSTICAS
  {
    pregunta: "¿Quién marcó el gol más rápido en un Mundial (11 segundos)?",
    opciones: ["Hakan Şükür", "Clint Dempsey", "Bryan Robson", "Vaclav Masek"],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Qué portero tiene más partidos con su selección?",
    opciones: ["Buffon", "Casillas", "Yashin", "Ahmed Hassan"],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Cuál es el resultado más abultado en un Mundial?",
    opciones: ["Hungría 10-1 El Salvador", "Hungría 9-0 Corea del Sur", "Yugoslavia 9-0 Zaire", "Alemania 8-0 Arabia Saudita"],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Quién marcó más goles en una sola temporada de Champions?",
    opciones: ["Messi (14)", "Cristiano (17)", "Messi (17)", "Lewandowski (15)"],
    respuestaCorrecta: 1
  },

  // FINALES HISTÓRICAS
  {
    pregunta: "¿Qué equipos jugaron la final de la Champions 2005 en Estambul?",
    opciones: ["Milan vs Liverpool", "Milan vs Manchester United", "Barcelona vs Arsenal", "Real Madrid vs Juventus"],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Quién ganó la final del Mundial 1954 (Milagro de Berna)?",
    opciones: ["Hungría", "Alemania Occidental", "Uruguay", "Austria"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Qué resultado tuvo la final del Mundial 1950 entre Uruguay y Brasil?",
    opciones: ["Brasil 1-2 Uruguay", "Brasil 0-1 Uruguay", "Uruguay 3-2 Brasil", "Uruguay 2-1 Brasil"],
    respuestaCorrecta: 3
  },
  {
    pregunta: "¿En qué año fue la 'final más sucia' entre Países Bajos y España?",
    opciones: ["2006", "2008", "2010", "2014"],
    respuestaCorrecta: 2
  },

  // GOLES HISTÓRICOS
  {
    pregunta: "¿Contra qué equipo marcó Maradona el 'Gol del Siglo' en 1986?",
    opciones: ["Inglaterra", "Bélgica", "Italia", "Alemania"],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Quién marcó el gol de chilena en la final de la Champions 2018?",
    opciones: ["Cristiano Ronaldo", "Gareth Bale", "Karim Benzema", "Sergio Ramos"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Contra qué portero marcó Pelé su gol 1000?",
    opciones: ["Edgardo Andrada", "Amadeo Carrizo", "Antonio Carbajal", "Gilmar"],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Qué jugador marcó un hat-trick en una final de Mundial?",
    opciones: ["Pelé", "Geoff Hurst", "Ronaldo", "Zinedine Zidane"],
    respuestaCorrecta: 1
  },

  // ENTRENADORES LEGENDARIOS
  {
    pregunta: "¿Quién entrenó al Barcelona en el Dream Team de los 90?",
    opciones: ["Louis van Gaal", "Johan Cruyff", "Frank Rijkaard", "Bobby Robson"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Qué entrenador ganó 2 Champions consecutivas con el AC Milan (1989-1990)?",
    opciones: ["Fabio Capello", "Arrigo Sacchi", "Carlo Ancelotti", "Giovanni Trapattoni"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Quién fue el entrenador de Argentina en el Mundial 1986?",
    opciones: ["César Luis Menotti", "Carlos Bilardo", "Alfio Basile", "Marcelo Bielsa"],
    respuestaCorrecta: 1
  },

  // RIVALIDADES CLÁSICAS
  {
    pregunta: "¿Cómo se llama el clásico entre Boca Juniors y River Plate?",
    opciones: ["El Clásico", "El Superclásico", "El Derby", "La Bombonera"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Qué equipos protagonizan el 'Derby della Madonnina'?",
    opciones: ["Roma vs Lazio", "Inter vs Milan", "Juventus vs Torino", "Napoli vs Roma"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Cómo se llama el clásico entre Celtic y Rangers?",
    opciones: ["El Derby de Glasgow", "Old Firm", "Scottish Derby", "Derby escocés"],
    respuestaCorrecta: 1
  },

  // EUROCOPA
  {
    pregunta: "¿Qué país ganó la primera Eurocopa en 1960?",
    opciones: ["Francia", "Alemania", "URSS", "Italia"],
    respuestaCorrecta: 2
  },
  {
    pregunta: "¿Quién ganó la Eurocopa 2004 sorprendiendo a todos?",
    opciones: ["Grecia", "Portugal", "Chequia", "Francia"],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Cuántas Eurocopas ganó Alemania hasta 2012?",
    opciones: ["2", "3", "4", "5"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Quién fue el máximo goleador de la Eurocopa 2000?",
    opciones: ["Thierry Henry", "Patrick Kluivert", "Savo Milošević", "Nuno Gomes"],
    respuestaCorrecta: 1
  },

  // COPAS AMÉRICA
  {
    pregunta: "¿Qué país ha ganado más Copas América?",
    opciones: ["Brasil", "Argentina", "Uruguay", "Chile"],
    respuestaCorrecta: 2
  },
  {
    pregunta: "¿En qué año Argentina ganó su primera Copa América?",
    opciones: ["1910", "1916", "1921", "1925"],
    respuestaCorrecta: 2
  },

  // LIGAS NACIONALES
  {
    pregunta: "¿Qué equipo ganó 5 ligas consecutivas en Italia (2012-2016)?",
    opciones: ["Inter", "Milan", "Juventus", "Roma"],
    respuestaCorrecta: 2
  },
  {
    pregunta: "¿Cuántas ligas inglesas ganó el Manchester United con Ferguson?",
    opciones: ["11", "13", "15", "17"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Qué equipo español ganó 5 ligas consecutivas (1986-1990)?",
    opciones: ["Barcelona", "Real Madrid", "Athletic Bilbao", "Atlético Madrid"],
    respuestaCorrecta: 1
  },

  // LEYENDAS POR PAÍS
  {
    pregunta: "¿Quién es el máximo goleador histórico de la selección francesa?",
    opciones: ["Zinedine Zidane", "Michel Platini", "Thierry Henry", "Karim Benzema"],
    respuestaCorrecta: 2
  },
  {
    pregunta: "¿Quién es considerado el mejor jugador alemán de la historia?",
    opciones: ["Gerd Müller", "Franz Beckenbauer", "Lothar Matthäus", "Karl-Heinz Rummenigge"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Quién fue el primer Balón de Oro africano (1995)?",
    opciones: ["Jay-Jay Okocha", "George Weah", "Samuel Eto'o", "Didier Drogba"],
    respuestaCorrecta: 1
  },

  // MOMENTOS ICÓNICOS
  {
    pregunta: "¿En qué Mundial Zinedine Zidane dio el cabezazo a Materazzi?",
    opciones: ["2002", "2004", "2006", "2008"],
    respuestaCorrecta: 2
  },
  {
    pregunta: "¿Qué jugador mordió a Chiellini en el Mundial 2014?",
    opciones: ["Diego Costa", "Luis Suárez", "Edinson Cavani", "Neymar"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Quién falló el penalti decisivo en la final del Mundial 1994?",
    opciones: ["Roberto Baggio", "Franco Baresi", "Daniele Massaro", "Demetrio Albertini"],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Qué portero paró el penalti a Zidane en la final de 2006?",
    opciones: ["Oliver Kahn", "Jens Lehmann", "Gianluigi Buffon", "Fabien Barthez"],
    respuestaCorrecta: 2
  },

  // APODOS FAMOSOS
  {
    pregunta: "¿A quién llamaban 'Il Phenomeno'?",
    opciones: ["Ronaldo Nazário", "Ronaldinho", "Romário", "Rivaldo"],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Quién era conocido como 'El Pibe de Oro'?",
    opciones: ["Pelé", "Maradona", "Riquelme", "Aimar"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿A quién llamaban 'Kaiser'?",
    opciones: ["Gerd Müller", "Franz Beckenbauer", "Lothar Matthäus", "Oliver Kahn"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Quién era 'Il Divin Codino' (La Divina Coleta)?",
    opciones: ["Roberto Baggio", "Alessandro Del Piero", "Francesco Totti", "Andrea Pirlo"],
    respuestaCorrecta: 0
  },

  // TRANSFERENCIAS HISTÓRICAS
  {
    pregunta: "¿En qué año Ronaldo Nazário fue transferido al Real Madrid?",
    opciones: ["2000", "2001", "2002", "2003"],
    respuestaCorrecta: 2
  },
  {
    pregunta: "¿Cuánto costó la transferencia de Zinedine Zidane al Real Madrid?",
    opciones: ["50 millones", "66 millones", "77.5 millones", "80 millones"],
    respuestaCorrecta: 2
  },
  {
    pregunta: "¿De qué equipo fichó el Barcelona a Ronaldinho en 2003?",
    opciones: ["PSG", "Grêmio", "Flamengo", "Milan"],
    respuestaCorrecta: 0
  },

  // POSICIONES Y TÁCTICAS
  {
    pregunta: "¿Qué posición inventó Franz Beckenbauer?",
    opciones: ["Mediapunta", "Falso 9", "Líbero", "Carrilero"],
    respuestaCorrecta: 2
  },
  {
    pregunta: "¿Cómo se llamaba la táctica del Milan de Sacchi?",
    opciones: ["Catenaccio", "Pressing", "Tiki-taka", "WM"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Qué formación usaba el Barcelona de Guardiola?",
    opciones: ["4-4-2", "4-3-3", "3-5-2", "4-2-3-1"],
    respuestaCorrecta: 1
  },

  // ESTADIOS LEGENDARIOS
  {
    pregunta: "¿Cuál es el estadio del AC Milan e Inter?",
    opciones: ["Stadio Olimpico", "San Siro", "Delle Alpi", "San Paolo"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Cómo se llama el estadio del Boca Juniors?",
    opciones: ["El Monumental", "La Bombonera", "El Cilindro", "El Gasómetro"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿En qué estadio se jugó la final del Mundial 1950?",
    opciones: ["Maracaná", "Centenario", "Azteca", "Monumental"],
    respuestaCorrecta: 0
  },

  // PORTEROS LEGENDARIOS
  {
    pregunta: "¿Quién era conocido como 'La Araña Negra'?",
    opciones: ["Lev Yashin", "Dino Zoff", "Gordon Banks", "Sepp Maier"],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Qué portero italiano ganó el Mundial 1982?",
    opciones: ["Walter Zenga", "Dino Zoff", "Giovanni Galli", "Stefano Tacconi"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Quién paró el penalti a Robben en la final del Mundial 2010?",
    opciones: ["Víctor Valdés", "Iker Casillas", "Pepe Reina", "Diego López"],
    respuestaCorrecta: 1
  },

  // NÚMEROS MÍTICOS
  {
    pregunta: "¿Con qué número jugaba Ronaldo Nazário en el Barcelona?",
    opciones: ["9", "10", "11", "7"],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Qué número retiró el Milan en honor a Paolo Maldini?",
    opciones: ["3", "4", "5", "6"],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Con qué dorsal jugaba Francesco Totti en la Roma?",
    opciones: ["8", "9", "10", "11"],
    respuestaCorrecta: 2
  },

  // EQUIPOS NACIONALES
  {
    pregunta: "¿Qué selección llegó a la semifinal del Mundial 2002 siendo revelación?",
    opciones: ["Senegal", "Turquía", "Corea del Sur", "México"],
    respuestaCorrecta: 2
  },
  {
    pregunta: "¿Qué país africano llegó más lejos en un Mundial (cuartos)?",
    opciones: ["Camerún", "Senegal", "Ghana", "Nigeria"],
    respuestaCorrecta: 2
  },

  // LESIONES Y RETIROS
  {
    pregunta: "¿Por qué se retiró Marco van Basten prematuramente?",
    opciones: ["Lesión de rodilla", "Lesión de tobillo", "Problemas cardíacos", "Lesión de espalda"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Qué le pasó a Ronaldo antes de la final del Mundial 1998?",
    opciones: ["Lesión", "Convulsión/crisis", "Intoxicación", "Gripe"],
    respuestaCorrecta: 1
  },

  // DATOS CURIOSOS
  {
    pregunta: "¿Qué jugador jugó en los 5 grandes ligas europeas?",
    opciones: ["Zlatan Ibrahimović", "Thierry Henry", "Ronaldo Nazário", "David Beckham"],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Qué hermanos jugaron juntos en el Mundial 2010?",
    opciones: ["Los De Boer", "Los Charlton", "Los Boateng", "Los Laudrup"],
    respuestaCorrecta: 2
  },
  {
    pregunta: "¿Qué jugador marcó en 3 Mundiales diferentes?",
    opciones: ["Pelé", "Maradona", "Miroslav Klose", "Ronaldo"],
    respuestaCorrecta: 2
  },

  // EQUIPOS HISTÓRICOS
  {
    pregunta: "¿Qué equipo fue conocido como 'La Quinta del Buitre'?",
    opciones: ["Barcelona", "Real Madrid", "Atlético Madrid", "Athletic Bilbao"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Qué selección fue conocida como 'La Naranja Mecánica'?",
    opciones: ["Alemania", "Países Bajos", "Bélgica", "Suecia"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Qué Brasil fue considerado el mejor equipo de la historia (Mundial 1970)?",
    opciones: ["Brasil del 58", "Brasil del 62", "Brasil del 70", "Brasil del 94"],
    respuestaCorrecta: 2
  },

  // MÁS PREGUNTAS VARIADAS
  {
    pregunta: "¿En qué año Roger Milla celebró bailando en la esquina en el Mundial?",
    opciones: ["1986", "1990", "1994", "1998"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Qué portero marcó un gol de chilena?",
    opciones: ["René Higuita", "José Luis Chilavert", "Rogério Ceni", "Jorge Campos"],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Quién inventó la 'Panenka' en un penalti?",
    opciones: ["Michel Platini", "Antonín Panenka", "Andreas Brehme", "Zico"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Qué jugador fue expulsado en su partido de despedida por cabezazo?",
    opciones: ["Roy Keane", "Zinedine Zidane", "Eric Cantona", "Paolo Di Canio"],
    respuestaCorrecta: 1
  }
];

// ========================================
// 🎲 FUNCIÓN: Obtener 5 preguntas aleatorias
// ========================================
export const obtenerPreguntasAleatorias = () => {
  // Mezclar array de preguntas
  const preguntasMezcladas = [...PREGUNTAS_QUIZ].sort(() => Math.random() - 0.5);
  
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
// src/App.jsx

import { useState, useEffect } from "react";
import LoginPage from "./pages/LoginPage";
import AlbumPage from "./pages/AlbumPage";
import Header from "./pages/Header";
import QuizModal from "./components/QuizModal";
import { obtenerPreguntasAleatorias, puedeHacerQuiz as verificarQuiz } from "./data/preguntas";

export default function App() {
  const [usuario, setUsuario] = useState(null);
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [sobres, setSobres] = useState(3);
  const [puntos, setPuntos] = useState(0);
  const [progreso, setProgreso] = useState(0);
  
  const [mostrarQuiz, setMostrarQuiz] = useState(false);
  const [preguntasQuiz, setPreguntasQuiz] = useState([]);
  const [ultimoQuiz, setUltimoQuiz] = useState(null);

  // ============================================
  // CARGAR SESIÓN AL INICIAR
  // ============================================
  useEffect(() => {
    const emailGuardado = localStorage.getItem("usuarioActivo");
    if (emailGuardado) {
      setUsuario(emailGuardado);
      
      // Obtener nombre del usuario
      const usuarios = JSON.parse(localStorage.getItem("usuarios") || "{}");
      if (usuarios[emailGuardado]) {
        setNombreUsuario(usuarios[emailGuardado].nombre);
      }
      
      const datosGuardados = localStorage.getItem(`album_${emailGuardado}`);
      if (datosGuardados) {
        try {
          const datos = JSON.parse(datosGuardados);
          setSobres(datos.sobres || 3);
          setPuntos(datos.puntos || 0);
          setUltimoQuiz(datos.ultimoQuiz || null);
        } catch (error) {
          console.error("Error cargando datos:", error);
        }
      }
    }
  }, []);

  // ============================================
  // MANEJAR LOGIN
  // ============================================
  const handleLogin = (email) => {
    setUsuario(email);
    localStorage.setItem("usuarioActivo", email);
    
    // Obtener nombre
    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "{}");
    if (usuarios[email]) {
      setNombreUsuario(usuarios[email].nombre);
    }
    
    const datosGuardados = localStorage.getItem(`album_${email}`);
    if (datosGuardados) {
      try {
        const datos = JSON.parse(datosGuardados);
        setSobres(datos.sobres || 3);
        setPuntos(datos.puntos || 0);
        setUltimoQuiz(datos.ultimoQuiz || null);
      } catch (error) {
        console.error("Error cargando datos:", error);
      }
    } else {
      setSobres(3);
      setPuntos(0);
      setUltimoQuiz(null);
    }
  };

  // ============================================
  // MANEJAR LOGOUT
  // ============================================
  const handleLogout = () => {
    if (usuario) {
      const datosActuales = localStorage.getItem(`album_${usuario}`);
      if (datosActuales) {
        const datos = JSON.parse(datosActuales);
        localStorage.setItem(`album_${usuario}`, JSON.stringify({
          ...datos,
          sobres,
          puntos,
          ultimoQuiz
        }));
      }
    }
    
    localStorage.removeItem("usuarioActivo");
    setUsuario(null);
    setNombreUsuario("");
    setSobres(3);
    setPuntos(0);
    setProgreso(0);
    setUltimoQuiz(null);
  };

  // ============================================
  // MANEJAR QUIZ
  // ============================================
  const handleQuizClick = () => {
    if (!verificarQuiz(ultimoQuiz)) {
      alert("❌ Ya completaste el quiz de hoy. Vuelve mañana para ganar más sobres.");
      return;
    }
    
    const preguntas = obtenerPreguntasAleatorias();
    setPreguntasQuiz(preguntas);
    setMostrarQuiz(true);
  };

  const handleQuizComplete = (sobresGanados, respuestasCorrectas) => {
    setSobres(sobres + sobresGanados);
    
    const hoy = new Date().toDateString();
    setUltimoQuiz(hoy);
    
    const datosActuales = localStorage.getItem(`album_${usuario}`);
    if (datosActuales) {
      const datos = JSON.parse(datosActuales);
      localStorage.setItem(`album_${usuario}`, JSON.stringify({
        ...datos,
        sobres: sobres + sobresGanados,
        ultimoQuiz: hoy
      }));
    }
    
    setMostrarQuiz(false);
    
    alert(`¡Felicidades! Obtuviste ${respuestasCorrectas}/5 correctas y ganaste ${sobresGanados} sobres 🎉`);
  };

  // ============================================
  // MANEJAR PROGRESO
  // ============================================
  const handleProgresoChange = (nuevoProgreso) => {
    setProgreso(nuevoProgreso);
  };

  // ============================================
  // RENDER: LOGIN
  // ============================================
  if (!usuario) {
    return (
      <div className="min-h-screen bg-[#0c0a05] flex items-center justify-center">
        <LoginPage onLogin={handleLogin} />
      </div>
    );
  }

  // ============================================
  // RENDER: PRINCIPAL
  // ============================================
  return (
    <div className="min-h-screen bg-[#0c0a05]">
      <Header 
        usuario={nombreUsuario || usuario} 
        onLogout={handleLogout}
        sobres={sobres}
        puntos={puntos}
        progreso={progreso}
        onQuizClick={handleQuizClick}
        puedeHacerQuiz={verificarQuiz(ultimoQuiz)}
      />
      
      <AlbumPage 
        usuario={usuario}
        sobres={sobres}
        setSobres={setSobres}
        puntos={puntos}
        setPuntos={setPuntos}
        onProgresoChange={handleProgresoChange}
      />

      {mostrarQuiz && (
        <QuizModal
          preguntas={preguntasQuiz}
          onComplete={handleQuizComplete}
          onClose={() => setMostrarQuiz(false)}
        />
      )}
    </div>
  );
}
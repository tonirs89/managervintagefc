// src/pages/LoginPage.jsx

import { useState, useEffect } from "react";
import { Mail, Lock, UserPlus, LogIn, Eye, EyeOff } from "lucide-react";
import LogoBig from "../components/LogoBig";

export default function LoginPage({ onLogin }) {
  const [esRegistro, setEsRegistro] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.backgroundColor = "#090702";
    document.documentElement.style.backgroundColor = "#090702";
  }, []);

  // ============================================
  // VALIDAR EMAIL
  // ============================================
  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // ============================================
  // CIFRADO SIMPLE (Base64)
  // ============================================
  const cifrar = (texto) => {
    return btoa(texto); // Base64 encode
  };

  const descifrar = (textoCifrado) => {
    try {
      return atob(textoCifrado); // Base64 decode
    } catch {
      return null;
    }
  };

  // ============================================
  // MANEJAR REGISTRO
  // ============================================
  const handleRegistro = (e) => {
    e.preventDefault();
    setError("");

    // Validaciones
    if (!nombre.trim()) {
      setError("❌ Por favor, ingresa tu nombre");
      return;
    }

    if (!validarEmail(email)) {
      setError("❌ Email no válido");
      return;
    }

    if (password.length < 6) {
      setError("❌ La contraseña debe tener al menos 6 caracteres");
      return;
    }

    // Verificar si el usuario ya existe
    const usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios") || "{}");
    
    if (usuariosRegistrados[email]) {
      setError("❌ Este email ya está registrado. Inicia sesión.");
      return;
    }

    // Registrar nuevo usuario
    usuariosRegistrados[email] = {
      nombre: nombre.trim(),
      password: cifrar(password),
      fechaRegistro: new Date().toISOString()
    };

    localStorage.setItem("usuarios", JSON.stringify(usuariosRegistrados));
    
    // Auto-login después de registro
    localStorage.setItem("usuarioActivo", email);
    onLogin(email);
  };

  // ============================================
  // MANEJAR LOGIN
  // ============================================
  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // Validaciones
    if (!validarEmail(email)) {
      setError("❌ Email no válido");
      return;
    }

    if (!password) {
      setError("❌ Ingresa tu contraseña");
      return;
    }

    // Verificar usuario
    const usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios") || "{}");
    const usuario = usuariosRegistrados[email];

    if (!usuario) {
      setError("❌ Usuario no encontrado. ¿Quieres registrarte?");
      return;
    }

    // Verificar contraseña
    const passwordDescifrada = descifrar(usuario.password);
    
    if (passwordDescifrada !== password) {
      setError("❌ Contraseña incorrecta");
      return;
    }

    // Login exitoso
    localStorage.setItem("usuarioActivo", email);
    onLogin(email);
  };

  // ============================================
  // CAMBIAR ENTRE LOGIN Y REGISTRO
  // ============================================
  const toggleModo = () => {
    setEsRegistro(!esRegistro);
    setError("");
    setEmail("");
    setPassword("");
    setNombre("");
  };

  // ============================================
  // RENDER
  // ============================================
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen text-white bg-gradient-to-b from-[#0b0904] via-[#1a1407] to-[#090702] relative overflow-hidden px-4">

      {/* ANIMACIÓN RADIAL DORADA */}
      <div className="absolute inset-0">
        <div className="absolute w-[120%] h-[120%] bg-gradient-radial from-yellow-500/15 via-transparent to-transparent blur-3xl opacity-60 animate-[mover_10s_linear_infinite_alternate]" />
      </div>

      {/* LOGO */}
      <div className="relative mb-8 flex justify-center z-10">
        {/* LOGO png
        <img
          src="/cromos/logoBlackversion2.png"
          alt="Logo"
          className="w-[70vw] max-w-[400px] min-w-[280px] drop-shadow-[0_0_30px_rgba(255,215,0,0.5)] animate-pulse-slow"
        />*/}
        <LogoBig />
      </div>

      {/* TÍTULO */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-2 z-10 text-center">
        {esRegistro ? "Crear Cuenta" : "Iniciar Sesión"}
      </h2>
      <p className="text-gray-400 text-sm mb-6 z-10 text-center">
        {esRegistro 
          ? "Regístrate para guardar tu colección" 
          : "Accede a tu álbum de leyendas"}
      </p>

      {/* FORMULARIO */}
      <form
        onSubmit={esRegistro ? handleRegistro : handleLogin}
        className="bg-[#090702] p-6 sm:p-8 rounded-xl shadow-[0_0_30px_rgba(218,177,66,0.3)] w-full max-w-md backdrop-blur-sm z-10 space-y-4"
      >
        
        {/* CAMPO NOMBRE (solo en registro) */}
        {esRegistro && (
          <div>
            <label className="block text-gray-400 text-sm mb-2">Nombre</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="bg-[#f2ebda] border-none p-3 pl-10 w-full rounded text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <UserPlus className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" size={18} />
            </div>
          </div>
        )}

        {/* CAMPO EMAIL */}
        <div>
          <label className="block text-gray-400 text-sm mb-2">Email</label>
          <div className="relative">
            <input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#f2ebda] border-none p-3 pl-10 w-full rounded text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" size={18} />
          </div>
        </div>

        {/* CAMPO CONTRASEÑA */}
        <div>
          <label className="block text-gray-400 text-sm mb-2">Contraseña</label>
          <div className="relative">
            <input
              type={mostrarPassword ? "text" : "password"}
              placeholder="Mínimo 6 caracteres"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#f2ebda] border-none p-3 pl-10 pr-10 w-full rounded text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" size={18} />
            <button
              type="button"
              onClick={() => setMostrarPassword(!mostrarPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              {mostrarPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* MENSAJE DE ERROR */}
        {error && (
          <div className="bg-red-900/50 border border-red-500 text-red-200 p-3 rounded text-sm">
            {error}
          </div>
        )}

        {/* BOTÓN SUBMIT */}
        <button
          type="submit"
          className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold px-6 py-3 rounded w-full text-lg transition transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,215,0,0.8)] flex items-center justify-center gap-2"
        >
          {esRegistro ? (
            <>
              <UserPlus size={20} />
              Registrarse
            </>
          ) : (
            <>
              <LogIn size={20} />
              Iniciar Sesión
            </>
          )}
        </button>

        {/* CAMBIAR ENTRE LOGIN Y REGISTRO */}
        <div className="text-center pt-4 border-t border-gray-700">
          <button
            type="button"
            onClick={toggleModo}
            className="text-yellow-400 hover:text-yellow-300 text-sm transition"
          >
            {esRegistro 
              ? "¿Ya tienes cuenta? Inicia sesión" 
              : "¿No tienes cuenta? Regístrate"}
          </button>
        </div>
      </form>

      {/* INFO DE SEGURIDAD */}
      <p className="text-gray-500 text-xs mt-6 text-center max-w-md z-10">
        🔒 Tus datos se guardan de forma segura en tu dispositivo
      </p>

      {/* KEYFRAMES */}
      <style jsx>{`
        @keyframes mover {
          0% { transform: translate(-10%, -10%) rotate(0deg); }
          100% { transform: translate(10%, 10%) rotate(360deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}
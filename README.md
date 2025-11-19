# ⚽ Manager Vintage FC

> Colección de cromos de leyendas del fútbol vintage

[![Deploy en Vercel](https://img.shields.io/badge/deploy-vercel-black)](https://managervintagefc.vercel.app/)
[![React](https://img.shields.io/badge/react-18-blue)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/tailwind-3-38bdf8)](https://tailwindcss.com/)

[🎮 **DEMO EN VIVO**](https://managervintagefc.vercel.app/) 
---
[💻 **Código**](https://github.com/tonirs89/managervintagefc)

---

## 📖 Sobre el Proyecto

Manager Vintage FC es un juego web de colección de cromos inspirado en las icónicas colecciones de fútbol de los 90s. El proyecto nació de mi pasión por el fútbol retro y mi cuenta de Instagram donde abro packs de cromos vintage.

Como desarrollador junior, este proyecto me ha permitido aprender y aplicar conceptos modernos de React, trabajar con animaciones complejas, y experimentar con inteligencia artificial para generar las imágenes de los jugadores en estilo pixel art.

---

## ✨ Características

### 🎴 Sistema de Cromos
- **55 leyendas del fútbol** de diferentes épocas
- **4 niveles de rareza:** Común, Rara, Épica, Legendaria
- Sistema de probabilidades realista
- Gestión de duplicados con recompensas en puntos

### 🎬 Animaciones
- Animación completa de apertura de sobres estilo Pokémon TCG
- Secuencia: sobre cerrado → explosión → dorso → flip 3D → revelado
- Efectos visuales con partículas y brillos
- Transiciones suaves optimizadas

### 🧠 Quiz Diario
- 100 preguntas sobre historia del fútbol
- Recompensas por respuestas correctas
- Sistema de quiz diario con cooldown

### 💰 Economía Interna
- Conversión de duplicados en puntos
- Tienda para comprar sobres con puntos
- Sistema de progresión balanceado

### 👤 Multi-Usuario
- Registro con email/contraseña básico
- Progreso individual guardado en localStorage
- Sobre diario por login

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI con hooks (useState, useEffect)
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Estilos y diseño responsive
- **Lucide React** - Iconografía
- **shadcn/ui** - Componentes UI (parcial)

### Animaciones
- **Framer Motion** (conceptos aplicados)
- CSS Animations nativas
- Transforms 3D para efectos de flip

### Generación de Assets
- **IA Generativa (Bing Image Creator)** - Creación de imágenes de jugadores en estilo pixel art
- Diseño manual de dorsos y sobres con CSS

### Deploy & Versionado
- **Vercel** - Deploy automático
- **Git/GitHub** - Control de versiones

---

## 🎨 Proceso de Diseño

### Imágenes con IA
Para evitar problemas de derechos de imagen de jugadores reales, utilicé IA generativa para crear representaciones artísticas en estilo pixel art de las leyendas del fútbol. Esto me permitió:
- Aprender sobre generación de imágenes con IA
- Resolver problemas legales de forma creativa
- Mantener un estilo visual cohesivo y retro

### UI/UX
El diseño está inspirado en:
- Álbumes físicos de cromos de los 90s
- Juegos de cartas digitales modernos (Pokémon TCG Live, Hearthstone)
- Estética dorada/vintage para transmitir nostalgia

---

## 🚀 Instalación Local
```
bash

# Clonar el repositorio
git clone https://github.com/tonirs89/web-album.git

# Entrar al directorio
cd web-album

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

```

Abre [http://localhost:5173] en tu navegador.

---

## 📂 Estructura del Proyecto

```
web-album/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── CromoCard.jsx           # Tarjeta de cromo
│   │   ├── CromoCardBack.jsx       # Dorso del cromo
│   │   ├── SobreCerrado.jsx        # Sobre animado
│   │   └── AbrirSobreAnimado.jsx   # Sistema completo de animación
│   ├── data/
│   │   ├── jugadores.js            # Base de datos de 55 jugadores
│   │   └── preguntas.js            # 100 preguntas del quiz
│   ├── pages/
│   │   ├── LoginPage.jsx           # Pantalla de login
│   │   ├── AlbumPage.jsx           # Álbum principal
│   │   └── QuizModal.jsx           # Modal del quiz diario
│   └── App.jsx                     # Componente raíz
├── public/
│   └── cromos/                     # Imágenes de jugadores
└── package.json
```

---

## 🎯 Roadmap

### Corto Plazo
- [x] Sistema base de cromos
- [x] Animaciones de apertura
- [x] Quiz diario
- [x] Sistema multi-usuario básico
- [ ] README completo con screenshots
- [ ] Tests básicos con Vitest

### Medio Plazo
- [ ] Backend real (Firebase/Supabase)
- [ ] Autenticación OAuth (Google)
- [ ] Migración a TypeScript
- [ ] Leaderboard global
- [ ] Trading entre usuarios

### Largo Plazo
- [ ] Modo offline (PWA)
- [ ] Notificaciones push
- [ ] Seasons y eventos especiales
- [ ] App móvil con React Native

---

## 🎓 Lo Que Aprendí

Este proyecto me permitió desarrollar habilidades en:

- **React avanzado:** Gestión compleja de estado, optimización de re-renders
- **Animaciones web:** CSS transforms, keyframes, timing functions
- **Persistencia de datos:** LocalStorage, serialización de estado
- **IA generativa:** Prompting efectivo para generación de imágenes
- **UX de juegos:** Sistemas de recompensa, feedback visual, progresión
- **Deploy y CI/CD:** Vercel, GitHub Actions
- **Responsive design:** Mobile-first, breakpoints, touch interactions

---

## 🐛 Problemas Conocidos

- El sistema actual usa localStorage (limitado a un navegador)
- No hay validación de email real
- Las imágenes de algunos jugadores pueden tardar en cargar
- No hay recuperación de contraseña

Estos son limitaciones conscientes del MVP que planeo resolver en futuras versiones.

---

## 🤝 Contribuciones

Este es un proyecto personal de aprendizaje, pero estoy abierto a feedback y sugerencias. Si encuentras algún bug o tienes ideas para mejorarlo:

1. Abre un [Issue](https://github.com/tonirs89/managervintagefc/issues)
2. Describe el problema o sugerencia
3. Si quieres contribuir código, abre un Pull Request

---

## 👨‍💻 Sobre Mí

Soy Toni, desarrollador frontend apasionado por el fútbol retro y la tecnología.
Después de hacer proyectos hace años (como FriendsRoom, una web de compañeros de piso), volví recientemente al desarrollo para especializarme en el stack moderno: React, Tailwind, Vite y más.

Manager Vintage FC es mi proyecto más completo hasta ahora, donde combino mi cuenta de Instagram de cromos vintage con mi objetivo de crear aplicaciones web profesionales.

**Conecta conmigo:**
- 🐙 GitHub: [(https://github.com/tonirs89)]
- 💼 LinkedIn: [(https://www.linkedin.com/in/antonioreinasaez)]
- 📷 Instagram: [(https://www.instagram.com/managervintagefc/)]
---

## 📄 Licencia

Este proyecto es de código abierto bajo licencia MIT. Las imágenes de los jugadores fueron generadas con IA y son de uso libre para este proyecto educativo.

---

## 🙏 Agradecimientos

- A la comunidad de React por los recursos increíbles
- A Bing Image Creator por facilitar la generación de assets
- A todos los que probaron el juego y dieron feedback
- A las leyendas del fútbol que inspiraron esta colección

---

⚽ **Hecho con pasión por el fútbol vintage y el desarrollo web** ⚽
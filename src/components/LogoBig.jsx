export default function LogoBig({ className = "" }) {
  return (
    <svg
      width={900}
      viewBox="0 0 300 200" 
      className={`w-full h-auto ${className}`} 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Contorno dorado con brillo */}
      <rect 
        x="50" 
        y="30" 
        width="200" 
        height="140" 
        rx="10" 
        fill="none" 
        stroke="#FFD700" 
        strokeWidth="3"
        style={{ filter: 'drop-shadow(0 0 20px rgba(255,215,0,0.5))' }}
      />
      
      {/* Línea divisoria horizontal */}
      <line 
        x1="70" 
        y1="100" 
        x2="230" 
        y2="100" 
        stroke="#FFD700" 
        strokeWidth="1" 
        opacity="0.5"
      />
      
      {/* Texto: MANAGER */}
      <text
        x="150"
        y="85"
        fontSize="26"
        fontWeight="bold"
        fill="#FFD700"
        textAnchor="middle"
        letterSpacing="3"
      >
        MANAGER
      </text>
      
      {/* Texto: VINTAGE FC */}
      <text
        x="150"
        y="125"
        fontSize="16"
        fontWeight="normal"
        fill="#FFA500"
        textAnchor="middle"
        letterSpacing="6"
      >
        VINTAGE FC
      </text>
    </svg>
  );
}
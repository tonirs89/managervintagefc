// src/pages/TestSobre.jsx

import SobreCerrado from '../components/SobreCerrado';

export default function TestSobre() {
  const handleClick = () => {
    console.log("¡Sobre clickeado!");
  };

  return (
    <div className="min-h-screen bg-[#0c0a05] flex items-center justify-center gap-8">
      <SobreCerrado onClick={handleClick} />
      <SobreCerrado disabled={true} />
    </div>
  );
}
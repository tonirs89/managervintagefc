import React, {useState, useEffect} from "react";

//Calcula el tiempo inicial restante en milisegundos
function CronometroInverso({fechafin}){
        const calcularTiempoRestante =() =>{
            const diferencia = new Date(fechafin).getTime() - new Date().getTime();
            return Math.max(0, diferencia); // Devuelve 0 si ya pasó la fecha
        };

    const [tiempoRestante, setTiempoRestante] = useState(calcularTiempoRestante());

    //Solo inicia si es mayor que 0
    useEffect(() => {
        if (tiempoRestante <= 0 ){
            return;
        }

    const intervalo =setInterval(() =>{
        const nuevaDiferencia = new Date().getTime() - new Date(fechafin).getTime();
        setTiempoRestante(Math.max(0, new Date(fechafin).getTime() - new Date().getTime()));
    }, 1000);

    //funcion de limpieza que se ejecuta antes de nuevo render
    return () => clearInterval(intervalo);
    }, [tiempoRestante, fechafin]);

    // Formatea el tiempo restante en días, horas, minutos y segundos
    const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

    return (
        <div>
            {tiempoRestante > 0 ? (
                `${segundos}s`
            ) : (
                '¡Tiempo agotado!'
            )}
        </div>
    );
}

export default CronometroInverso;
import React, {useState, useEffect} from "react";

const CuentaAtras = ({ preguntaActual, manejarTiempoAgotado }) => {
    const [segundos, setSegundos] = useState(10)

    useEffect(() => {
        //resta de 10 a 0 y llega a 0 se para
        const intervalo = setInterval(()=> {
            setSegundos((preSegundos)=>{
                if(preSegundos === 0){
                    return 0;
                }
            return preSegundos-1;
        })},1000)
        return() => clearInterval(intervalo)

        
    },[])

    //cuando cambie de pregunta vuelva a 10s
     useEffect(() => {
        setSegundos(10)
    }, [preguntaActual])

    //callback si se agotado el tiempo
    useEffect(() => {
    if (segundos === 0) {
        manejarTiempoAgotado();
    }
    }, [segundos]);
    
    return(
        <div>
             <strong>{segundos}s</strong>
        </div>
    )
}


export default CuentaAtras;
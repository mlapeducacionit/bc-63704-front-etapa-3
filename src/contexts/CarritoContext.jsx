import { createContext } from "react";

/* CREANDO CONTEXTO */
/* 1er -> Crear un contexto */
const CarritoContext = createContext()

/* 2do -> El armado del Provider */
const CarritoProvider = ( { children } ) => {

    const data = {}

    return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}

/* 3er -> Exportaciones */
export { CarritoProvider }
export default CarritoContext
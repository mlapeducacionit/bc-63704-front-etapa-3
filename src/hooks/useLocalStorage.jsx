import { useState } from "react";


export const useLocalStorage = (clave, valorInicial = []) => {

    const [valorAlmacenado, setValorAlmacenado] = useState(valorInicial)


    return [ valorAlmacenado ]
}
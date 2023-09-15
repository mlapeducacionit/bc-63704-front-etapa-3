import { useState, createContext, useEffect } from "react"
import { get, post } from "../utils/http"
/* CREANDO CONTEXTO */
/* 1er -> Creación del contexto */
const ProductoContext = createContext()

/* 2do -> El armado del Provider */
const url = 'http://localhost:8080/productos/'
const ProductoProvider = ( { children } ) => {
    const [productos, setProductos] = useState(null)

    useEffect(() => {
        obtenerProductos()
    }, []) // <= Al tener un array de referencias vacío el useEffect se va a ejecutar una sola vez

    const obtenerProductos = async () => {
        try {
            const products = await get(url)
            setProductos(products)
        } catch (error) {
            console.error('Ocurrió un error en obtenerProductos()', error)
        }
    }

    const crearProductoContext = async (productoNuevo) => {
        try {
            const productoCreado = await post(url, productoNuevo)
            setProductos([...productos, productoCreado])
        } catch (error) {
            console.error('Algo pasó en el crearProductoContext', error)
        }
    }

    const data = {productos, crearProductoContext}

    return <ProductoContext.Provider value={data}>{children}</ProductoContext.Provider>
}
/* 3er -> Las exportaciones */
export { ProductoProvider }
export default ProductoContext
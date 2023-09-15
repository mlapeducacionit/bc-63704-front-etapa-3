import { useState, createContext, useEffect } from "react"
import { del, get, post } from "../utils/http"
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

    const eliminarProductoContext = async (id) => {
        try {
            const productoEliminado = await del(url, id)
            console.log(productoEliminado)
            let nuevaDB = productos.filter(producto => producto.id !== id)
            setProductos(nuevaDB)
        } catch (error) {
            console.error('Algo pasó en el eliminarProductoContext', error)
        }
    }

    const data = {productos, crearProductoContext, eliminarProductoContext}

    return <ProductoContext.Provider value={data}>{children}</ProductoContext.Provider>
}
/* 3er -> Las exportaciones */
export { ProductoProvider }
export default ProductoContext
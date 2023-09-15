
export const get = async (url) => {

    const config = {
        method: 'GET'
    }

    try {
        const respuesta = await fetch(url, config)
        if ( !respuesta.ok ) {
            throw new Error(`Ocurrió un problema ${respuesta.status} ${respuesta.statusText}`)
        }
        const productos = await respuesta.json()
        return productos
    } catch (error) {
        console.error('ERROR GET', error)
    }
}

export const post = async (url, dato) => {
    try {

        const config = {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify(dato)
        }

        const respuesta = await fetch(url, config)
        if ( !respuesta.ok ) {
            throw new Error(`Ocurrió un problema ${respuesta.status} ${respuesta.statusText}`)
        }
        const productoCreado = await respuesta.json()
        return productoCreado
        
    } catch (error) {
        console.error('ERROR POST', error)
    }
}

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
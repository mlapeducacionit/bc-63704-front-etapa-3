import React from 'react'

const Formulario = () => {
  return (
    <>
      <h2>Agregar (Editar) producto</h2>
      <form>
        <div>
          <label htmlFor="lbl-nombre">Nombre</label>
          <input type="text" name="nombre" id="lbl-nombre" placeholder='Ingrese un nombre'/>
        </div>
        <div>
          <label htmlFor="lbl-precio">Precio</label>
          <input type="text" name="precio" id="lbl-precio" placeholder='Ingrese un precio'/>
        </div>
        <div>
          <label htmlFor="lbl-stock">Stock</label>
          <input type="text" name="stock" id="lbl-stock" placeholder='Ingrese un stock'/>
        </div>
        <div>
          <label htmlFor="lbl-marca">Marca</label>
          <input type="text" name="marca" id="lbl-marca" placeholder='Ingrese un marca'/>
        </div>
        <div>
          <label htmlFor="lbl-categoria">Categoría</label>
          <input type="text" name="categoria" id="lbl-categoria" placeholder='Ingrese un categoria'/>
        </div>
        <div>
          <label htmlFor="lbl-detalles">Detalles</label>
          <input type="text" name="detalles" id="lbl-detalles" placeholder='Ingrese un detalles'/>
        </div>
        <div>
          <label htmlFor="lbl-foto">Foto</label>
          <input type="text" name="foto" id="lbl-foto" placeholder='Ingrese un foto'/>
        </div>
        <div>
          <label htmlFor="lbl-envio">Envío</label>
          <input type="checkbox" name="envio" id="lbl-envio" placeholder='Ingrese un envio'/>
        </div>
        <button type="submit">Enviar</button>
        <button type="reset">Limpiar</button>
      </form>
    </>

  )
}

export default Formulario
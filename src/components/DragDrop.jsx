import './DragDrop.scss'

const DragDrop = ({ setFoto, srcImagen, setSrcChange}) => {
  return (
    <div className='drag-drop-container'>
        <p>
            Subir imagen al servidor con <b>File Dialog</b> o con
            <b>drag and drop</b> dentro del area punteada.
        </p>
        <br />
        <input type="file" id="lbl-foto" accept="image/*" />
        <label className="drag-drop-button" htmlFor="lbl-foto">
            File Dialog
        </label>
        <br />
        <br />

        <div className='drag-drop-image'>
            <img src="" alt="" />
        </div>

    </div>
  )
}

export default DragDrop
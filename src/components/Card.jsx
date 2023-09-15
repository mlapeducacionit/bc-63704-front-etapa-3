import "./Card.scss";

const Card = ({ producto }) => {
  // console.log(producto)

  const handleClick = (producto) => {
    console.log(producto)
    //agregarCarritoContext(producto)
  }
  
  return (
    <a href="#" className="card">
      <article className="card__article">
        <div className="card__image-container">
          <img className="card__image" src={producto.foto} alt={producto.nombre} />
        </div>
        <div className="card__content">
          <h2 className="card_heading">{producto.nombre}</h2>
          <div className="card__description">
            <p>{producto.detalles}</p>
          </div>
          <button onClick={() => handleClick(producto)}>Agregar</button>
        </div>
      </article>
    </a>
  );
};

export default Card;

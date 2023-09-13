import "./Card.scss";

const Card = ({ producto }) => {
  // console.log(producto)
  
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
        </div>
      </article>
    </a>
  );
};

export default Card;

import "./Card.scss";

const Card = () => {
  return (
    <a href="#" className="card">
      <article className="card__article">
        <div className="card__image-container">
          <img className="card__image" src="img/apple-iphone-11-pro-max.jpg" alt="IPhone 11 Pro Max" />
        </div>
        <div className="card__content">
          <h2 className="card_heading">IPhone 11 Pro Max</h2>
          <div className="card__description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              iure quasi cupiditate quisquam facere molestiae odio neque rerum
              provident voluptas!
            </p>
          </div>
        </div>
      </article>
    </a>
  );
};

export default Card;

import classNames from "classnames"


const Card = ({className, img, title, dateDelivery, price   }) => {
  return (
    <article className={classNames(className, "card")}>
        <img className="card__image"
        src={img}
        alt={title}/>
      <div className="card__content">
        <h3 className="card__title">Strauß Tulpen Dolche Vita (51 Stück)
        </h3>
        <div className="card__footer">
          <p className="card__date-delivery">{dateDelivery}</p><button
            className="card__button">{price}&nbsp;€</button>
        </div>
      </div>
    </article>
  )
}

export default Card
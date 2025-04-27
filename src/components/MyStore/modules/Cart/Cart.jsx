

const Cart = () => {
  return (
    <section className="cart cart_open">
          <div className="cart__container">
            <div className="cart__header">
              <h3 className="cart__title">Ihre Bestellung</h3>

              <button className="cart__close">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="5.70715" width="1" height="25"
                    transform="rotate(-45 5 5.70715)" fill="#D17D2F" />
                  <rect x="22.6777" y="5" width="1" height="25"
                    transform="rotate(45 22.6777 5)" fill="#D17D2F" />
                </svg>
              </button>
            </div>

            <p className="cart__date-delivery">heute um 14:00</p>

            <ul className="cart__list">
              <li className="cart__item"><img className="cart__img"
                  src="https://dull-rose-pawpaw.glitch.me/img/39.jpg"
                  alt="Rosenstrauß Grand Avalanche (101 Stück)"/>
                <h4 className="cart__item-title">Rosenstrauß Grand Avalanche (101 Stück)</h4>
                <div className="cart__counter"><button
                    className="cart__counter-btn">-</button><input
                    className="cart__counter-input" type="number" max="99" min="0"
                    value="1"/><button className="cart__counter-btn">+</button></div>
                <p className="cart__price">1480&nbsp;€</p>
              </li>
              <li className="cart__item"><img className="cart__img"
                  src="https://dull-rose-pawpaw.glitch.me/img/38.jpg"
                  alt="Strauß Tulpen Dolche Vita (51 Stück))"/>
                <h4 className="cart__item-title">Strauß Tulpen Dolche Vita (51 Stück)</h4>
                <div className="cart__counter"><button
                    className="cart__counter-btn">-</button><input
                    className="cart__counter-input" type="number" max="99" min="0"
                    value="2"/><button className="cart__counter-btn">+</button></div>
                <p className="cart__price">1340&nbsp;€</p>
              </li>
              <li className="cart__item"><img className="cart__img"
                  src="https://dull-rose-pawpaw.glitch.me/img/41.jpg"
                  alt="Букет из роз Grand Mirabel (101 шт)"/>
                <h4 className="cart__item-title">Rosenstrauß Grand Mirabel (101 Stück)
                </h4>
                <div className="cart__counter"><button
                    className="cart__counter-btn">-</button><input
                    className="cart__counter-input" type="number" max="99" min="0"
                    value="3"/><button className="cart__counter-btn">+</button></div>
                <p className="cart__price">639&nbsp;€</p>
              </li>
            </ul>

            <div className="cart__footer">
              <button className="cart__order-btn">Summe</button>
              <p className="cart__price cart__price_total">0&nbsp;€</p>
            </div>
          </div>
        </section>
  )
}

export default Cart
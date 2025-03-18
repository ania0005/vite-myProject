
import "./MyStore.css";

const MyStore = () => {
  return (
<div>
  <header className="header">
    <div className="container header__container">
      <form className="header__form" action="#">
        <input className="header__input" type="search" name="search"
          placeholder="Strauß Rosen"/>
        <button className="header__search-button" aria-label="Beginnen Sie mit der Suche">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.3333 4.16663C13.3333 4.78496 13.9442 5.70829 14.5625 6.48329C15.3575 7.48329 16.3075 8.35579 17.3967 9.02163C18.2133 9.52079 19.2033 9.99996 20 9.99996M20 9.99996C19.2033 9.99996 18.2125 10.4791 17.3967 10.9783C16.3075 11.645 15.3575 12.5175 14.5625 13.5158C13.9442 14.2916 13.3333 15.2166 13.3333 15.8333M20 9.99996H4.76837e-07"
              stroke="white" />
          </svg>
        </button>
      </form>

      <img className="header__logo" src="./img/logo.svg"
        alt="Mirano Flower Boutique-Logo"/>
      <button className="header__cart-button">0</button>
    </div>
  </header>

  <main>
    <section className="hero">
      <div className="container">
        <div className="hero__head-group">
          <h1 className="hero__title">Blumensträuße des Autors</h1>
          <p className="hero__subtitle">und Geschenke</p>
        </div>

        <figure className="hero__group-image">
          <picture className="hero__image hero__image_left">
            <source
              srcSet="./img/hero-left@1x.avif 1x, ./img/hero-left@2x.avif 2x"
              type="image/avif"/>
            <source
              srcSet="./img/hero-left@1x.webp 1x, ./img/hero-left@2x.webp 2x"
              type="image/webp"/>
            <img src="./img/hero-left@1x.jpg" srcSet="./img/hero-left@2x.jpg 2x"
              alt="Ein Blumenstrauß in einem Glas. Der Strauß besteht aus leuchtend orangefarbenen Rosen, orangefarbenen Tulpen und Löwenmäulchen. Дополнительно в композию включены белые цветы и зеленые элементы, придающие букету объем и разнообразие"/>
          </picture>

          <svg className="hero__image hero__image_center" role="img"
            aria-label="Ein Blumenstrauß in einer Vase, darunter zartrosa Rosen, rosa Chrysanthemen und andere pastellfarbene Blumen, platziert in einer weißen Vase in Kopfform."
            width="680" height="588" viewBox="0 0 680 588" fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            preserveAspectRatio="xMidYMid slice">
            <clippath id="hero">
              <path
                d="M680 112.187C680 137.954 653.568 161.688 609.146 180.61C653.568 211.682 680 250.658 680 292.973C680 335.869 652.836 375.335 607.304 406.613C652.836 425.66 680 449.692 680 475.813C680 537.649 527.777 587.776 340 587.776C152.223 587.776 0 537.649 0 475.813C0 449.692 27.1636 425.66 72.6961 406.613C27.1636 375.335 0 335.869 0 292.973C0 250.658 26.4319 211.682 70.854 180.61C26.4319 161.688 0 137.954 0 112.187C0 50.3515 152.223 0.223633 340 0.223633C527.777 0.223633 680 50.3515 680 112.187Z" />
            </clippath>

            <foreignobject clipPath="url(#hero)" width="100%" height="100%">
              <div className="hero__image-center"></div>
            </foreignobject>

          </svg>


          <picture className="hero__image hero__image_right">
            <source
              srcSet="./img/hero-right@1x.avif 1x, ./img/hero-right@2x.avif 2x"
              type="image/avif"/>
            <source
              srcSet="./img/hero-right@1x.webp 1x, ./img/hero-right@2x.webp 2x"
              type="image/webp"/>
            <img src="./img/hero-right@1x.jpg" srcSet="./img/hero-right@2x.jpg 2x"
              alt="Ein Blumenstrauß in einem Glas. Der Strauß besteht aus leuchtend orangefarbenen Rosen, orangefarbenen Tulpen und Löwenmäulchen. Darüber hinaus enthält die Komposition weiße Blumen und grüne Elemente, die dem Bouquet Volumen und Abwechslung verleihen."/>
          </picture>
        </figure>
      </div>
    </section>

    <section className="filter">
      <h2 className="visually-hidden"></h2>
      <div className="container">
        <form className="filter__form">
          <fieldset className="filter__group">
            <input className="filter__radio" type="radio" name="type"
              value="bouquets" id="flower" checked/>
            <label className="filter__label filter__label_flower"
              htmlFor="flower">Blumen</label>

            <input className="filter__radio" type="radio" name="type" value="toys"
              id="toys"/>
            <label className="filter__label filter__label_toys"
              htmlFor="toys">Spielzeug</label>

            <input className="filter__radio" type="radio" name="type"
              value="postcards" id="postcard"/>
            <label className="filter__label filter__label_postcard"
              htmlFor="postcard">Postkarten</label>
          </fieldset>

          <fieldset className="filter__group filter__group_choices">
            <div className="filter__choices choices">
              <button className="filter__select choices__btn"
                type="button">Preis</button>

              <div className="choices__box filter__choices-box">
                <fieldset className="filter__price">
                  <input className="filter__input-price" type="text" name="minPrice"
                    placeholder="от"/>
                  <input className="filter__input-price" type="text" name="maxPrice"
                    placeholder="до"/>
                </fieldset>
              </div>
            </div>

            <div className="filter__choices filter__choices_type choices">
              <button className="filter__select choices__btn" type="button">Produkttyp</button>

              <div
                className="choices__box filter__choices-box filter__choices-box_type">
                <ul className="filter__type-list">
                  <li className="filter__type-item">
                    <button className="filter__type-button"
                      type="button">Monobouquets</button>
                  </li>
                  <li className="filter__type-item">
                    <button className="filter__type-button" type="button">Blumensträuße des Autors</button>
                  </li>
                  <li className="filter__type-item">
                    <button className="filter__type-button" type="button">Blumen in einer Kiste</button>
                  </li>
                  <li className="filter__type-item">
                    <button className="filter__type-button" type="button">Blumen in einem Korb</button>
                  </li>
                  <li className="filter__type-item">
                    <button className="filter__type-button" type="button">Sträuße aus Trockenblumen</button>
                  </li>
                </ul>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </section>

    <section className="goods">
      <div className="container goods__container">
        <div className="goods__box">
          <h2 className="goods__title">Blumen</h2>

          <ul className="goods__list">
            <li className="goods__item">
              <article className="goods__card card"><img className="card__image"
                  src="https://dull-rose-pawpaw.glitch.me/img/38.jpg"
                  alt="Strauß Tulpen Dolche Vita (51 Stück)"/>
                <div className="card__content">
                  <h3 className="card__title">Strauß Tulpen Dolche Vita (51 Stück)
                  </h3>
                  <div className="card__footer">
                    <p className="card__date-delivery">heute um 14:00</p><button
                      className="card__button">670&nbsp;€</button>
                  </div>
                </div>
              </article>
            </li>
            <li className="goods__item">
              <article className="goods__card card"><img className="card__image"
                  src="https://dull-rose-pawpaw.glitch.me/img/39.jpg"
                  alt="Rosenstrauß Grand Avalanche (101 Stück)"/>
                <div className="card__content">
                  <h3 className="card__title">Rosenstrauß Grand Avalanche (101 Stück)
                  </h3>
                  <div className="card__footer">
                    <p className="card__date-delivery">heute um 14:00 в 14:00</p><button
                      className="card__button">1480&nbsp;€</button>
                  </div>
                </div>
              </article>
            </li>
            <li className="goods__item">
              <article className="goods__card card"><img className="card__image"
                  src="https://dull-rose-pawpaw.glitch.me/img/40.jpg"
                  alt="Rosenstrauß Grand Vanilla Cream (101 Stück)"/>
                <div className="card__content">
                  <h3 className="card__title">Rosenstrauß Grand Vanilla Cream (101 Stück)</h3>
                  <div className="card__footer">
                    <p className="card__date-delivery">heute um 14:00</p><button
                      className="card__button">1980&nbsp;€</button>
                  </div>
                </div>
              </article>
            </li>
            <li className="goods__item">
              <article className="goods__card card"><img className="card__image"
                  src="https://dull-rose-pawpaw.glitch.me/img/41.jpg"
                  alt="Rosenstrauß Grand Mirabel (101 Stück)"/>
                <div className="card__content">
                  <h3 className="card__title">Rosenstrauß Grand Mirabel (101 Stück)
                  </h3>
                  <div className="card__footer">
                    <p className="card__date-delivery">heute um 14:00</p><button
                      className="card__button">2130&nbsp;€</button>
                  </div>
                </div>
              </article>
            </li>
            <li className="goods__item">
              <article className="goods__card card"><img className="card__image"
                  src="https://dull-rose-pawpaw.glitch.me/img/42.jpg"
                  alt="Bouquet 101 ecuadorianische Rosenmischung"/>
                <div className="card__content">
                  <h3 className="card__title">Bouquet 101 ecuadorianische Rosenmischung</h3>
                  <div className="card__footer">
                    <p className="card__date-delivery">heute um 14:00</p><button
                      className="card__button">1420&nbsp;€</button>
                  </div>
                </div>
              </article>
            </li>
            <li className="goods__item">
              <article className="goods__card card"><img className="card__image"
                  src="https://dull-rose-pawpaw.glitch.me/img/43.jpg"
                  alt="Blumenstrauß Mona Lisa (Delphinium)"/>
                <div className="card__content">
                  <h3 className="card__title">Blumenstrauß Mona Lisa (Delphinium)</h3>
                  <div className="card__footer">
                    <p className="card__date-delivery">heute um 14:00</p><button
                      className="card__button">1360&nbsp;€</button>
                  </div>
                </div>
              </article>
            </li>
            <li className="goods__item">
              <article className="goods__card card">
                <img className="card__image"
                  src="https://dull-rose-pawpaw.glitch.me/img/1.jpg"
                  alt="Autorenstrauß aus Rosen, Dianthus und Trockenblumen" />
                <div className="card__content">
                  <h3 className="card__title">Autorenstrauß aus Rosen, Dianthus und Trockenblumen</h3>
                  <div className="card__footer">
                    <p className="card__date-delivery">heute um 14:00</p>
                    <button className="card__button">300&nbsp;ab </button>
                  </div>
                </div>
              </article>
            </li>
            <li className="goods__item">
              <article className="goods__card card"><img className="card__image"
                  src="https://dull-rose-pawpaw.glitch.me/img/2.jpg"
                  alt="Autorenstrauß aus Rosen, Gerbera, Dianthus und Trockenblumen"/>
                <div className="card__content">
                  <h3 className="card__title">Autorenstrauß aus Rosen, Gerbera, Dianthus und Trockenblumen</h3>
                  <div className="card__footer">
                    <p className="card__date-delivery">heute um 14:00</p><button
                      className="card__button">200&nbsp;€</button>
                  </div>
                </div>
              </article>
            </li>
            <li className="goods__item">
              <article className="goods__card card"><img className="card__image"
                  src="https://dull-rose-pawpaw.glitch.me/img/3.jpg"
                  alt="Autorenstrauß aus Rosen und Trockenblumen"/>
                <div className="card__content">
                  <h3 className="card__title">Autorenstrauß aus Rosen und Trockenblumen
                  </h3>
                  <div className="card__footer">
                    <p className="card__date-delivery">heute um 14:00</p><button
                      className="card__button">220&nbsp;€</button>
                  </div>
                </div>
              </article>
            </li>
            <li className="goods__item">
              <article className="goods__card card"><img className="card__image"
                  src="https://dull-rose-pawpaw.glitch.me/img/4.jpg"
                  alt="Монобукет из тюльпанов"/>
                <div className="card__content">
                  <h3 className="card__title">Мein Strauß Tulpen</h3>
                  <div className="card__footer">
                    <p className="card__date-delivery">heute um 14:00</p><button
                      className="card__button">160&nbsp;€</button>
                  </div>
                </div>
              </article>
            </li>
              <article className="goods__card card">
                <img className="card__image"
                  src="https://dull-rose-pawpaw.glitch.me/img/5.jpg"
                  alt="АAutorenstrauß aus Rosen und Dianthus" />
                <div className="card__content">
                  <h3 className="card__title">Autorenstrauß aus Rosen und Dianthus
                  </h3>
                  <div className="card__footer">
                    <p className="card__date-delivery">heute um 14:00</p>
                    <button className="card__button">270&nbsp;€</button>
                  </div>
                </div>
              </article>
              
            <li className="goods__item">
              <article className="goods__card card"><img className="card__image"
                  src="https://dull-rose-pawpaw.glitch.me/img/6.jpg"
                  alt="Mono-Strauß aus Trockenblumen"/>
                <div className="card__content">
                  <h3 className="card__title">Mono-Strauß aus Trockenblumen</h3>
                  <div className="card__footer">
                    <p className="card__date-delivery">heute um 14:00</p><button
                      className="card__button">150&nbsp;€</button>
                  </div>
                </div>
              </article>
            </li>
            <li className="goods__item">
              <article className="goods__card card"><img className="card__image"
                  src="https://dull-rose-pawpaw.glitch.me/img/7.jpg"
                  alt="Blumen in einer Schachtel mit Lilien und Orchideen"/>
                <div className="card__content">
                  <h3 className="card__title">Blumen in einer Schachtel mit Lilien und Orchideen
                  </h3>
                  <div className="card__footer">
                    <p className="card__date-delivery">heute um 14:00</p><button
                      className="card__button">340&nbsp;€</button>
                  </div>
                </div>
              </article>
              <article className="goods__card card">
                <img className="card__image"
                  src="https://dull-rose-pawpaw.glitch.me/img/8.jpg"
                  alt="Autorenstrauß aus Lilien und Chrysanthemen"/>
                <div className="card__content">
                  <h3 className="card__title">Autorenstrauß aus Lilien und Chrysanthemen
                  </h3>
                  <div className="card__footer">
                    <p className="card__date-delivery">heute um 14:00</p>
                    <button className="card__button">290&nbsp;€</button>
                  </div>
                </div>
              </article>
              </li>
             
            <li className="goods__item">
              <article className="goods__card card"><img className="card__image"
                  src="https://dull-rose-pawpaw.glitch.me/img/9.jpg"
                  alt="Monostrauß aus Pfingstrosen"/>
                <div className="card__content">
                  <h3 className="card__title">Monostrauß aus Pfingstrosen</h3>
                  <div className="card__footer">
                    <p className="card__date-delivery">heute um 14:00</p><button
                      className="card__button">250&nbsp;€</button>
                  </div>
                </div></article>
              <article className="goods__card card">
                <img className="card__image"
                  src="https://dull-rose-pawpaw.glitch.me/img/10.jpg"
                  alt="Blumen in einem Korb mit bunten Ranunkeln" />
                <div className="card__content">
                  <h3 className="card__title">Blumen in einem Korb mit bunten Ranunkeln</h3>
                  <div className="card__footer">
                    <p className="card__date-delivery">heute um 14:00</p>
                    <button className="card__button">380&nbsp;€</button>
                  </div>
                </div>
              </article>
            </li>
                
              
            <li className="goods__item">
              <article className="goods__card card"><img className="card__image"
                  src="https://dull-rose-pawpaw.glitch.me/img/11.jpg"
                  alt="Strauß aus Trockenblumen und Lavendel"/>
                <div className="card__content">
                  <h3 className="card__title">Strauß aus Trockenblumen und Lavendel</h3>
                  <div className="card__footer">
                    <p className="card__date-delivery">heute um 14:00</p><button
                      className="card__button">170&nbsp;€</button>
                  </div>
                </div>
              </article>
            </li>
            <li className="goods__item">
              <article className="goods__card card"><img className="card__image"
                  src="https://dull-rose-pawpaw.glitch.me/img/12.jpg"
                  alt="Blumen in einer Schachtel mit Gerbera und Schwertlilien"/>
                <div className="card__content">
                  <h3 className="card__title">Blumen in einer Schachtel mit Gerbera und Schwertlilien
                  </h3>
                  <div className="card__footer">
                    <p className="card__date-delivery">heute um 14:00</p><button
                      className="card__button">320&nbsp;€</button>
                  </div>
                </div>
              </article>
            </li>
            <li className="goods__item">
              <article className="goods__card card"><img className="card__image"
                  src="https://dull-rose-pawpaw.glitch.me/img/13.jpg"
                  alt="Blumen in einem Korb mit einer Mischung aus Frühlingsblumen"/>
                <div className="card__content">
                  <h3 className="card__title">Blumen in einem Korb mit einer Mischung aus Frühlingsblumen</h3>
                  <div className="card__footer">
                    <p className="card__date-delivery">heute um 14:00</p><button
                      className="card__button">360&nbsp;€</button>
                  </div>
                </div>
              </article>
            </li>
            <li className="goods__item">
              <article className="goods__card card"><img className="card__image"
                  src="https://dull-rose-pawpaw.glitch.me/img/14.jpg"
                  alt="Mono-Blumenstrauß aus Gänseblümchen"/>
                <div className="card__content">
                  <h3 className="card__title">Mono-Blumenstrauß aus Gänseblümchen</h3>
                  <div className="card__footer">
                    <p className="card__date-delivery">heute um 14:00</p><button
                      className="card__button">140&nbsp;€</button>
                  </div>
                </div>
              </article>
            </li>
            <li className="goods__item">
              <article className="goods__card card"><img className="card__image"
                  src="https://dull-rose-pawpaw.glitch.me/img/15.jpg"
                  alt="Autorenstrauß aus Gladiolen alstroemeria"/>
                <div className="card__content">
                  <h3 className="card__title">Autorenstrauß aus Gladiolen alstroemeria</h3>
                  <div className="card__footer">
                    <p className="card__date-delivery">heute um 14:00</p><button
                      className="card__button">310&nbsp;€</button>
                  </div>
                </div>
              </article>
            </li>
            <li className="goods__item">
              <article className="goods__card card"><img className="card__image"
                  src="https://dull-rose-pawpaw.glitch.me/img/16.jpg"
                  alt="Trockenblumenstrauß mit Eukalyptus"/>
                <div className="card__content">
                  <h3 className="card__title">Trockenblumenstrauß mit Eukalyptus</h3>
                  <div className="card__footer">
                    <p className="card__date-delivery">heute um 14:00</p><button
                      className="card__button">200&nbsp;€</button>
                  </div>
                </div>
              </article>
            </li>
            <li className="goods__item">
              <article className="goods__card card"><img className="card__image"
                  src="https://dull-rose-pawpaw.glitch.me/img/17.jpg"
                  alt="Blumen in einer Kiste mit Sukkulenten und Callas"/>
                <div className="card__content">
                  <h3 className="card__title">Blumen in einer Kiste mit Sukkulenten und Callas</h3>
                  <div className="card__footer">
                    <p className="card__date-delivery">heute um 14:00</p><button
                      className="card__button">370&nbsp;€</button>
                  </div>
                </div>
              </article>
            </li>
          </ul>
        </div>

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

      </div>
    </section>

    <section className="subscribe">
      <div className="container">
        <h2 className="subscribe__title">Abonnieren Sie&nbsp;den Newsletter</h2>

        <form className="subscribe__form" action="#">
          <input className="subscribe__input" type="email" name="email"
            placeholder="E-mail"/>

          <button className="subscribe__button"
            aria-label="Abonnieren Sie den Newsletter">
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.166687 6.66667C0.78502 6.66667 1.70835 6.05583 2.48335 5.4375C3.48335 4.6425 4.35585 3.6925 5.02169 2.60333C5.52085 1.78667 6.00002 0.796667 6.00002 0M6.00002 0C6.00002 0.796667 6.47919 1.7875 6.97835 2.60333C7.64502 3.6925 8.51752 4.6425 9.51585 5.4375C10.2917 6.05583 11.2167 6.66667 11.8334 6.66667M6.00002 0V20"
                stroke="white" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  </main>

  <footer className="footer">
    <div className="container footer__container">
      <img className="footer__logo" src="img/logo.svg"
        alt="Logo Mirano Flower Boutique"/>

      <address className="footer__address">
        <a className="footer__mail"
          href="mailto:Mirano@gmail.com">Mirano@gmail.com</a>

        <ul className="footer__social-list">
          <li className="footer__social-item">
            <a className="footer__link" href="#" aria-label="канал в телеграм">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14 2.625C7.721 2.625 2.625 7.721 2.625 14C2.625 20.279 7.721 25.375 14 25.375C20.279 25.375 25.375 20.279 25.375 14C25.375 7.721 20.279 2.625 14 2.625ZM19.278 10.36C19.1074 12.1573 18.368 16.5253 17.9926 18.5386C17.8334 19.3918 17.5149 19.6761 17.2191 19.7103C16.5594 19.7671 16.0589 19.278 15.4219 18.8571C14.4209 18.1974 13.8521 17.7879 12.8853 17.1509C11.7591 16.4115 12.4871 16.002 13.1355 15.3423C13.3061 15.1716 16.2181 12.5212 16.275 12.2824C16.2829 12.2462 16.2818 12.2086 16.2719 12.173C16.262 12.1373 16.2436 12.1045 16.2181 12.0776C16.1499 12.0208 16.0589 12.0435 15.9792 12.0549C15.8769 12.0776 14.2844 13.1355 11.179 15.2285C10.724 15.5356 10.3145 15.6949 9.9505 15.6835C9.541 15.6721 8.7675 15.456 8.18738 15.2626C7.47075 15.0351 6.91337 14.91 6.95888 14.5119C6.98163 14.3071 7.266 14.1024 7.80063 13.8863C11.1221 12.4416 13.3289 11.4861 14.4323 11.0311C17.5945 9.71163 18.2429 9.48413 18.6751 9.48413C18.7661 9.48413 18.9823 9.50688 19.1188 9.62063C19.2325 9.71163 19.2666 9.83675 19.278 9.92775C19.2666 9.996 19.2894 10.2008 19.278 10.36Z"
                  fill="#D17D2F" />
              </svg>
            </a>
          </li>

          <li className="footer__social-item">
            <a className="footer__link" href="#" aria-label="YouTube-Kanal">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.6667 17.4999L17.7217 13.9999L11.6667 10.4999V17.4999ZM25.1534 8.36492C25.305 8.91325 25.41 9.64825 25.48 10.5816C25.5617 11.5149 25.5967 12.3199 25.5967 13.0199L25.6667 13.9999C25.6667 16.5549 25.48 18.4333 25.1534 19.6349C24.8617 20.6849 24.185 21.3616 23.135 21.6533C22.5867 21.8049 21.5834 21.9099 20.0434 21.9799C18.5267 22.0616 17.1384 22.0966 15.855 22.0966L14 22.1666C9.11171 22.1666 6.06671 21.9799 4.86504 21.6533C3.81504 21.3616 3.13837 20.6849 2.84671 19.6349C2.69504 19.0866 2.59004 18.3516 2.52004 17.4183C2.43837 16.4849 2.40337 15.6799 2.40337 14.9799L2.33337 13.9999C2.33337 11.4449 2.52004 9.56659 2.84671 8.36492C3.13837 7.31492 3.81504 6.63825 4.86504 6.34659C5.41337 6.19492 6.41671 6.08992 7.95671 6.01992C9.47337 5.93825 10.8617 5.90325 12.145 5.90325L14 5.83325C18.8884 5.83325 21.9334 6.01992 23.135 6.34659C24.185 6.63825 24.8617 7.31492 25.1534 8.36492Z"
                  fill="#D17D2F" />
              </svg>
            </a>
          </li>

          
        </ul>
      </address>

      

      <p className="footer__copyright">©MIRANO, 2025</p>
    </div>
  </footer>

  <div className="order" style={{
    display: 'none',
    }}>
    <div className="order__wrapper">
      <h2 className="order__title">Geben Sie eine Bestellung auf</h2>
      <form className="order__form" id="order">
        <fieldset className="order__fieldset">
          <legend className="order__legend">Kundendaten</legend>
          <div className="order__input-group"><input className="order__input"
              type="text" name="name-buyer" placeholder="Name"/><input
              className="order__input" type="text" name="phone-buyer"
              placeholder="Telefonnummer"/></div>
        </fieldset>
        <fieldset className="order__fieldset">
          <legend className="order__legend">Angaben zum Empfänger</legend>
          <div className="order__input-group"><input className="order__input"
              type="text" name="name-recipient" placeholder="Name"/><input
              className="order__input" type="text" name="phone-recipient"
              placeholder="Telefonnummer"/></div>
        </fieldset>
        <fieldset className="order__fieldset">
          <legend className="order__legend">Addresse</legend>
          <div className="order__input-group"><input className="order__input"
              type="text" name="street" placeholder="Strasse"/><input
              className="order__input order__input_min" type="text" name="house"
              placeholder="Hous"/><input className="order__input order__input_min"
              type="text" name="apartment" placeholder="Wohnung"/></div>
        </fieldset>
        <fieldset className="order__fieldset">
          <div className="order__payment"><label className="order__label-radio"><input
                className="order__radio" type="radio" name="payment-online"
                value="true" checked="true"/>Online-Zahlung</label></div>
          <div className="order__delivery"><label htmlFor="delivery">Lieferung
              01.07</label><input type="hidden" name="delivery-date"
              value="01.07"/>
            <div className="order__select-wrapper"><select className="order__select"
                name="delivery-time" id="delivery">
                <option value="9-12">ab 9:00 bis 12:00</option>
                <option value="12-15">ab 12:00 bis 15:00</option>
                <option value="15-18">ab 15:00 bis 18:00</option>
                <option value="18-21">ab 18:00 bis 21:00</option>
              </select></div>
          </div>
        </fieldset>
      </form>
      <div className="order__footer">
        <p className="order__total">92100&nbsp;ab </p><button className="order__button"
          type="submit" form="order">Befehl</button>
      </div>
    </div>
    <button className="order__close" type="button">×</button>
  </div>

  <div className="order" style={{
    display: 'none',
    }}>
    <div className="order__wrapper">
      <h2 className="order__title">Die Bestellung wurde aufgegeben!</h2>
      <p className="order__id">Ihre Bestellnummer:
      971f365a-caa1-4cdb-9446-bad2eff047e1</p>
    </div>
  </div>
</div>
  );
};

export default MyStore;


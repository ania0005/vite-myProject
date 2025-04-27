import { goodsArray } from "../../goodArray"
import Card from "../Card/Card"
import Cart from "../Cart/Cart"


const Goods = () => {
  return (
    <section className="goods">
      <div className="container goods__container">
        <div className="goods__box">
          <h2 className="goods__title">Blumen</h2>

          <ul className="goods__list">
{goodsArray.map((item) => (
    <li key={item.id} className="goods__item">
    <Card className="goods__card" {...item}/>
  </li>
))}

            
            
          </ul>
        </div>

        <Cart/>

      </div>
    </section>
  )
}

export default Goods
import '../PromoHamb/Tarjeta.css'
export const Tarjeta = (data) => {
    const itemdata = data.item;
    console.log(itemdata);
  return (
        <div className="tarjeta content-promotion-card">
          <div className="div-promotion-img">
            <img className="promotion-img" src={itemdata.img}></img>
          </div>
          <div className="div-promotion-content">
            <a href="#" className="promo-content-name">
              <h4>{itemdata.nombre}</h4>
            </a>
            <div className="div-content-price">
              <p className="real-price">
                {itemdata.precio_actual}
              </p>
              <p className="promo-content-price">
                {itemdata.precio_antiguo}
              </p>
            </div>
            <button type="button" className="promo-content-button">Ver más</button>
          </div>
        </div>
  )
}




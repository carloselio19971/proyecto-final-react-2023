import '../PromoHamb/Tarjeta.css'
export const Tarjeta = ({ item }) => {
    const  { img, nombre, precio_actual, precio_antiguo } = item;
    
  return (
        <div className="tarjeta content-promotion-card">
          <div className="div-promotion-img">
            <img className="promotion-img" src={img}></img>
          </div>
          <div className="div-promotion-content">
            <a href="#" className="promo-content-name">
              <h4>{nombre}</h4>
            </a>
            <div className="div-content-price">
              <p className="real-price">
              {precio_actual}
              </p>
              <p className="promo-content-price">
                {precio_antiguo}
              </p>
            </div>
            <button type="button" className="promo-content-button">Ver más</button>
          </div>
        </div>
  )
}




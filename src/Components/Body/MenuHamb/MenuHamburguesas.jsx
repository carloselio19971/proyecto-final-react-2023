import '../MenuHamb/menuHamb.css'

export  const MenuHamburguesas = () => {
  return (
    <section>
      <section className="top-content">
        <h1>PROMOCIONES DE HAMBURGUESAS ONLINE</h1>
      </section>

      <section className="slide-tarjeta">

        <div className="tarjeta-1 content-promotion-card">
          <div className="div-promotion-img">
            <img className="promotion-img" src="https://www.bembos.com.pe/_ipx/q_85,w_275/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x1370-extrema-descuento-mayo.webp"></img>
          </div>
          <div className="div-promotion-content">
            <a href="#" className="promo-content-name">
              <h4>50% Dscto Extrema</h4>
            </a>
            <div className="div-content-price">
              <p className="real-price">
                S/. 13.00
              </p>
              <p className="promo-content-price">
                S/. 25.90
              </p>
            </div>
            <button type="button" className="promo-content-button">Ver más</button>
          </div>
        </div>

        <div className="tarjeta-2 content-promotion-card">
          <div className="div-promotion-img">
            <img className="promotion-img" src="https://www.bembos.com.pe/_ipx/q_85,w_275/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/c/o/combo-estudiantil-nuevo-800x1370.webp"></img>
          </div>
          <div className="div-promotion-content">
            <a href="#" className="promo-content-name">
              <h4>Combo estudiantil</h4>
            </a>
            <div className="div-content-price">
              <p className="real-price">
                S/. 13.00
              </p>
              <p className="promo-content-price">
                S/. 25.90
              </p>
            </div>
            <button type="button" className="promo-content-button">Ver más</button>
          </div>
        </div>

        <div className="tarjeta-3 content-promotion-card">
          <div className="div-promotion-img">
            <img className="promotion-img" src="https://www.bembos.com.pe/_ipx/q_85,w_275/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/d/u/duo-bembon-800x1370.webp"></img>
          </div>
          <div className="div-promotion-content">
            <a href="#" className="promo-content-name">
              <h4>Dúo Bembón</h4>
            </a>
            <div className="div-content-price">
              <p className="real-price">
                S/. 13.00
              </p>
              <p className="promo-content-price">
                S/. 25.90
              </p>
            </div>
            <button type="button" className="promo-content-button">Ver más</button>
          </div>
        </div>

        <div className="tarjeta-4 content-promotion-card">
          <div className="div-promotion-img">
            <img className="promotion-img" src="https://www.bembos.com.pe/_ipx/q_85,w_275/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x1370-combo-churrita-nov.webp"></img>
          </div>
          <div className="div-promotion-content">
            <a href="#" className="promo-content-name">
              <h4>Promo churraza</h4>
            </a>
            <div className="div-content-price">
              <p className="real-price">
                S/. 13.00
              </p>
              <p className="promo-content-price">
                S/. 25.90
              </p>
            </div>
            <button type="button" className="promo-content-button">Ver más</button>
          </div>
        </div>

      </section>
    </section>
  )
}
    
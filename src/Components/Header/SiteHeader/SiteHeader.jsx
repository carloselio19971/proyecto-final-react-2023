import imglogo from '../../../Imagenes/logobembos.jpg';
import iconoLlamada from '../../../Imagenes/llamada-telefonica.svg';
import hombre from '../../../Imagenes/hombre.svg';
import '../SiteHeader/SiteHeader.css';
export const SiteHeader = () => {
  return (
   <div className="contanier-siteHeader">
    <div className="contenedor-grid-side-header">
        <div className="icono-bembos">
            <img className='img-bembos' src={imglogo}/>
        </div>
        <div className="contenedor-delivery-ingresa-cuenta">
            <div className="delivery">
                <div className='icono-delivery'>
                <img className="icono-llamada" src={iconoLlamada}/>
                </div>
                <div className='texto-delivery'>
                    <p><span className='delivery-texto'>Delivery {''}</span>Lima</p>
                    <p className='numero-delivery'>0141919119</p>
                </div>
            </div>
            <div className="ingresa-cuenta">
                <div className='logo-ingresar'>
                   <img src={hombre}/>
                </div>
                <div className='texto-ingresar'>
                <p>Ingresar o crear tu cuenta</p>
                </div>
               
            </div>
        </div>
    </div>   
   </div>
  )
}


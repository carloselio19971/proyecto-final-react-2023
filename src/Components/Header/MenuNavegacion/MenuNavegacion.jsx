import '../MenuNavegacion/MenuNavegacion.css';
import tienda from'../../../Imagenes/tienda.png';
import carritoCompras from '../../../Imagenes/carrito-de-compras.svg';
import hamburgesaMenu from '../../../Imagenes/hamburguesamenu.png'
import combos from '../../../Imagenes/combos.png'
import Hamburgesas from '../../../Imagenes/hamburguesa.png'
import Promociones from '../../../Imagenes/promociones.svg'
import Beneficios from '../../../Imagenes/beneficios.png'
import ItemMenu from './ItemMenu';
import { useState } from 'react';


const menuItemsData = [
  { imagen: combos, texto: 'MENÚ', enlace: 'https://www.youtube.com/' },
  { imagen: hamburgesaMenu, texto: 'COMBOS', enlace: 'https://tailwindcss.com/' },
  { imagen: Promociones, texto: 'PROMOCIONES', enlace: 'https://www.bembos.com.pe/'  },
  { imagen: Hamburgesas, texto: 'HAMBURGUESAS',  enlace: 'https://www.coca-cola.com/pe/es' },
  { imagen: Beneficios, texto: 'BENEFICIOS' ,enlace: 'https://www.instagram.com/'}
];



const promocionesList = [
  {promocion:'Promociones Personales', enlace: 'https://www.youtube.com/'},
  {promocion:'Promoción para 2',enlace: 'https://www.youtube.com/'},
  {promocion:  'Promoción para Compartir',enlace: 'https://www.youtube.com/'},
  {promocion:  'Cupones',enlace: 'https://www.youtube.com/'}
];

export const MenuNavegacion = () => {
  
  const [showPromocionesList, setShowPromocionesList] = useState(false);

  const handleMouseEnter = () => {
    setShowPromocionesList(true);
  };

  const handleMouseLeave = () => {
    setShowPromocionesList(false);
  };

  return (
    <div className='contenedor-global-menu-navegacion'>
      <div className='contenedor-menu-navegacion ancho'>
          <div className='menu'>
           <nav>
              <ul className='listado-menu' onMouseLeave={handleMouseLeave}>
              {menuItemsData.map((item, index) => (
                <ItemMenu 
                key={index} 
                imagen={item.imagen} 
                texto={item.texto}
                enlace={item.enlace} 
                onMouseEnter={item.texto === 'PROMOCIONES' ? handleMouseEnter : undefined}
                onMouseLeave={item.texto === 'PROMOCIONES' ? handleMouseLeave : undefined}
                />
              ))}
              </ul>
        </nav>
        {showPromocionesList && (
            <ul className='lista-promociones'  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              {promocionesList.map(({promocion,enlace}, index) => (
                <li key={index}><a href={enlace}>{promocion}</a> <hr className='linea-promociones'></hr></li>
              ))}
            </ul>
          )}
      </div>
        <div className='contenedor-botones'>
          <div className='pide-en-tiendas'>
            <div className='icono-tiendas'>
              <img  src={tienda}/>
            </div>
            <div className='texto-tiendas'>
            <p>Pide en tiendas <span>SIN COLAS</span></p>
            </div>
          </div>
          <div className='carrito-compras'>
          <div className='icono-carrito-contenedor'>
              <img  src={carritoCompras}></img>
             <div className='contador-carrito'>
                0
              </div>
          </div>
             
             
          </div>
          
         
         </div>
      </div>
    </div>
    
  )
}


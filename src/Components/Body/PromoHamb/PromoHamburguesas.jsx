import  Axios  from 'axios';
import '../PromoHamb/promoHamb.css'
import { useEffect ,useState } from 'react';
import {Tarjeta} from './Tarjeta';

export  const PromoHamburguesas  = () => {
  const [promociones, setPromociones] = useState([]);

  useEffect(() => {
    const promocionesOnline = 'http://localhost:3000/promociones_online';
    const getPromocionesOnline = async () => {
      try {
        const response = await Axios.get(promocionesOnline);
        console.log(response.data);
        setPromociones(response.data);
      } catch (error) {
        console.error('Error al obtener las promociones en línea:', error);
      }
    };
    getPromocionesOnline();
  }, []); 

  return (
      <section className="ancho contendor-promociones">
        <h1>PROMOCIONES DE HAMBURGUESAS ONLINE</h1>
        <section className='cards-promciones-hamburgesas'>
          {promociones.map((itemdata)=>
          <Tarjeta key={itemdata.id} item={itemdata}
          />      
        )}
         </section>
      </section>
    
   
  )
}
    
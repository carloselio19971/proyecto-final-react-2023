import  Axios  from 'axios';
import '../PromoHamb/promoHamb.css'
import { useEffect ,useState } from 'react';
import {Tarjeta} from '../MenuHamb/Tarjeta';

export  const PromoHamburguesas  = () => {
  const [promociones, setPromociones] = useState([]);
  const [avanzar, setAvanzar]= useState(1);
  const [total, setTotal]=useState([]);
  const [retroceder,setRetroceder]= useState(1);

  useEffect(() => {
    const promocionesOnline = 'http://localhost:3000/promociones_online';
    const getPromocionesOnline = async () => {
      try {
        const response = await Axios.get(promocionesOnline);
        console.log(response.data);
        setPromociones(response.data);
        setTotal(promociones.length)
        console.log(total);
      } catch (error) {
        console.error('Error al obtener las promociones en línea:', error);
      }
    };
    getPromocionesOnline();
  }, []); 

  const handleAvanzar = (e) => {
      e.preventDefault();
    if(avanzar<total-3){
      const valorIniciaAvanzar=avanzar+1;
      const totalMostra=valorIniciaAvanzar+4;
      const variableavanzar= promociones.slice(valorIniciaAvanzar, totalMostra);
      console.log(variableavanzar);
      setAvanzar(valorIniciaAvanzar);
      setPromociones(variableavanzar);
    }
  };

  const handleRetroceder = (e) => {
    e.preventDefault();
    if(avanzar>1){
      const valorIniciaRetroceder=avanzar-1;
      const totalMostra=valorIniciaRetroceder+4;
      const variableReproceder=promociones.slice(valorIniciaRetroceder,totalMostra);
      console.log(variableReproceder);
      setRetroceder(valorIniciaRetroceder);
      setPromociones(variableReproceder);
    }

    

  };

  return (
    <div className='promo-hamburgersas-contenedor-principal'>
      <section className="ancho contendor-promociones">
        <h1>PROMOCIONES DE HAMBURGUESAS ONLINE</h1>
        <section className='cards-promciones-hamburgesas'>
          {promociones.map((itemdata) =>
            <Tarjeta key={itemdata.id} item={itemdata} />
          ).slice(1,5)}
          <button  onClick={(e) => handleRetroceder(e)}>Retroceder </button>
          <button onClick={(e) => handleAvanzar(e)}>Avanzar</button>
        </section>
      
      </section>
    </div>
  );
}
    
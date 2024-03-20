import  Axios  from 'axios';
import '../PromoHamb/promoHamb.css'
import { useEffect ,useState } from 'react';
import { Paginacion } from './Paginacion';
import { Tarjeta } from './Tarjetas/Tarjeta';


export  const PromoHamburguesas  = () => {
  const [promociones, setPromociones] = useState([]);
  const [cantidadPromociones,setcantidadPromociones]=useState(5);
  const [currentPage,setCurrentPage]=useState(1);
 
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

  //El inidice final es la pagina actual y la cantidad de paginas
  const indexFinal=currentPage*cantidadPromociones;
  const indexInicial=indexFinal-cantidadPromociones;
  const nPromociones=promociones.slice(indexInicial,indexFinal);
  const nPaginas=Math.ceil(promociones.length /cantidadPromociones);
  console.log(nPaginas);
  return (
    <div className='promo-hamburgersas-contenedor-principal'>
      <section className="ancho contendor-promociones">
        <div className='encabezadado-promo'>
        <h1>PROMOCIONES DE HAMBURGUESAS ONLINE</h1>
        <Paginacion setCurrentPage={setCurrentPage} currentPage={currentPage} nPaginas={nPaginas} />
        </div>
            <section className='cards-promciones-hamburgesas'>
          {nPromociones.map((itemdata) =>
          <Tarjeta key={itemdata.id} item={itemdata}/>
          )}
        </section>
        <div className='paginas-promocion'>
        { <h3>{currentPage} / {nPaginas}</h3> }
        </div>
       
        </section>
    </div>
  );
}
    
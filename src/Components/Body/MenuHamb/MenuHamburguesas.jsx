import  Axios  from 'axios';
 import '../MenuHamb/menuHamb.css'
import { useEffect ,useState } from 'react';
import {Tarjeta} from './TarjetahABM';
import { Paginacion } from '../PromoHamb/Paginacion';

export  const MenuHamburguesas = () => {
  const [menu, setMenu] = useState([]);
  const [cantidadMenu,setcantidadMenu,]=useState(5);
  const [currentPage,setCurrentPage]=useState(1);
 

  useEffect(() => {
    const promocionesOnline = 'http://localhost:3000/menu';
    const getMenu = async () => {
      try {
        const response = await Axios.get(promocionesOnline);
        console.log(response.data);
        setMenu(response.data);
      } catch (error) {
        console.error('Error al obtener las promociones en línea:', error);
      }
    };
    getMenu();
  }, []); 


  //El inidice final es la pagina actual y la cantidad de paginas
  const indexFinal=currentPage*cantidadMenu;
  const indexInicial=indexFinal-cantidadMenu;
  const nMenu=menu.slice(indexInicial,indexFinal);
  const nPaginas=Math.ceil(menu.length /cantidadMenu);
  console.log(nPaginas);

  return (
    <div className='ancho'>
    <section className="top-content-menu">
      <div className='header-menu'>
      <h1>MENU DE HAMBURGUESAS ONLINE</h1>
      <div className='contenedor-paginacion'>
          <Paginacion setCurrentPage={setCurrentPage} currentPage={currentPage} nPaginas={nPaginas} />
      </div>
      </div>
      <section className='contenedor-menu'>
        {nMenu.map((itemdata) =>
          <Tarjeta key={itemdata.id} item={itemdata}/>
          )}
        </section>
     </section>
     <div className='paginas-promocion'>
        { <h3>{currentPage} / {nPaginas}</h3> }
        </div>
    </div>
      
    
   
  )
}
    
import React from 'react'
import '../PromoHamb/Paginacion.css'
import flechaDerecha from '../../../Imagenes/flecha-derecha.png'
import flechaIzquierda from '../../../Imagenes/flecha-izquierda.png'
export const Paginacion = ({setCurrentPage,currentPage,nPaginas}) => {
 
const next = () =>{
    if(currentPage!== nPaginas) setCurrentPage(currentPage+1)
}

const prev = () =>{
    if(currentPage !== 1) setCurrentPage(currentPage-1)
}

  return (
    <div className='ancho cotenedor-botones-paginacion'>
        {/* <h3>{currentPage} / {nPaginas}</h3> */}
        <div className='boton-previo-next'>
        <img className='flechas-promo' src={flechaIzquierda} onClick={next}/>
        <img className='flechas-promo' src={flechaDerecha} onClick={prev}/>
        </div>
       
    </div>
  )
}


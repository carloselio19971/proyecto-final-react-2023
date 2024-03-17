import '../SlidePanel/SlidePanel.css'
import { useState } from 'react';
import banner1 from '../../../Imagenes/banner-1.jpg';
import banner2 from '../../../Imagenes/banner-2.jpg';
import banner3 from '../../../Imagenes/banner-3.jpg';
import banner4 from '../../../Imagenes/banner-4.jpg';
import flechaDerecha from '../../../Imagenes/flecha-derercha.svg';
import flechaIzquierda from '../../../Imagenes/flecha-izquierda.svg';

export const SlidePanel = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [banner1, banner2, banner3, banner4];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="img-slide">
    <div className="imagen-anterior">
      <img src={flechaIzquierda} className='icono-anterior' onClick={goToPrevious} alt="Flecha Izquierda" />
    </div>
    <div className="imagen-posterior">
      <img src={flechaDerecha} className='icono-siguiente' onClick={goToNext} alt="Flecha Derecha" />
    </div>
    <img src={images[currentIndex]} alt={`imagen ${currentIndex + 1}`} />
  </section>
    

  );
};
 
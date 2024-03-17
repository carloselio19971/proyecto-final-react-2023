import '../../Header/MenuNavegacion/ItemMenu.css'
export const ItemMenu = ({ imagen, texto,enlace, onMouseEnter, onMouseLeave }) => {

const estiloEspecial = texto === "PROMOCIONES" ? {
     filter: 'invert(26%) sepia(12%) saturate(5552%) hue-rotate(196deg) brightness(83%) contrast(109%)'
} : {};

  return (
    <li className='lista-menu'
    onMouseEnter={onMouseEnter} 
    onMouseLeave={onMouseLeave}
    >
    <div className='enlace-menu'>
      <div className='imagen-menu'>
        <img src={imagen} alt={texto} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={estiloEspecial}/>
      </div>
      <a className="enlace-normal" href={enlace}>{texto}</a>
    </div>
    </li>
    );
  
}

export default ItemMenu

import { MenuHamburguesas } from "./MenuHamb/MenuHamburguesas"
import { PromoHamburguesas } from "./PromoHamb/PromoHamburguesas"
import { SlidePanel } from "./SlidePanel/SlidePanel"
import '../Body/Body.css'

export const Body = () => {
  return (
    <div>
      <SlidePanel />
      <div className="ancho">
        <PromoHamburguesas />
        <MenuHamburguesas />
      </div>
     
    </div>
  )
}


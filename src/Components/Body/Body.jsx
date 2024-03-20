import { MenuHamburguesas } from "./MenuHamb/MenuHamburguesas"
import { PromoHamburguesas } from "./PromoHamb/PromoHamburguesas"
import { SlidePanel } from "./SlidePanel/SlidePanel"
import '../Body/Body.css'
import { MenuNavegacion } from "../Header/MenuNavegacion/MenuNavegacion"

export const Body = () => {
  return (
    <div>
      <SlidePanel />
      <div>
        <PromoHamburguesas />
        <MenuHamburguesas/>
      </div>
     
    </div>
  )
}


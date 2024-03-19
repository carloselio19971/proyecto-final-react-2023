import  Axios  from "axios"
import { Body } from "./Components/Body/Body"
import { Footer } from "./Components/Footer/Footer"
import { Header } from "./Components/Header/Header"
import { useEffect } from "react"

export const App = () => {
  
  return (
    <div>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}


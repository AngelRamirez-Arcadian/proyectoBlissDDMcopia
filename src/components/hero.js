import React from 'react'
import Imagen from '../images/ImagenFondo.png'




const Hero = () => (

  <div>
    <img className="imagen-fondo absolute object-cover opacity-30" src={Imagen}/>
    <div className="relative md:mt-60 sm:mt-60">
      <div className="sm:w-full sm:flex sm:flex-col sm:justify-center md:w-full md:flex md:flex-col md:justify-center">
            <div className="sm:flex sm:justify-center md:flex md:justify-center">
                <h1 className="rocha sm:p-11 md:p-11">DANIEL</h1>
            </div>

            <div className="sm:flex sm:justify-center md:flex md:justify-center">
                <h1 className="daniel sm:p-11 md:p-11">ROCHA</h1>
            </div>
      </div>
    </div>
  </div>

)
 
export default Hero
import React from 'react';
import Imagenpc from '../images/PC.svg'

const Infoacercathree = () => {
    return ( 
        
            <div className="sm:flex-col-1 sm:justify-items-center sm:mt-1 md:flex md:justify-around md:mt-1 ">

                <div className="act sm:flex-col sm:text-center md:justify-items-center">   
                    <h1 className="texto-3 sm:text-center sm:text-xs md:text-left md:text-sm">Me gusta hablar en meetups relacionadas con mis  intereses (principalmente JS) compartiendo las cosas que aprendo mientras estoy trabajando en algunosproyectos geniales.</h1>
                    <h1 className="texto-3 sm:text-center sm:-mt-1 md:text-left md:mt-5 sm:text-xs md:text-sm">Mi esposa y yo tenemos muchas mascotas; hasta ahora tenemos 5 perros, 10 periquitos australianos, 6 tortugas y 7 peces.</h1>
                    <h1 className="texto-3 sm:text-center sm:-mt-1 sm:text-xs md:text-left md:text-sm">No soy gamer, sin embargo me encanta jugar dos videojuegos: Pump It Up  y Starcraft2.</h1>
                </div>
            
                <div className="software-engineer sm:text-center md:space-x-4 md:flex md:justify-end md:ml-20">
                        <h1 className="sm:text-xs sm:-mt-16 md:inline-block md:pb-10 md:text-2xl md:mt-20">&#60; SOFTWARE ENGINEER <img className="pc inline-block" src= { Imagenpc} /> &#62;</h1>
                </div>
             

            </div>

     );
}
 
export default Infoacercathree;
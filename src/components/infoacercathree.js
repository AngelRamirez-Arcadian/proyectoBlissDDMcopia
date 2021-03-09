import React from 'react';
import Imagenpc from '../images/PC.svg'

const Infoacercathree = () => {
    return ( 
        
            <div className="flex justify-center">

                <div className="flex-1 h-48 flex flex-wrap justify-start act mr-14">   
                    <h1 className="texto-3 ">Me gusta hablar en meetups relacionadas con mis  intereses (principalmente JS) compartiendo las cosas que aprendo mientras estoy trabajando en algunosproyectos geniales.</h1>
                    <h1 className="texto-3">Mi esposa y yo tenemos muchas mascotas; hasta ahora tenemos 5 perros, 10 periquitos australianos, 6 tortugas y 7 peces.</h1>
                    <h1 className="texto-3">No soy gamer, sin embargo me encanta jugar dos videojuegos: Pump It Up  y Starcraft2.</h1>
                </div>
            

                <div className="container informacion-1 justify-start mt-20">
                    <div className="software-engineer space-x-4 flex justify-end">
                        <h1 className="inline-block pb-10">&#60; SOFTWARE ENGINEER <img className="pc inline-block" src= { Imagenpc} /> &#62;</h1>

                    </div>
                </div>

            </div>

     );
}
 
export default Infoacercathree;
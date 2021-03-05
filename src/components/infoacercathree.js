import React from 'react';
import Imagenpc from '../images/PC.svg'

const Infoacercathree = () => {
    return ( 
        <div className="flex justify-center">
            <div className="container flex space-x-4 justify-items-end">

                <div className="flex-1 h-48 flex flex-wrap justify-start act">   
                    <h1 className="texto-3 ">Me gusta hablar en meetups relacionadas con mis  intereses (principalmente JS) compartiendo las cosas que aprendo mientras estoy trabajando en algunosproyectos geniales.</h1>
                    <h1 className="texto-3">Mi esposa y yo tenemos muchas mascotas; hasta ahora tenemos 5 perros, 10 periquitos australianos, 6 tortugas y 7 peces.</h1>
                    <h1 className="texto-3">No soy gamer, sin embargo me encanta jugar dos videojuegos: Pump It Up  y Starcraft2.</h1>
                </div>

                <div className="flex-1 inline-flex space-x-4 mt-20 justify-end container mx-auto">
                    <h1 className="informacion-1 software-engineer">&#60;SOFTWARE ENGINEER</h1>
                    <img className="pc " src={Imagenpc} alt=""/>
                    <h1 className="informacion-1 software-engineer">&#62;</h1>
                </div>

            </div>
        </div>
     );
}
 
export default Infoacercathree;
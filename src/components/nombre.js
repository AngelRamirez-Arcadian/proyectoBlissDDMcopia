import React from 'react';
import imagen from '../images/ImagenFondo.png'

const Nombre = () => {
    return ( 
        
        <div className="w-full flex flex-col justify-center " src={imagen}>
            <div className="flex justify-center">
                <h1 className="rocha p-11 -m-11 ">Daniel</h1>
            </div>

            <div className="flex justify-center">
                <h1 className="daniel p-11 ">Rocha</h1>
            </div>
        </div>
        
     );
}
 
export default Nombre;
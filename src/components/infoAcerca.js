import React from 'react';

const InfoAcerca = () => {
    return ( 
        
        <div className="sm:grid sm:grid-cols-1 sm:justify-items-center sm:text-3x1 sm:place-content-center md:grid md:grid-cols-1 md:justify-items-center md:text-3x1 md:place-content-center">
                
                <p className="sm:flex md:flex titulo sm:justify-center">ACERCA DE MI</p>
                <p className="sm:flex sm:container sm:pb-12 sm:text-xs sm:text-center md:flex subtitulo md:text-base">&#60; Desarrollador, Manager, Arquitecto de SW, Líder Técnico/&#62;</p>
                <p className="sm:flex sm:text-xs md:flex textos-1 md:text-sm md:mt-5">Soy un Arquitecto de Software de la Ciudad de México viviendo en Pachuca, Hidalgo, con pasión por el diseño y matemáticas e iniciando una empresa llamada Bliss DDM (Desarrollo de Software, Diseño y Marketing Digital)</p>  
        </div>
        
     );
}
 
export default InfoAcerca;
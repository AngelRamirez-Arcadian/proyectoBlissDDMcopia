import React from 'react';

const InfocurriculumP4 = () => {
    return ( 
        
        <div className="sm:grid sm:grid-cols-1 sm:justify-items-center sm:text-3x1 sm:place-content-center md:grid md:grid-cols-1 md:justify-items-center md:text-3x1 md:place-content-center">

                <div className="sm:space-x-4 sm:flex sm:justify-center md:space-x-4 md:flex md:justify-center">
                    <h1 className="fecha sm:text-xs md:text-xs sm:text-center md:text-center">JULIO 2014 - JUNIO 2018</h1>
                </div>

                <div className="sm:mt-1 sm:flex sm:justify-center md:mt-2 md:flex md:justify-center">
                    <h1 className="titulo-2">iSeatz</h1>
                </div>

                <div>
                    <h1 className="subtitulo-3 sm:text-xs md:text-base sm:text-center md:text-center">&#60; Desarrollador Front End/ &#62;</h1>
                </div>

                <div className="textos-3 sm:mt-2 sm:container md:mt-6 md:container md:mx-auto">
                    <h1 className="sm:text-xs md:text-sm sm:text-center">
                    <p className="sm:font-bold md:font-bold md:pb-2">iSeatz Blog</p>
                    <p>Recomendaciones e implementación de mejoras en experiencia de usuario.</p>
                    <p>Desarrollo del sitio bajo una plantilla Wordpress.</p>
                    </h1>
                </div>

                <div className="md:mt-28 sm:mt-12">
                    <div className="sm:space-x-4 sm:flex sm:justify-end md:space-x-4 md:flex md:justify-end">

                        <div>
                            <h1 className="selector-inactivo"></h1>
                        </div>

                        <div>
                            <h1 className="line-2"></h1>
                        </div>

                    </div>

                    <div className="sm:space-x-4 sm:flex sm:justify-between sm:mt-5 md:space-x-4 md:flex md:justify-between md:mt-5">   

                        <div>
                            <h1 className="ano-inactivo">2018</h1>
                        </div>

                        <div>
                            <h1 className="ano-inactivo">2011</h1>
                        </div>

                    </div>
                </div>

        </div>
        
     );
}
 
export default InfocurriculumP4;
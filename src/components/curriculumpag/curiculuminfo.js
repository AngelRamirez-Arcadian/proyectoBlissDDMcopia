import React from 'react';

const InfocurriculumP1 = () => {
    return ( 
        
        <div className="sm:grid sm:grid-cols-1 sm:justify-items-center sm:text-3x1 sm:place-content-center md:grid md:grid-cols-1 md:justify-items-center md:text-3x1 md:place-content-center">

                <div className="sm:space-x-4 sm:flex sm:justify-center md:space-x-4 md:flex md:justify-center">
                    <h1 className="fecha sm:text-xs md:text-xs sm:text-center md:text-center">JULIO 2018 - PRESENTE</h1>
                </div>

                <div className="sm:mt-1 sm:flex sm:justify-center md:mt-2 md:flex md:justify-center">
                    <h1 className="titulo-2">BlissDDM</h1>
                </div>

                <div>
                    <h1 className="subtitulo-3 sm:text-xs md:text-base sm:text-center md:text-center">&#60; Director General/ &#62;</h1>
                </div>

                <div className="textos-3 sm:mt-2 sm:container md:mt-6 md:container md:mx-auto">
                    <h1 className="sm:text-xs md:text-sm sm:text-center"><p>Búsqueda de clientes potenciales.</p>
                    <p>Trabajo con empresas directamente para brindar soluciones de ingeniería de software.</p>
                    <p>Manejo de proyectos y equipos de desarrollo de software.</p></h1>
                </div>

                <div className="md:mt-32 sm:mt-8">
                    <div className="sm:space-x-4 sm:flex sm:justify-end md:space-x-4 md:flex md:justify-end">

                        <div>
                            <h1 className="selector-inactivo"></h1>
                        </div>

                        <div>
                            <h1 className="line-2"></h1>
                        </div>

                    </div>

                    <div className="sm::space-x-4 sm:flex sm:justify-between sm:mt-5 md:space-x-4 md:flex md:justify-between md:mt-5">   

                        <div>
                            <h1 className=" fecha-activa">2018</h1>
                        </div>

                        <div>
                            <h1 className="ano-inactivo">2011</h1>
                        </div>

                    </div>
                </div>

        </div>
        
     );
}
 
export default InfocurriculumP1;
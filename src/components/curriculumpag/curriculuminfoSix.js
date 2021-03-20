import React from 'react';

const InfocurriculumP6 = () => {
    return ( 
        
        <div className="sm:grid sm:grid-cols-1 sm:justify-items-center sm:text-3x1 sm:place-content-center md:grid md:grid-cols-1 md:justify-items-center md:text-3x1 md:place-content-center">

                <div className="sm:space-x-4 sm:flex sm:justify-center md:space-x-4 md:flex md:justify-center">
                    <h1 className="fecha sm:text-xs md:text-xs sm:text-center md:text-center">OCTUBRE 2013 - JUNIO 2014</h1>
                </div>

                <div className="sm:mt-1 sm:flex sm:justify-center md:mt-2 md:flex md:justify-center">
                    <h1 className="titulo-3">Adesis Netlife S.L.</h1>
                </div>

                <div>
                    <h1 className="subtitulo-3 sm:text-xs md:text-base sm:text-center md:text-center">&#60; Líder técnico front end/ &#62;</h1>
                </div>

                <div className="textos-3 sm:mt-2 sm:container md:mt-6 md:container md:mx-auto">
                    <h1 className="sm:text-xs md:text-sm sm:text-center">
                    <p className="sm:font-bold md:font-bold md:pb-4">BBVA Bancomer</p>
                    <p>Desarrollo de módulos y componentes con AngularJS para el sitio de banca en línea.</p>
                    <p>Creación de infraestructura para desarrollo en paralelo a</p>
                    <p>través de varias fábricas de software.</p>
                    <p>Creación de módulos, directivas y controladores para la aplicación</p>
                    <p>web de PyMES (Pequeñas y Medianas Empresas).</p>
                    </h1>
                </div>

                <div className="md:mt-32 sm:mt-24">
                    <div className="sm:space-x-4 sm:flex sm:justify-end md:space-x-4 md:flex md:justify-end">

                        <div>
                            <h1 className="selector-activo"></h1>
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
 
export default InfocurriculumP6;
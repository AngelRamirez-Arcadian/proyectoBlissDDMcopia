import React from 'react';

const InfocurriculumP1 = () => {
    return ( 
        
        <div className="grid justify-items-center">

                <div className="space-x-4 flex justify-end">
                    <h1 className="fecha">JULIO 2018 - PRESENTE</h1>
                </div>

                <div className="mt-8">
                    <h1 className="titulo-2">BlissDDM</h1>
                </div>

                <div>
                    <h1 className="subtitulo-3">&#60; Director General/ &#62;</h1>
                </div>

                <div className="mt-8">
                    <h1 className="textos-3">Búsqueda de clientes potenciales.
                    Trabajo con empresas directamente para brindar soluciones de ingeniería de software.
                    Manejo de proyectos y equipos de desarrollo de software.</h1>
                </div>

                <div className="mt-8">
                    <div className="space-x-4 flex justify-end">

                        <div>
                            <h1 className="selector-inactivo"></h1>
                        </div>

                        <div>
                            <h1 className="line-2"></h1>
                        </div>

                    </div>

                    <div className="space-x-4 flex justify-between mt-5">   

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
import React from 'react';

const InfoAcercaTwo = () => {
    return ( 
        
        <div className="sm:grid sm:grid-cols-1 sm:justify-items-center sm:text-3x1 sm:place-content-center md:grid md:grid-cols-1 md:justify-items-center md:text-3x1 md:place-content-center">

                <div className="sm:flex sm:mt-8 md:flex md:mt-7">
                    <h1 className="textos-2 sm:text-xs md:text-sm">Ofrezco servicios de ingeniería a empresas que necesitan tecnología de software para mejorar sus flujos de trabajo, procesos, o ayudándolos a tener presencia digital.</h1>
                </div>
                <div>
                    <h1 className="subtitulo-2 sm:flex sm:container sm:text-xs md:text-base sm:text-center">&#60;Ayudando con/&#62;</h1>
                </div>

                <div className="sm:flex sm:mt-2 sm:ml-20 md:flex md:mt-6 md:ml-20">
                    <div className="icono sm:text-xs md:text-sm">
                        
                            <ul>&#60; </ul>
                            <ul>&#60; </ul>
                            <ul>&#60; </ul>
                            <ul>&#60; </ul>
                            <ul>&#60; </ul>
                            <ul>&#60; </ul>
                            <ul>&#60; </ul>
                        
                    </div>
                    <div className="lista sm:text-xs md:text-sm">
                        
                            <ul> Desarrollo Web.</ul>
                            <ul> Marketing Digital.</ul>
                            <ul> Tiendas en línea.</ul>
                            <ul> Sistemas Administrativos.</ul>
                            <ul> Desarrollo de aplicaciones de escritorio o para dispositivos móviles.</ul>
                            <ul> Desarrollo a la medida para clientes y necesidades específicas.</ul>
                            <ul> MVP para startups o cualquier gran idea que alguien pueda tener.</ul>
                        

                    </div>
                </div>

                <div>
                    <h1 className="textos-2-1 sm:-mt-2 md:p-2 sm:text-xs md:text-sm">Para agencias creativas, empresas contables, fábricas de trajes, podemos trabajar con cualquier tipo de empresa existente.  Desde grandes empresas a negocios pequeños.</h1>
                    <h1 className="textos-2-1 sm:-mt-2 sm:text-xs md:text-sm">Y también hago un poco de Open Source, aunque la mayoría de mi trabajo es privado.</h1>

                </div>
        </div>
        
     );
}
 
export default InfoAcercaTwo;
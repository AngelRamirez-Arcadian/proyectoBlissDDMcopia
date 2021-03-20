import React from 'react';



const Lateral = () => {
    return ( 
        
        <div className=" flex flex-col w-full justify-star md:justify-star">
            <div className="w-full flex flex-col md:justify-star ">
                <div className="h-48 flex flex-wrap content-start mt-20">
                    <p className="hi-danrocha-xyz">hi@danrocha.xyz </p>
                </div>
                    
                <div className="h-40 flex flex-wrap content-center md:justify-start">
                    <h1 className="nombre-de-la-agencia ">&copy; 2018 Bliss DDM  | All Rights Reserved</h1>
                    <h1 className="canutillo-209-canut">Canutillo 209, Canutillo, 42083 Pachuca de Soto, Hgo., México.</h1>
                </div>

                <div className="h-48 flex flex-wrap content-end px-8">
                    <h1 className="cv">CV</h1>
                </div>
            </div>
        </div>
     );
}
 
export default Lateral;
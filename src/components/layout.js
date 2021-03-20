import React from "react";
import Hero from './hero'
import Nombre from './nombre'
import Lateral from './lateral'
import Lines from './lines'




function Layout() {
  return (

    <div className="min-h-full p-28 font-sans text-gray-900 bg-themeDarkBlue">
    <div >

          <div className="sm:grid sm:grid-cols-3 md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-3 2x1:grid 2x1:grid-cols-3">

            <div className="sm:flex sm:justify-start md:flex md:justify-start lg:flex lg:justify-start xl:flex xl:justify-start 2xl:flex 2x1:justify-start">
            <Lateral />
            </div>

            <div className="sm:flex sm:justify-center md:flex md:justify-center lg:flex lg:justify-center xl:flex xl:justify-center 2x1:flex 2x1:justify-center">
              <Nombre />
            </div>

            <div className="sm:flex sm:justify-end md:flex md:justify-end lg:flex lg:justify-end xl:flex xl:justify-end 2x1:flex 2x1:justify-end">
              <Lines />
            </div>

          </div>
    </div>  
    <div>
      <Hero/>
    </div>
    
    </div>
  );
}
export default Layout;

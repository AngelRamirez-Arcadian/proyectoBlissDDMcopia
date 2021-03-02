import React from "react";
import Hero from './hero'
import Nombre from './nombre'
//import Header from "./header";
import Lateral from './lateral'
import Spotify from './spotify'
import imagen from '../images/ImagenFondo.png'



function Layout() {
  return (

    <div className="mx-full relative inset-0 h-full w-full object-cover font-sans text-gray-900 bg-themeDarkBlue">
          <img className="absolute inset-0 h-full w-full object-cover opacity-30" src={imagen} alt="" />
    <div className="flex space-x-4">
      <div className="flex-1 relative flex justify-center">
        <Lateral />
      </div>

      <div className="flex-1 relative flex justify-around">
        <div className="w-full flex flex-col justify-center">
          <div className="mp-auto flex justify-center">
              <Nombre />
          </div>
        </div>
      </div>

      <div className="flex-1 relative">
        <Spotify />
      </div>
    </div>
    <Hero />
    </div>

  );
}
export default Layout;

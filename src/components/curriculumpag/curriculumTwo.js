import React from "react";
import Hero from '../hero'
import Lateral from '../lateral'
import Lines from '../lines'
import InfocurriculumP2 from './curriculuminfoTwo'



function CurriculumP2() {
  return (
      <body className=" mx-full relative inset-0 h-full w-full object-cover font-sans text-gray-900 bg-themeDarkBlue">
        <header className="container grid justify-items-end h-48 flex-wrap content-end">
            <h1 className="indicador-de-pagina2 ">&#60;CURRICULUM/ &#62;</h1>
        </header>
        <div className="mx-full relative inset-0 h-full w-full object-cover font-sans text-gray-900 bg-themeDarkBlue">

    <div className="flex space-x-4">
      <div className="flex-1 relative flex justify-center">
        <Lateral />
      </div>

      <div className="flex-1 relative flex justify-around">
        <div className="w-full flex flex-col justify-center">
          <div className="mp-auto flex justify-center">
              <InfocurriculumP2/>
          </div>
        </div>
      </div>

      <div className="flex-1 relative">
        <Lines/>
      </div>
    </div>
    <Hero />
    </div>
    </body>

  );
}
export default CurriculumP2;

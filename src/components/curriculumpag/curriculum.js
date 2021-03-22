import React from "react";
import InfocurriculumP1 from './curiculuminfo'



function CurriculumP1() {
  return (
    <div className="min-h-full p-28 font-sans text-gray-900 bg-themeDarkBlue">
      <header className="sm:flex sm:justify-end sr:mr-10 md:flex md:justify-end md:mr-10">
      <h1 className="indicador-de-pagina2 ">&#60;CURRICULUM/ &#62;</h1>
      </header>
            <div className="sm:flex sm:justify-center sm:mt-20 md:flex md:justify-center md:mt-36 lg:flex lg:justify-center xl:flex xl:justify-center 2x1:flex 2x1:justify-center">
              <InfocurriculumP1 />
            </div>
    </div>
  );
}
export default CurriculumP1;

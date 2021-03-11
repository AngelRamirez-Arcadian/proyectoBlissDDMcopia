import React from "react";
import Imagenscript from '../images/scriptImg.svg'
import Imagenpizza from '../images/pizzaImg.svg'
import Imagendog from '../images/dogImg.svg'
import Imagenpc from '../images/PC.svg'




function Infomenu() {
  return (
        <div className="container mx-full bg-white flex justify-center">
          <div className="mt-20 pb-20">
            <div className="">
              <h1 className="inline-block java-script-writer pb-20 ">&#60; JAVA SCRIPT WRITER <img className="group-script inline-block" src= { Imagenscript} /> &#62;</h1>
            </div>

            <div className="">
              <h1 className="inline-block pizza-devourer pb-20">&#60; PIZZA DEVOURER <img className="group-pizza inline-block" src= { Imagenpizza} /> &#62;</h1>
            </div>

            <div className="">
              <h1 className="inline-block pet-accumulator pb-20">&#60; PET ACCUMULATOR <img className="group-dog inline-block" src= { Imagendog} /> &#62;</h1>
            </div>

            <div clas="">
              <h1 className="inline-block iu-developer pb-20">&#60; IU DEVELOPER <img className="group-pc inline-block" src= { Imagenpc} /> &#62;</h1>
            </div>
          </div>
        </div>

  );
}
export default Infomenu;

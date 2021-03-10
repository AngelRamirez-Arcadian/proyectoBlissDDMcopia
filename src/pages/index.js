import React, {Fragment} from "react";
//import Hero from "../components/hero";
import Layout from "../components/layout";
import AcercaDeMi from '../components/AcercaDeMi'
import Acercademitwo from '../components/acercademi-2'
import Acercademithree from '../components/acercademithree'
import CurriculumP1 from '../components/curriculumpag/curriculum'
import CurriculumP2 from '../components/curriculumpag/curriculumTwo'
import CurriculumP3 from '../components/curriculumpag/curriculumThree'
import CurriculumP4 from '../components/curriculumpag/curriculumFour'
import CurriculumP5 from '../components/curriculumpag/curriculumFive'
import CurriculumP6 from '../components/curriculumpag/curriculumSix'


//import SEO from "../components/seo";

function IndexPage() {
  return (
    <Fragment>
    <Layout/>
    <br></br>
    <AcercaDeMi/>
    <br></br>
    <Acercademitwo/>
    <br></br>
    <Acercademithree/>
    <br></br>
    <CurriculumP1/>
    <br></br>
    <CurriculumP2/>
    <br></br>
    <CurriculumP3/>
    <br></br>
    <CurriculumP4/>
    <br></br>
    <CurriculumP5/>
    <br></br>
    <CurriculumP6/>
    </Fragment>
  );
}

export default IndexPage;

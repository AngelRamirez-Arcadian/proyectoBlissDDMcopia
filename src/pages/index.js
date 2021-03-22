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
// import Infomenu from '../components/infoMenu'
import CurriculumP7 from '../components/curriculumpag/curriculumSeven'
import CurriculumP8 from '../components/curriculumpag/curriculumEight'

//import SEO from "../components/seo";

function IndexPage() {
  return (
    <Fragment>
    <Layout/>
    <AcercaDeMi/>
    <Acercademitwo/>
    <Acercademithree/>
    <CurriculumP1/>
    <CurriculumP2/>
    <CurriculumP3/>
    <CurriculumP4/>
    <CurriculumP5/>
    <CurriculumP6/>
    {/*<Infomenu/>*/}
    <CurriculumP7/> 
    <CurriculumP8/>
    </Fragment>
  );
}

export default IndexPage;

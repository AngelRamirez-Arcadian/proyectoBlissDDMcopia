import React, {Fragment} from "react";
//import Hero from "../components/hero";
import Layout from "../components/layout";
import AcercaDeMi from '../components/AcercaDeMi'
import Acercademitwo from '../components/acercademi-2'
import Acercademithree from '../components/acercademithree'
import CurriculumP1 from '../components/curriculumpag/curriculum'
import CurriculumP2 from '../components/curriculumpag/curriculumTwo'
import CurriculumP3 from '../components/curriculumpag/curriculumThree'

//import SEO from "../components/seo";

function IndexPage() {
  return (
    <Fragment>
    <Layout>
      
    </Layout>
    <br></br>
    <AcercaDeMi>

    </AcercaDeMi>
    <br></br>
    <Acercademitwo>

    </Acercademitwo>
    <br></br>
    <Acercademithree>

    </Acercademithree>
    <br></br>
    <CurriculumP1>

    </CurriculumP1>
    <br></br>
    <CurriculumP2>
      
    </CurriculumP2>
    <br></br>
    <CurriculumP3>
      
    </CurriculumP3>
    </Fragment>
  );
}

export default IndexPage;

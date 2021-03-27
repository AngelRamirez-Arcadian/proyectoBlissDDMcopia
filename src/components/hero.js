import React from 'react'
import SocialIcon from './socialIcon'
import Header from './header'


const Hero = () => (
<main className="fixed w-screen inset-0 h-screen font-sans text-gray-900 bg-themeDarkBlue">

  <div className="lateral fixed top-0 bottom-0 flex justify-between">
      <div>
        <p className="hi-danrocha-xyz">hi@danrocha.xyz</p>
      </div>
      <div>
        <p className="nombre-de-la-agencia font-bold pb-6">© 2018 Bliss DDM | All Rights Reserved</p>
        <p className="canutillo-209-canut">Canutillo 209, Canutillo, 42083 Pachuca de Soto, Hgo., México.</p>
      </div>
      <div>
        <p className="cv">CV</p>
      </div>
  </div>

  

{/* Pendiente Menu */}
  <div>        
                <div className="menu">
                    <div className="p-5">
                        <h1 className="line"></h1>
                    </div>
                        
                    <div className="p-5">
                        <h1 className="line"></h1>
                    </div>

                    <div className="p-5">
                        <h1 className="line"></h1>
                    </div>

                    <div className="p-5">
                        <h1 className="line"></h1>
                    </div>
        </div>
  </div>

  <div className="iconssm flex flex-1 relative">
    <div className="w-full flex flex-row justify-center items-end pb-20">
      <SocialIcon iconName="github" />
      <SocialIcon iconName="linkedIn" />
      <SocialIcon iconName="stackOverflow" />
      <SocialIcon iconName="twitter" />
    </div>
  </div>

</main>

)

export default Hero

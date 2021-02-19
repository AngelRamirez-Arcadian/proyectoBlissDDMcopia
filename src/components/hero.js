import React from 'react'
import SocialIcon from './socialIcon'

const Hero = () => (
    <div className="flex flex-1 relative">
    <div className="w-full flex flex-row justify-center items-end pb-20">
      <SocialIcon iconName="Github" />
      <SocialIcon iconName="Linkedin" />
      <SocialIcon iconName="Over" />
      <SocialIcon iconName="Twitter" />
    </div>
  </div>
)
 
export default Hero
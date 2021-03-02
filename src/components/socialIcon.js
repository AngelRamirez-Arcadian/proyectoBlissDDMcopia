import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Github from '../images/Github.svg'
import GithubHover from '../images/GithubHover.svg'
import GithubActive from '../images/GithubActive.svg'
import Twitter from '../images/Twitter.svg'
import TwitterHover from '../images/TwitterHover.svg'
import TwitterActive from '../images/TwitterActive.svg'
import Linkedin from '../images/Linkedin.svg'
import LinkedinHover from '../images/LinkedinHover.svg'
import LinkedinActive from '../images/LinkedinActive.svg'
import Over from '../images/Over.svg'
import OverHover from '../images/OverHover.svg'
import OverActive from '../images/OverActive.svg'
import Spotify from '../images/Spotify.svg'


const images = {
    Github: {
      default: Github,
      hover: GithubHover,
      active: GithubActive
    },
    Twitter: {
      default: Twitter,
      hover: TwitterHover,
      active: TwitterActive
    },
    Linkedin: {
      default: Linkedin,
      hover: LinkedinHover,
      active: LinkedinActive
    },
    Over: {
      default: Over,
      hover: OverHover,
      active: OverActive
    },
    Spotify: {
      default: Spotify,
      hover: Spotify,
      active: Spotify
    }
  }
  
  const SocialImage = styled.img`
    transition: opacity 300ms;
  `
  
  const AbsImage = styled(SocialImage)`
    position: absolute;
    top: 0;
    left: 0;
  `
  
  const ActiveImage = styled(AbsImage)``
  const HoverImage = styled(AbsImage)``
  const DefaultImage = styled(SocialImage)``
  
  const IconContainer = styled.div`
    position: relative;
    width: 42px;
    height: 42px;
  
    ${HoverImage},
    ${ActiveImage} {
      opacity: 0;
    }
  
    ${DefaultImage} {
      opacity: 1;
    }
  
    &:hover {
      ${ActiveImage},
      ${DefaultImage} {
        opacity: 0;
      }
  
      ${HoverImage} {
        opacity: 1;
      }
    }
  
    &::active, &:focus {
      ${HoverImage},
      ${DefaultImage} {
        opacity: 0;
      }
  
      ${ActiveImage} {
        opacity: 1;
      }
    }
  `


const SocialIcon = ({iconName}) => {
    return ( 
        <IconContainer className="mx-4 relative flex justify-items-end">
        <DefaultImage src={images[iconName].default} />
        <HoverImage src={images[iconName].hover} />
        <ActiveImage src={images[iconName].active} />
        </IconContainer>
     )
}
SocialIcon.propTypes = {
    iconName: PropTypes.string.isRequired
  }
  
 
export default SocialIcon;
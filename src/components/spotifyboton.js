import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Spotify from '../images/Spotify.svg'


const images = {
    
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


const SpotifyBoton = ({iconSpot}) => {
    return ( 
        <IconContainer className="mx-4 relative flex justify-items-end">
        <DefaultImage src={images[iconSpot].default} />
        <HoverImage src={images[iconSpot].hover} />
        <ActiveImage src={images[iconSpot].active} />
        </IconContainer>
     )
}
SpotifyBoton.propTypes = {
  iconSpot: PropTypes.string.isRequired
}

  
 
export default SpotifyBoton;
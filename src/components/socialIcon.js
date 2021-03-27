import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Github from '../images/github.svg'
import GithubHover from '../images/githubHover.svg'
import GithubActive from '../images/githubActive.svg'
import Twitter from '../images/twitter.svg'
import TwitterHover from '../images/twitterHover.svg'
import TwitterActive from '../images/twitterActive.svg'
import LinkedIn from '../images/linkedIn.svg'
import LinkedInHover from '../images/linkedInHover.svg'
import LinkedInActive from '../images/linkedInActive.svg'
import stackOverflow from '../images/stackOverflow.svg'
import stackOverflowHover from '../images/stackOverflowHover.svg'
import stackOverflowActive from '../images/stackOverflowActive.svg'

const images = {
  github: {
    default: Github,
    hover: GithubHover,
    active: GithubActive
  },
  twitter: {
    default: Twitter,
    hover: TwitterHover,
    active: TwitterActive
  },
  linkedIn: {
    default: LinkedIn,
    hover: LinkedInHover,
    active: LinkedInActive
  },
  stackOverflow: {
    default: stackOverflow,
    hover: stackOverflowHover,
    active: stackOverflowActive
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

const SocialIcon = ({ iconName }) => {
  return (
    <IconContainer className="mx-3 relative flex justify-items-end">
      <DefaultImage src={images[iconName].default} />
      <HoverImage src={images[iconName].hover} />
      <ActiveImage src={images[iconName].active} />
    </IconContainer>
  )
}

SocialIcon.propTypes = {
  iconName: PropTypes.string.isRequired
}


export default SocialIcon 

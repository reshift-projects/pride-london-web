import React from 'react'
import PropTypes from 'prop-types'
import Youtube from 'react-youtube'
import { Column } from '../../grid'
import BannerTitle from '../bannerTitle'
import BannerSubtitle from '../bannerSubtitle'
import BannerDate from '../bannerDate'
import { StyledContainer, StyledRow, StyledWrapper } from './styles'

const BannerImage = ({
  titleText,
  subtitleText,
  date,
  imageSrc,
  imageFullWidth,
  color,
  children,
  large,
  medium,
  allowContentUnderflow,
  videoId,
}) => (
  <StyledWrapper
    color={color}
    large={large}
    medium={medium}
    allowContentUnderflow={allowContentUnderflow}
    imageSrc={imageSrc}
    imageFullWidth={imageFullWidth}
    role="banner"
  >
    {titleText && (
      <StyledContainer imageSrc={imageSrc} imageFullWidth={imageFullWidth}>
        <StyledRow medium={medium}>
          <Column width={1} pb={[30, 30, 2]}>
            {date && <BannerDate>{date}</BannerDate>}
            <BannerTitle>{titleText}</BannerTitle>
            {subtitleText && <BannerSubtitle>{subtitleText}</BannerSubtitle>}
            {children}
          </Column>
        </StyledRow>
        {videoId && <Youtube videoId={videoId} />}
      </StyledContainer>
    )}
  </StyledWrapper>
)

BannerImage.propTypes = {
  large: PropTypes.bool,
  medium: PropTypes.bool,
  imageSrc: PropTypes.string,
  imageFullWidth: PropTypes.bool,
  subtitleText: PropTypes.string,
  titleText: PropTypes.string,
  color: PropTypes.string,
  date: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  allowContentUnderflow: PropTypes.bool,
  videoId: PropTypes.string,
}

BannerImage.defaultProps = {
  large: false,
  medium: false,
  homepage: false,
  imageFullWidth: false,
  imageSrc: '',
  altText: '',
  subtitleText: '',
  titleText: '',
  color: '',
  children: null,
  date: null,
  allowContentUnderflow: false,
  videoId: null,
}

export default BannerImage

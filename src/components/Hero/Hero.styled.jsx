import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: auto;
  padding-top: 40px;

  width: 360px;
  height: 500px;

  background-image: ${props => `url(${props.imgMobUrl})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: ${props => `url(${props.imgMob2xUrl})`};
  }

  @media screen and (min-device-pixel-ratio: 3),
    (min-resolution: 288dpi),
    (min-resolution: 3dppx) {
    background-image: ${props => `url(${props.imgMob3xUrl})`};
  }

  @media screen and (min-width: 768px) {
    width: 768px;

    background-image: ${props => `url(${props.imgTabUrl})`};

    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: ${props => `url(${props.imgTab2xUrl})`};
    }

    @media screen and (min-device-pixel-ratio: 3),
      (min-resolution: 288dpi),
      (min-resolution: 3dppx) {
      background-image: ${props => `url(${props.imgTab3xUrl})`};
    }
  }

  @media screen and (min-width: 1024px) {
    width: 1024px;
    height: 650px;

    background-image: ${props => `url(${props.imgDeskUrl})`};

    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: ${props => `url(${props.imgDesk2xUrl})`};
    }

    @media screen and (min-device-pixel-ratio: 3),
      (min-resolution: 288dpi),
      (min-resolution: 3dppx) {
      background-image: ${props => `url(${props.imgDesk3xUrl})`};
    }
  }

  @media screen and (min-width: 2560px) {
    width: 1170px;

    background-image: ${props => `url(${props.imgBigUrl})`};

    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: ${props => `url(${props.imgBig2xUrl})`};
    }

    @media screen and (min-device-pixel-ratio: 3),
      (min-resolution: 288dpi),
      (min-resolution: 3dppx) {
      background-image: ${props => `url(${props.imgBig3xUrl})`};
    }
  }
`;

export const Title = styled.h1`
  width: 328px;

  margin-bottom: 21px;

  text-align: center;
  font-size: 40px;
  line-height: 1;
  font-weight: 400;

  color: #ffffff;

  @media screen and (min-width: 768px) {
    width: 380px;
  }
`;

export const Description = styled.p`
  width: 328px;

  margin-bottom: 32px;

  text-align: center;

  color: #ffffff;

  @media screen and (min-width: 768px) {
    width: 380px;
  }
`;

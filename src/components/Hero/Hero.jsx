import CustomBtn from 'components/Button/Button';

import heroMob from '../../images/mob.jpg';
import heroMob2x from '../../images/mob@2x.jpg';
import heroMob3x from '../../images/mob@3x.jpg';
import heroTablet from '../../images/tablet.jpg';
import heroTablet2x from '../../images/tablet@2x.jpg';
import heroTablet3x from '../../images/tablet@3x.jpg';
import heroDesk from '../../images/desktop.jpg';
import heroDesk2x from '../../images/desktop@2x.jpg';
import heroDesk3x from '../../images/desktop@3x.jpg';
import heroBig from '../../images/big.jpg';
import heroBig2x from '../../images/big@2x.jpg';
import heroBig3x from '../../images/big@3x.jpg';
import { Container, Title, Description } from './Hero.styled';

export default function Hero() {
  return (
    <Container
      imgMobUrl={heroMob}
      imgMob2xUrl={heroMob2x}
      imgMob3xUrl={heroMob3x}
      imgTabUrl={heroTablet}
      imgTab2xUrl={heroTablet2x}
      imgTab3xUrl={heroTablet3x}
      imgDeskUrl={heroDesk}
      imgDesk2xUrl={heroDesk2x}
      imgDesk3xUrl={heroDesk3x}
      imgBigUrl={heroBig}
      imgBig2xUrl={heroBig2x}
      imgBig3xUrl={heroBig3x}
    >
      <Title>Test assignment for front-end developer</Title>
      <Description>
        What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they'll be building web interfaces with accessibility in
        mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </Description>

      <a href="#signUp">
        <CustomBtn>Sign up</CustomBtn>
      </a>
    </Container>
  );
}

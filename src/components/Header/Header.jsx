import CustomBtn from 'components/Button/Button';
import logo from '../../images/logo.png';
import { Container, AppBar, Logo, BtnWrap } from './Header.styled';

export default function Header() {
  return (
    <header>
      <Container>
        <AppBar>
          <Logo href="/">
            <img src={logo} alt="logo" width="124" height="26" />
          </Logo>

          <BtnWrap>
            <a href="#users">
              <CustomBtn>Users</CustomBtn>
            </a>
            <a href="#signUp">
              <CustomBtn>Sign up</CustomBtn>
            </a>
          </BtnWrap>
        </AppBar>
      </Container>
    </header>
  );
}

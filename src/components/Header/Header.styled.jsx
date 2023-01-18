import styled from '@emotion/styled';

export const Container = styled.div`
  margin: auto;
  width: 360px;
  padding: 0 16px 0 16px;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px 0 32px;
  }

  @media screen and (min-width: 1024px) {
    width: 1024px;
    padding: 0 60px 0 60px;
  }

  @media screen and (min-width: 2560px) {
    width: 2560px;
    padding: 0 695px 0 695px;
  }
`;

export const AppBar = styled.div`
  display: flex;
  align-items: center;
  height: 60px;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const Logo = styled.a`
  margin-right: 14px;
`;

export const BtnWrap = styled.div`
  display: flex;
  gap: 10px;
`;

import styled from '@emotion/styled';
import Button from 'components/Button/Button';

export const UserWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 140px;
  padding: 0 16px;
`;

export const SubTitle = styled.h2`
  width: 328px;

  margin-bottom: 50px;

  text-align: center;
  font-size: 40px;
  line-height: 1;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin-bottom: 50px;

  @media screen and (min-width: 768px) {
    width: 768px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
  }

  @media screen and (min-width: 1024px) {
    width: 1024px;
    gap: 29px;
  }

  @media screen and (min-width: 2560px) {
    width: 1170px;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 328px;
  height: 254px;

  padding: 20px;

  background: #ffffff;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    width: 344px;
  }

  @media screen and (min-width: 1024px) {
    width: 282px;
  }

  @media screen and (min-width: 2560px) {
    width: 370px;
  }
`;

export const Avatar = styled.img`
  width: 70px;
  height: 70px;
  margin-bottom: 20px;

  border-radius: 50%;
  overflow: hidden;
`;

export const Description = styled.p`
  margin-bottom: 20px;
`;

export const BtnShowMore = styled(Button)`
  margin: auto auto;
`;

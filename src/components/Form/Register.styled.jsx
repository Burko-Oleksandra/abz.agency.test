import styled from '@emotion/styled';

export const FormWrap = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 140px;
  margin-bottom: 100px;
`;

export const SubTitle = styled.h2`
  margin-bottom: 50px;

  font-size: 40px;
  line-height: 1;
`;

export const DataForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-bottom: 43px;
`;

export const DataInput = styled.input`
  width: 328px;
  height: 54px;

  padding: 14px 16px;

  border: 1px solid #d0cfcf;
  border-radius: 4px;

  background-color: #f8f8f8;

  &::placeholder {
    font-family: 'Nunito';
    font-size: 16px;
    line-height: 1.6;
    color: #7e7e7e;
  }

  @media screen and (min-width: 768px) {
    width: 380px;
  }
`;

export const Disription = styled.p`
  width: 328px;
  font-weight: 400;
  margin-bottom: 11px;

  font-size: 16px;
  line-height: 1.6;

  color: rgba(0, 0, 0, 0.87);

  @media screen and (min-width: 768px) {
    width: 380px;
  }
`;

export const RadioForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 13px;

  width: 328px;

  margin-bottom: 50px;

  @media screen and (min-width: 768px) {
    width: 380px;
  }
`;

export const RadioLabel = styled.label`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;

  color: rgba(0, 0, 0, 0.87);
`;

export const RadioInput = styled.input`
  margin-right: 12px;
`;

export const PhotoForm = styled.form`
  display: flex;
  margin-bottom: 50px;
`;

export const PhotoLabel = styled.form`
  font-size: 16px;
  line-height: 1.6;
  text-align: center;

  color: rgba(0, 0, 0, 0.87);
`;

export const PhotoInput = styled.form`
  width: 245px;
  height: 54px;

  border: 1px solid #d0cfcf;
  border-radius: 4px;

  background-color: #f8f8f8;
`;

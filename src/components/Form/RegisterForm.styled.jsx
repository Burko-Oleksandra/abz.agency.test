import styled from '@emotion/styled';

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 140px;
  margin-bottom: 100px;
`;

export const SubTitle = styled.h2`
  font-size: 40px;
  line-height: 1;
`;

export const DataForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 43px;
`;

export const InputWrap = styled.div`
  position: relative;
  margin-top: 50px;
`;

export const DataLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 16px;

  font-family: 'Nunito';
  font-size: 16px;
  line-height: 1.6;
  color: #7e7e7e;

  transform: translateY(-50%);
  transition: transform 250ms linear;
`;

export const DataInput = styled.input`
  width: 328px;
  height: 54px;

  padding: 14px 16px;

  border: 1px solid #d0cfcf;
  border-radius: 4px;

  background-color: #f8f8f8;
  outline: none;

  &::placeholder {
    position: absolute;
    top: 58px;
    left: 16px;
  }

  @media screen and (min-width: 768px) {
    width: 380px;
  }
`;

export const Disription = styled.p`
  width: 328px;

  margin-bottom: 14px;
  margin-top: 43px;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;

  color: rgba(0, 0, 0, 0.87);

  @media screen and (min-width: 768px) {
    width: 380px;
  }
`;

export const RadioWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 328px;
`;

export const RadioLabel = styled.label`
  width: 300px;

  margin-bottom: 13px;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;

  cursor: pointer;
  color: rgba(0, 0, 0, 0.87);
`;

export const RadioInput = styled.input`
  position: absolute;

  width: 0;
  height: 0;

  opacity: 0;
`;

export const FakeRadio = styled.span`
  position: relative;

  display: inline-block;

  margin-right: 12px;

  width: 20px;
  height: 20px;

  vertical-align: text-top;

  border-radius: 50%;
  border: 1px solid #d0cfcf;

  &:hover,
  &:focus {
    border: 1px solid #00bdd3;
  }

  &::before {
    content: '';
    display: none;

    position: absolute;
    top: 50%;
    left: 50%;

    width: 10px;
    height: 10px;

    vertical-align: text-top;

    border-radius: 50%;

    background-color: #00bdd3;

    transform: translate(-50%, -50%);
  }
`;

export const Button = styled.button`
  display: block;
  align-items: center;
  justify-content: center;

  width: 100px;
  height: 34px;

  padding: 4px auto;

  border: none;
  border-radius: 80px;

  cursor: no-drop;
`;

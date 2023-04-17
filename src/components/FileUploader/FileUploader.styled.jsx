import styled from '@emotion/styled';

export const UploadContainer = styled.div`
  margin-bottom: 50px;
`;

export const UploadWrap = styled.div`
  display: flex;
`;

export const UploadBtn = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 47px;

  width: 83px;
  height: 54px;

  border: 1px solid rgba(0, 0, 0, 0.87);
  border-radius: 4px 0px 0px 4px;

  cursor: pointer;
`;

export const FakeInput = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 245px;
  height: 54px;

  margin-top: 47px;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;

  color: #7e7e7e;

  border: 1px solid #d0cfcf;
  border-radius: 0px 4px 4px 0px;

  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 297px;
  }
`;

export const RealInput = styled.input`
  position: absolute;

  width: 0;
  height: 0;

  opacity: 0;
`;

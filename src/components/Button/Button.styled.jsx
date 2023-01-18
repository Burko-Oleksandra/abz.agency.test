import styled from '@emotion/styled';

export const Btn = styled.button`
  display: block;
  align-items: center;
  justify-content: center;

  width: 100px;
  height: 34px;

  padding: 4px auto;

  border: none;
  border-radius: 80px;

  background-color: #f4e041;

  &:hover,
  &:focus {
    background-color: #ffe302;
  }

  &:disabled {
    background-color: #b4b4b4;
  }
`;

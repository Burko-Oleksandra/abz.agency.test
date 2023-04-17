import React from 'react';
import { CustomBtn } from './Button.styled';

export default function Button({ onClick, children }) {
  return (
    <CustomBtn type="button" onClick={onClick}>
      {children}
    </CustomBtn>
  );
}

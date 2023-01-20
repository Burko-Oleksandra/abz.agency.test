import React from 'react';
import { Btn } from './Button.styled';

export default function Button({ onClick, children }) {
  return (
    <Btn type="button" onClick={onClick}>
      {children}
    </Btn>
  );
}

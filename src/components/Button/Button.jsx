import React from 'react';
import { Btn } from './Button.styled';

export default function Button({ children }) {
  return <Btn type="button">{children}</Btn>;
}

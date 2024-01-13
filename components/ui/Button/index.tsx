'use client';
import React from 'react';
import { StyledButton } from './styles';

interface IButtonProps {
  color: 'green' | 'white';
  label: string;
}

export default function Button({ color, label }: IButtonProps) {
  return <StyledButton color={color}>{label}</StyledButton>;
}

'use client';

import styled from 'styled-components';

interface DropdownListProps {
    isOpen?: boolean;
    width?: string; 
  }

export const DropdownContainer = styled.div`
  position: relative;
  z-index: 105;
  margin-top: 3px;
`;

export const DropdownButton = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid var(--primary-color);
  border-radius: 5px;
  padding: 3px;
  cursor: pointer;
  justify-content: space-between;
`;

export const DropdownText = styled.div`
    font-size: 12px;
    font-weight: 700;
`

export const DropdownList = styled.div<DropdownListProps>`
  position: absolute;
  left: 0;
  top: 100%;
  width: ${({ width }) => (width ? width : '100%')};
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  border: 2px solid var(--primary-color);
  background-color: var(--textSecondary-color);
  border-radius: 5px;
`;


export const DropdownItem = styled.li<{selected? : boolean;}>`
  padding: 8px 12px;
  font-size: 12px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? 'var(--primary-color)' : 'transparent')};
  color: ${({ selected }) => (selected ? 'white' : 'var(--textPrimary-color)')};

  &:hover {
    background-color: var(--primary-color);
    color: var(--textSecondary-color);
  }
`;


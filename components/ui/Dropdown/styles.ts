import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  z-index: 105;
  margin-top: 3px;
`;

export const DropdownButton = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #007a7c;
  border-radius: 5px;
  padding: 3px;
  cursor: pointer;
  justify-content: space-between;
`;

export const DropdownText = styled.div`
    font-size: 12px;
    font-weight: 700;
`

export const DropdownList = styled.div<{ isOpen?: boolean; }>`
  position: absolute;
  left: 0;
  top: 100%;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  border: 2px solid #007a7c;
  background-color: #fff;
  border-radius: 5px;
`;

export const DropdownItem = styled.li<{selected? : boolean;}>`
  padding: 8px 12px;
  font-size: 12px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? '#007a7c' : 'transparent')};
  color: ${({ selected }) => (selected ? '#fff' : '#000')};

  &:hover {
    background-color: #007a7c;
    color: #fff;
  }
`;


import styled from 'styled-components'
import { IoIosArrowDown } from "react-icons/io";

export const SelectContainer = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
`

export const ArrowDown = styled(IoIosArrowDown)`
    color: var(--textPrimary--color);
    margin-left: 5px;
`

export const SelectButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  border: 1px solid var(--primary-color);
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
`;

export const SelectList = styled.ul`
    margin-top: 40px;
    width: 180px;
    z-index: 5;
    position: absolute;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const SelectListItem = styled.li`
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 120, 70, 0.5);
  }
`;

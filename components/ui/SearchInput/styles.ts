import styled from 'styled-components';
import { CiSearch } from 'react-icons/ci';

export const SearchContainer = styled.div`
position: relative;
  display: flex;
  border-radius: 10px;
  background-color: var(--backgroundGrayLight-color);
  padding: 10px;
`;

export const StyledSearchInput = styled.input`

  outline: none;
  color: black;
  width: 300px;
`;

export const SearchIcon = styled(CiSearch)`
  color: var(--backgroundGrayDark-color);
  font-size: 24px;
  cursor: pointer;
`;


export const FoundedItemsContainer = styled.div`
    position: absolute;
    top: 55px;
    right: 230px;
    width: 315px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    border-radius: 4px;
`;